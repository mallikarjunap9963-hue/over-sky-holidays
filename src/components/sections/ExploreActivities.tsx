import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import type { ActivityName } from '../../types';
import { activityItems } from '../../data';
import { ActivityIcon } from '../icons/Icons';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

/* ──────────────────────────────────────────────────────────────
   Three.js — Pure Monochromatic Globe for Middle Card (No Rings)
   ────────────────────────────────────────────────────────────── */
function SmallCardGlobe({ activeActivity }: { activeActivity: ActivityName }) {
  const mainGroupRef = useRef<THREE.Group>(null);
  const targetSpeedRef = useRef(0.004);
  const currentSpeedRef = useRef(0.004);

  // Trigger gentle burst of rotation speed whenever activity switches
  useEffect(() => {
    currentSpeedRef.current = 0.035; // Gentle spin burst
    targetSpeedRef.current = 0.004;  // Settle to smooth rotation
  }, [activeActivity]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Smooth speed decay after click burst
    currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * 0.06;

    if (mainGroupRef.current) {
      mainGroupRef.current.rotation.y += currentSpeedRef.current;
      mainGroupRef.current.rotation.x = Math.sin(time * 0.25) * 0.1;
    }
  });

  return (
    <Float speed={2.0} rotationIntensity={0.4} floatIntensity={0.3}>
      <group ref={mainGroupRef} scale={1.05}>
        {/* Base Glowing Sphere Core — Frosted White & Soft Sky Aesthetic */}
        <mesh>
          <sphereGeometry args={[1.35, 48, 48]} />
          <meshPhysicalMaterial
            color="#ffffff"
            emissive="#f0f9ff"
            emissiveIntensity={0.22}
            roughness={0.45}
            metalness={0}
            transparent
            opacity={0.68}
          />
        </mesh>

        {/* Outer Geodesic Wireframe Shell — Subtle Light-Blue Lines */}
        <mesh>
          <icosahedronGeometry args={[1.4, 2]} />
          <meshBasicMaterial
            color="#0853a4"
            wireframe
            transparent
            opacity={0.16}
          />
        </mesh>

        {/* Atmosphere Outer Glow Layer */}
        <mesh>
          <sphereGeometry args={[1.52, 32, 32]} />
          <meshBasicMaterial
            color="#0853a4"
            transparent
            opacity={0.06}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function ExploreActivities() {
  const [activeActivity, setActiveActivity] = useState<ActivityName>("Zip lining");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const selectedActivity = activityItems.find((activity) => activity.name === activeActivity) ?? activityItems[0];
  const sectionContainerRef = useRef<HTMLDivElement>(null);

  // Smooth GSAP staggered entrance on middle card contents when activity changes
  useEffect(() => {
    if (sectionContainerRef.current) {
      gsap.fromTo(
        sectionContainerRef.current.querySelectorAll('.activity-content-anim'),
        { opacity: 0.8, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.06 }
      );
    }
  }, [activeActivity]);

  return (
    <>
      {/* ================= EXPLORE ACTIVITIES START ================= */}
      <section
        ref={sectionContainerRef}
        id="activities"
        className="relative overflow-hidden bg-[#f8fbff] px-5 py-10 sm:px-8"
      >
        {/* Decorative world background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <svg
            viewBox="0 0 1400 720"
            className="h-full w-full"
            fill="none"
            stroke="#0853a4"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M44 180c74-112 219-157 327-108 70 32 125 6 170-28 55-43 139-43 195 10 39 37 49 91 29 132-24 49-84 58-100 108-18 59 47 100 31 163-18 72-116 83-198 57-67-21-116-10-161 26-73 58-193 37-232-54-25-59 10-106-16-157-17-34-75-67-45-149Z" />
            <path d="M828 91c99-67 245-52 319 35 43 50 58 119 37 180-23 68-84 82-101 142-15 53 21 94-7 139-38 62-143 72-207 25-55-40-53-96-112-130-44-25-99-15-136-57-39-44-24-116 18-150 40-33 88-30 119-69 30-38 19-82 70-115Z" />
            <path d="M1197 506c58-38 137-18 158 39 18 48-11 107-65 123-59 17-124-24-131-78-4-34 10-65 38-84Z" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-[1320px]">
          {/* Heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0853a4]" />

              <p className="font-satisfy text-[24px] font-normal text-[#0853a4] capitalize">
                Are You Ready To Travel?
              </p>

              <span className="h-px w-8 bg-[#0853a4]" />
            </div>

            <h2 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]">
              Explore Your Activities
            </h2>
          </ScrollReveal>

          {/* Main activity layout */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[340px_minmax(0,1fr)_260px] xl:gap-12">
            {/* Activity selector (Left Column) */}
            <ScrollReveal variant="fade-in-left" delay={150} duration={1300} className="grid grid-cols-2 gap-4 font-rubik">
              {activityItems.map((activity) => {
                const isActive = activeActivity === activity.name;

                return (
                  <button
                    key={activity.name}
                    type="button"
                    onClick={() => setActiveActivity(activity.name)}
                    className={`group flex min-h-[132px] flex-col items-center justify-center rounded-[5px] px-3 text-center transition-all duration-300 ${isActive
                        ? "bg-[#0853a4] text-white shadow-[0_14px_35px_rgba(8,83,164,0.25)] scale-[1.02]"
                        : "bg-white text-[#100c08] shadow-sm hover:-translate-y-1 hover:bg-[#f0f9ff] hover:text-[#0853a4]"
                      }`}
                    aria-pressed={isActive}
                  >
                    <ActivityIcon
                      type={activity.name}
                      className="h-[54px] w-[54px]"
                    />

                    <span className="mt-3 text-[15px] font-semibold">
                      {activity.name}
                    </span>
                  </button>
                );
              })}
            </ScrollReveal>

            {/* Active activity content (Middle Column with Pure Globe centered in background) */}
            <ScrollReveal
              variant="fade-in-up"
              delay={300}
              duration={1300}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedActivity.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative overflow-hidden rounded-[14px] bg-white border border-slate-200/80 p-7 sm:p-9 shadow-[0_12px_45px_rgba(8,83,164,0.065)] font-jost min-h-[460px] flex flex-col justify-between"
                >
                  {/* Pure 3D Globe centered in the middle card background — NO rings/circles */}
                  <div className="pointer-events-none absolute inset-0 m-auto flex h-[200px] w-[200px] sm:h-[380px] sm:w-[380px] items-center justify-center opacity-25 sm:opacity-30 z-0">
                    <Canvas
                      camera={{ position: [0, 0, 4.8], fov: 45 }}
                      dpr={[1, 1.5]}
                      style={{ background: 'transparent' }}
                      gl={{ antialias: true, alpha: true }}
                    >
                      <ambientLight intensity={1.6} />
                      <pointLight position={[5, 5, 5]} intensity={1.8} color="#ffffff" />
                      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#e0f2fe" />
                      <SmallCardGlobe activeActivity={activeActivity} />
                    </Canvas>
                  </div>

                  {/* Top content elements (relative z-10 over the small globe) */}
                  <div className="relative z-10">
                    {/* Brush label */}
                    <div className="activity-content-anim inline-flex min-w-[132px] items-center justify-center bg-[#0853a4] px-7 py-2.5 text-white [clip-path:polygon(8%_5%,92%_0,100%_22%,93%_82%,8%_100%,0_75%)] font-rubik shadow-sm">
                      <p className="text-[14px] font-medium italic">
                        {selectedActivity.badge}
                      </p>
                    </div>

                    <h3 className="activity-content-anim mt-5 max-w-[620px] font-rubik text-[28px] font-semibold leading-[1.35] text-[#100c08] sm:text-[32px]">
                      {selectedActivity.title}
                    </h3>

                    <p className="activity-content-anim mt-6 max-w-[650px] text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                      {selectedActivity.description}
                    </p>

                    {/* Features */}
                    <div className="activity-content-anim mt-7 flex flex-wrap gap-x-7 gap-y-4">
                      {selectedActivity.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5">
                          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#0853a4]" />

                          <span className="text-[13px] font-semibold text-[#100c08] sm:text-[14px]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions (relative z-10 at bottom of middle card) */}
                  <div className="activity-content-anim relative z-10 mt-9 flex flex-col gap-6 sm:flex-row sm:items-center pt-2">
                    <Link
                      to="/contact"
                      className="btn-primary min-h-[52px] w-fit rounded-[5px] px-8 text-[14px] font-bold shadow-md shadow-[#0853a4]/20"
                    >
                      Check Availability
                    </Link>

                    <button
                      type="button"
                      onClick={() => setVideoModalOpen(true)}
                      className="group inline-flex w-fit items-center gap-3 text-[14px] font-semibold text-[#100c08] font-rubik"
                      aria-label={`Watch ${selectedActivity.name} adventure`}
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#100c08] transition group-hover:border-[#0853a4] group-hover:bg-[#0853a4] group-hover:text-white bg-white/80 backdrop-blur-sm">
                        <svg
                          viewBox="0 0 24 24"
                          className="ml-0.5 h-5 w-5"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="m8 5 11 7-11 7V5Z" />
                        </svg>
                      </span>

                      <span className="transition group-hover:text-[#0853a4]">
                        Watch Adventure
                      </span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </ScrollReveal>

            {/* Activity images (Right Column) */}
            <ScrollReveal
              variant="fade-in-right"
              delay={450}
              duration={1300}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedActivity.name}-images`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
                >
                  {selectedActivity.images.map((image, index) => (
                    <div
                      key={image}
                      className="group relative overflow-hidden rounded-[8px] shadow-sm"
                    >
                      <img
                        src={image}
                        alt={`${selectedActivity.name} adventure ${index + 1}`}
                        loading="lazy"
                        className="h-[190px] w-full object-cover transition duration-700 group-hover:scale-110 lg:h-[205px]"
                      />

                      <div className="absolute inset-0 bg-[#100c08]/5 transition group-hover:bg-transparent" />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </div>

        {/* YOUTUBE LIGHTBOX MODAL (Rendered via Portal to escape overflow clipping) */}
        {videoModalOpen && createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md transition-all duration-300 animate-fadeIn">
            {/* Click backdrop to close */}
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={() => setVideoModalOpen(false)}
            />

            <div className="relative z-10 w-full max-w-[920px] overflow-hidden rounded-[16px] bg-black border border-white/10 shadow-2xl">
              {/* Top Bar with Title, Direct YouTube Link, and Close Button */}
              <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 via-black/50 to-transparent absolute top-0 left-0 right-0 z-20 pointer-events-none">
                <div className="flex items-center gap-4 pointer-events-auto">
                  <span className="text-white font-rubik text-[16px] sm:text-[18px] font-semibold tracking-wide drop-shadow-md">
                    {selectedActivity.name} YouTube Adventure
                  </span>

                  <a
                    href={`https://www.youtube.com/watch?v=${
                      activeActivity === 'Zip lining'
                        ? 'L_LUpnjgPso'
                        : activeActivity === 'Paragliding'
                        ? '3P1CnWI62Ik'
                        : activeActivity === 'Bungee Jumping'
                        ? '668nUCeBHyY'
                        : activeActivity === 'Ski touring'
                        ? 'linlz7-Pnvw'
                        : activeActivity === 'Rafting'
                        ? 'ScMzIvxBSi4'
                        : '7m16dFI1AF8'
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#ff0000]/90 hover:bg-[#ff0000] px-3.5 py-1 text-[12px] font-semibold text-white shadow-sm transition"
                  >
                    <span>Watch on YouTube</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-[#0853a4] hover:text-white"
                  aria-label="Close video player"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Responsive YouTube Video Container using nocookie embed to prevent browser privacy blocks */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full border-none"
                  src={`https://www.youtube-nocookie.com/embed/${
                    activeActivity === 'Zip lining'
                      ? 'L_LUpnjgPso'
                      : activeActivity === 'Paragliding'
                      ? '3P1CnWI62Ik'
                      : activeActivity === 'Bungee Jumping'
                      ? '668nUCeBHyY'
                      : activeActivity === 'Ski touring'
                      ? 'linlz7-Pnvw'
                      : activeActivity === 'Rafting'
                      ? 'ScMzIvxBSi4'
                      : '7m16dFI1AF8'
                  }?autoplay=1&rel=0&modestbranding=1`}
                  title="Travel Adventure YouTube Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>,
          document.body
        )}
      </section>
      {/* ================= EXPLORE ACTIVITIES END ================= */}
    </>
  );
}
