import { useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ──────────────────────────────────────────────
   Three.js — Floating particles background
   ────────────────────────────────────────────── */
function FloatingParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 120;

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArr[i3 + 1] += Math.sin(time * 0.3 + i * 0.5) * 0.002;
      posArr[i3] += Math.cos(time * 0.2 + i * 0.3) * 0.001;
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true;
    meshRef.current.rotation.y = time * 0.02;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        color="#0b84d8"
        size={0.04}
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

/* Framer Motion variants removed — using inline props for v12 compatibility */

/* ──────────────────────────────────────────────
   Blog Card component with GSAP hover tilt
   ────────────────────────────────────────────── */
function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.4,
        ease: 'power2.out',
        transformPerspective: 800,
      });

      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: x - 100,
          y: y - 100,
          opacity: 0.15,
          duration: 0.3,
        });
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1.05,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
      });

      if (glowRef.current) {
        gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        });
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        ref={cardRef}
        className="group relative flex h-full flex-col overflow-hidden rounded-[14px] bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_8px_32px_rgba(7,31,67,0.08)] will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Mouse-follow glow */}
        <div
          ref={glowRef}
          className="pointer-events-none absolute h-[200px] w-[200px] rounded-full bg-[#0b84d8] opacity-0 blur-[60px]"
          style={{ zIndex: 0 }}
        />

        {/* Image */}
        <div className="relative h-[230px] overflow-hidden">
          <div ref={imageRef} className="h-full w-full will-change-transform">
            <img
              src={post.imageUrl}
              alt={post.title}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Category badge with spring pop */}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.2, type: 'spring', stiffness: 300, damping: 15 }}
            viewport={{ once: true }}
            className="absolute left-4 top-4 rounded-full bg-[#0b84d8] px-3.5 py-1 font-rubik text-[11px] font-bold tracking-wide text-white uppercase shadow-[0_4px_14px_rgba(11,132,216,0.4)]"
          >
            {post.category}
          </motion.span>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-1 flex-col p-6">
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-[12.5px] text-slate-400 font-jost">
            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {post.date}
            </span>

            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="8" r="4" />
                <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
              </svg>
              {post.author}
            </span>

            <span className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-4 font-rubik text-[19px] font-bold leading-[1.35] text-[#100c08] transition-colors duration-300 group-hover:text-[#0b84d8] sm:text-[20px]">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="mt-3 flex-1 font-jost text-[14.5px] leading-[1.85] text-slate-500">
            {post.excerpt}
          </p>

          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.5 + index * 0.15, duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#0b84d8]/30 to-transparent origin-left"
          />

          {/* Read More link */}
          <Link
            to="/blogs"
            className="mt-4 inline-flex items-center gap-2 font-rubik text-[13.5px] font-semibold text-[#0b84d8]"
          >
            Read More
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────
   Main Blogs Section
   ────────────────────────────────────────────── */
export function Blogs() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  // GSAP scroll-triggered heading parallax + accent line animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the heading area
      gsap.to('.blogs-heading-area', {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      // Animate the accent lines from center
      gsap.fromTo(
        '.blogs-accent-line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ================= BLOGS SECTION START ================= */}
      <section
        ref={sectionRef}
        id="blogs"
        className="relative overflow-hidden bg-[#f8fbff] px-5 py-10 sm:px-8"
      >
        {/* Three.js particles background */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 50 }}
            dpr={[1, 1.5]}
            style={{ background: 'transparent' }}
            gl={{ alpha: true }}
          >
            <FloatingParticles />
          </Canvas>
        </div>

        {/* Decorative gradient blurs */}
        <div className="pointer-events-none absolute -right-28 top-20 h-80 w-80 rounded-full bg-[#0b84d8]/[0.06] blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-16 h-72 w-72 rounded-full bg-[#fbb03b]/[0.06] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1320px]">
          {/* Section heading with Framer Motion */}
          <div className="blogs-heading-area text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex items-center justify-center gap-3"
            >
              <span className="blogs-accent-line h-px w-8 bg-[#0b84d8] origin-right" />

              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Travel Stories
              </p>

              <span className="blogs-accent-line h-px w-8 bg-[#0b84d8] origin-left" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 font-rubik text-[36px] font-bold leading-tight text-[#100c08] sm:text-[44px] lg:text-[52px]"
            >
              Latest Blogs & Travel Tips
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mx-auto mt-4 max-w-[620px] font-jost text-[15px] leading-7 text-slate-500"
            >
              Stay inspired with our travel stories, expert tips and destination
              guides to plan your next unforgettable adventure.
            </motion.p>
          </div>

          {/* Blog cards grid — 3 cards with Framer Motion + GSAP tilt */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Bottom CTA with spring animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
            className="mt-12 text-center"
          >
            <Link
              to="/blogs"
              className="btn-primary inline-flex rounded-full min-h-[52px] items-center justify-center px-9 text-[14px] font-bold shadow-[0_12px_30px_rgba(11,132,216,0.22)]"
            >
              View All Blog Posts
              <svg
                viewBox="0 0 24 24"
                className="ml-3 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
      {/* ================= BLOGS SECTION END ================= */}
    </>
  );
}
