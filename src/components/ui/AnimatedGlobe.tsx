import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Sphere, Float } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';

import { attractionPackages } from '../../data';

const GLOBE_RADIUS = 2.5;

// Convert Lat/Lon to 3D Cartesian coordinates
function getPosFromLatLon(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

const countryCoordinates: Record<string, { lat: number, lon: number, name: string }> = {
  "INDIA": { lat: 22.5937, lon: 78.9629, name: "India" },
  "UAE": { lat: 25.2048, lon: 55.2708, name: "UAE" },
  "SINGAPORE": { lat: 1.3521, lon: 103.8198, name: "Singapore" },
  "THAILAND": { lat: 15.5000, lon: 98.5000, name: "Thailand" },
  "NEPAL": { lat: 29.5000, lon: 81.0000, name: "Nepal" },
  "USA": { lat: 38.9072, lon: -77.0369, name: "USA" },
  "UNITED KINGDOM": { lat: 51.5072, lon: -0.1276, name: "United Kingdom" },
  "ASIA EXPLORER": { lat: 12.5000, lon: 109.5000, name: "Vietnam & Cambodia" },
  "HONG KONG": { lat: 22.3193, lon: 114.1694, name: "Hong Kong" },
  "GREECE": { lat: 36.3932, lon: 25.4615, name: "Greece" },
  "BHUTAN": { lat: 27.5000, lon: 92.5000, name: "Bhutan" },
  "MALDIVES": { lat: 4.1755, lon: 73.5093, name: "Maldives" },
  "INDONESIA": { lat: -8.4095, lon: 115.1889, name: "Indonesia" },
  "SRI LANKA": { lat: 7.8731, lon: 80.7718, name: "Sri Lanka" }
};

const allTours = [...attractionPackages.Domestic, ...attractionPackages.International];

const uniqueCountriesMap = new Map();

allTours.forEach(tour => {
  const isDomestic = attractionPackages.Domestic.some(d => d.id === tour.id && d.title === tour.title);
  const countryCode = isDomestic ? "INDIA" : tour.country;

  if (!uniqueCountriesMap.has(countryCode)) {
    const coords = countryCoordinates[countryCode];
    if (coords) {
      uniqueCountriesMap.set(countryCode, {
        id: tour.id.toString() + countryCode,
        name: coords.name,
        desc: "Country",
        lat: coords.lat,
        lon: coords.lon,
        img: tour.image,
        isHub: false
      });
    }
  }
});

const locations = [
  { id: 'hyderabad', name: 'Hyderabad', desc: 'Main Hub', lat: 17.3850, lon: 78.4867, isHub: true, img: '' },
  ...Array.from(uniqueCountriesMap.values())
];

// Precompute local positions of all pins to check visibility dynamically
const locationLocalPositions = locations.map(loc => getPosFromLatLon(loc.lat, loc.lon, GLOBE_RADIUS));

// Single animated flight route & country landing tag
function FlightRoute({
  destination,
  isLanded,
  onCountryClick
}: {
  destination: typeof locations[0];
  isLanded: boolean;
  onCountryClick: (name: string) => void;
}) {
  const destPos = getPosFromLatLon(destination.lat, destination.lon, GLOBE_RADIUS);
  const meshRef = useRef<THREE.Mesh>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  useFrame((state) => {
    if (meshRef.current && tagRef.current) {
      if (!isLanded) {
        tagRef.current.style.opacity = '0';
        tagRef.current.style.pointerEvents = 'none';
        return;
      }

      const worldPos = new THREE.Vector3();
      meshRef.current.getWorldPosition(worldPos);
      const camNormal = state.camera.position.clone().normalize();
      const dot = worldPos.normalize().dot(camNormal);

      if (dot < 0.75) {
        tagRef.current.style.opacity = '0';
        tagRef.current.style.pointerEvents = 'none';
      } else {
        tagRef.current.style.opacity = '1';
        tagRef.current.style.pointerEvents = 'auto';
      }
    }
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        position={destPos}
        onClick={(e) => {
          e.stopPropagation();
          onCountryClick(destination.name);
        }}
        onPointerOver={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          document.body.style.cursor = 'auto';
        }}
      >
        <sphereGeometry args={[0.26, 16, 16]} />
        <meshBasicMaterial transparent opacity={0.001} />

        <Html zIndexRange={[100, 0]} center>
          <div
            ref={tagRef}
            className={`flex items-center gap-1.5 transform -translate-y-5 pointer-events-auto whitespace-nowrap cursor-pointer transition-all duration-500 ease-out hover:scale-110 group ${isLanded
              ? 'scale-100 opacity-100'
              : 'scale-50 opacity-0'
              }`}
            onClick={(e) => {
              e.stopPropagation();
              onCountryClick(destination.name);
            }}
          >
            <svg className="h-5 w-5 text-red-500 shrink-0 drop-shadow-md group-hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="font-rubik text-[14px] font-bold text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)] leading-none group-hover:text-[#0853a4] transition-colors">
              {destination.name}
            </span>
          </div>
        </Html>
      </mesh>
    </group>
  );
}

function GlobeGroup({
  onCountryClick,
  landedCount
}: {
  onCountryClick: (name: string) => void;
  landedCount: number;
}) {
  const specMap = useLoader(THREE.TextureLoader, '/earth-specular.jpg');
  const groupRef = useRef<THREE.Group>(null);

  const speedRef = useRef(0.0015);

  useFrame((state) => {
    if (groupRef.current) {
      let maxDot = -1;
      const camNormal = state.camera.position.clone().normalize();

      for (const localPos of locationLocalPositions) {
        const worldPos = localPos.clone().applyMatrix4(groupRef.current.matrixWorld);
        const dot = worldPos.normalize().dot(camNormal);
        if (dot > maxDot) maxDot = dot;
      }

      const targetSpeed = maxDot > 0.70 ? 0.0012 : 0.014;
      speedRef.current += (targetSpeed - speedRef.current) * 0.05;

      groupRef.current.rotation.y += speedRef.current;
    }
  });

  const countryLocations = locations.filter(l => !l.isHub);

  return (
    <group ref={groupRef} rotation={[0, -3.25, 0]}>
      {/* Base Globe - Land (White) */}
      <Sphere args={[GLOBE_RADIUS * 0.99, 64, 64]}>
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#f4f9fd"
          emissiveIntensity={0.2}
          roughness={0.3}
          metalness={0.1}
          clearcoat={0.5}
        />
      </Sphere>

      {/* Ocean Layer (Blue, transparent over land) */}
      <Sphere args={[GLOBE_RADIUS, 64, 64]}>
        <meshPhysicalMaterial
          color="#0853a4"
          alphaMap={specMap}
          transparent={true}
          roughness={0.1}
          metalness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>

      {/* Outer atmosphere glow */}
      <Sphere args={[GLOBE_RADIUS * 1.05, 64, 64]}>
        <meshBasicMaterial color="#0853a4" transparent opacity={0.015} side={THREE.BackSide} />
      </Sphere>
      <Sphere args={[GLOBE_RADIUS * 1.02, 64, 64]}>
        <meshBasicMaterial color="#0853a4" transparent opacity={0.04} side={THREE.BackSide} />
      </Sphere>

      {/* Render all country pins with staggered landing */}
      {countryLocations.map((loc, idx) => (
        <FlightRoute
          key={loc.id}
          destination={loc}
          isLanded={idx < landedCount}
          onCountryClick={onCountryClick}
        />
      ))}
    </group>
  );
}

function ResponsiveCamera() {
  const { camera, size } = useThree();
  const prevSize = useRef({ width: 0, height: 0 });

  useFrame(() => {
    if (!camera || !size.width || !size.height) return;

    if (Math.abs(size.width - prevSize.current.width) < 1 && Math.abs(size.height - prevSize.current.height) < 1) {
      return;
    }
    prevSize.current = { width: size.width, height: size.height };

    const aspect = size.width / size.height;
    const fovRad = (45 / 2) * (Math.PI / 180);

    const distY = (GLOBE_RADIUS * 1.05) / Math.sin(fovRad);
    const horizFovRad = Math.atan(aspect * Math.tan(fovRad));
    const distX = (GLOBE_RADIUS * 1.08) / Math.sin(horizFovRad);

    const targetDist = Math.max(distY, distX);
    const yPos = 0.6;
    const zPos = Math.sqrt(Math.max(1, targetDist * targetDist - yPos * yPos));

    camera.position.set(0, yPos, zPos);
    camera.updateProjectionMatrix();
  });

  return null;
}

export function AnimatedGlobe() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [landedCount, setLandedCount] = useState(0);

  // Trigger when section comes into viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Staggered landing sequence: country names land one by one
  useEffect(() => {
    if (!inView) return;

    let current = 0;
    const totalCount = locations.filter(l => !l.isHub).length;

    const interval = setInterval(() => {
      current += 1;
      setLandedCount(current);

      if (current >= totalCount) {
        clearInterval(interval);
      }
    }, 240);

    return () => clearInterval(interval);
  }, [inView]);

  const handleCountryClick = (countryName: string) => {
    if (countryName === 'India') {
      navigate('/tours/domestic');
    } else {
      navigate('/tours/international');
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[280px] sm:max-w-[480px] lg:max-w-[600px] aspect-square max-h-[45vh] sm:max-h-[72vh] mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing"
    >

      {/* Floating Instructions Heading */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none text-center w-full px-4">
        <div className="inline-block bg-white/90 backdrop-blur-md px-5 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/60 transition-transform duration-500 hover:scale-105 max-w-[90%]">
          <p className="font-rubik text-[13px] sm:text-[15px] font-bold text-[#100c08] leading-tight">
            Explore Our <span className="text-[#0853a4]">Destinations</span>
          </p>
          <p className="font-jost text-[9px] sm:text-[11px] font-semibold text-slate-500 mt-0.5 uppercase tracking-widest">
            Click any country to view tours
          </p>
        </div>
      </div>

      <Canvas
        camera={{ position: [0, 0.6, 7.05], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ResponsiveCamera />
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#0853a4" />

        {/* Subtle background particles */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <points>
            <bufferGeometry>
              <float32BufferAttribute
                attach="attributes-position"
                args={[new Float32Array(300).map(() => (Math.random() - 0.5) * 15), 3]}
              />
            </bufferGeometry>
            <pointsMaterial size={0.05} color="#0853a4" transparent opacity={0.4} sizeAttenuation />
          </points>
        </Float>

        <Suspense fallback={null}>
          <GlobeGroup
            onCountryClick={handleCountryClick}
            landedCount={landedCount}
          />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 2.15}
          maxPolarAngle={Math.PI / 2.15}
        />
      </Canvas>
    </div>
  );
}
