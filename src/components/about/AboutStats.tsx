import { useEffect, useRef, useState } from "react"
import {
  BusFront,
  Globe2,
  Palmtree,
  Plane,
  type LucideIcon,
} from "lucide-react"

import { ScrollReveal } from "../ui/ScrollReveal"

interface StatItem {
  value: number
  label: string
  suffix?: string
  icon: LucideIcon
}

const stats: StatItem[] = [
  {
    value: 10532,
    suffix: "+",
    label: "Customers",
    icon: Plane,
  },
  {
    value: 25,
    suffix: "+",
    label: "Destinations",
    icon: Palmtree,
  },
  {
    value: 500,
    label: "Tours",
    icon: Globe2,
  },
  {
    value: 2,
    label: "Tour Types",
    icon: BusFront,
  },
]

function useCountUp(
  target: number,
  started: boolean,
  duration: number = 1800
) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return

    let animationFrame: number
    let startTime: number | null = null

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const elapsedTime = timestamp - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      // Smooth count-up animation
      const easedProgress = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(easedProgress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(target)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [target, started, duration])

  return count
}

function StatCard({
  stat,
  started,
  index,
}: {
  stat: StatItem
  started: boolean
  index: number
}) {
  const count = useCountUp(stat.value, started, 1700 + index * 150)
  const Icon = stat.icon

  return (
    <div className="group relative flex min-h-[150px] flex-col items-center justify-center px-4 py-6 text-center sm:min-h-[170px] lg:min-h-[190px] lg:px-7">
      {/* Icon */}
      <div className="relative mb-2 flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

        <Icon
          strokeWidth={2.4}
          className="relative h-10 w-10 text-white drop-shadow-[0_3px_5px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-1 sm:h-12 sm:w-12"
        />
      </div>

      {/* Count */}
      <p className="font-rubik text-[32px] font-black leading-none tracking-[-0.04em] text-[#fbb03b] drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] sm:text-[40px] lg:text-[48px]">
        {count.toLocaleString("en-IN")}
        {stat.suffix}
      </p>

      {/* Label */}
      <p className="mt-2 font-rubik text-[10px] font-bold uppercase tracking-[0.08em] text-white sm:text-[11px] lg:text-[12px]">
        {stat.label}
        {stat.suffix && (
          <span className="ml-0.5 text-[#fbb03b]">{stat.suffix}</span>
        )}
      </p>

      {/* Desktop divider */}
      {index !== stats.length - 1 && (
        <span className="absolute right-0 top-1/2 hidden h-[80px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent lg:block" />
      )}
    </div>
  )
}

export function AboutStats() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const currentSection = sectionRef.current

    if (!currentSection) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(currentSection)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative isolate w-full overflow-hidden bg-[#123f72]"
    >
      {/* Travel destination background image */}
      <div
        className="absolute inset-0 -z-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Main dark blue overlay */}
      <div className="absolute inset-0 -z-20 bg-[#063b73]/75" />

      {/* Dark left overlay */}
      <div
        className="absolute inset-y-0 left-0 -z-10 w-[42%] bg-[#07366e]/70"
        style={{
          clipPath: "polygon(0 0, 82% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Middle transparent angled section */}
      <div
        className="absolute inset-y-0 left-[16%] -z-10 hidden w-[42%] bg-[#061f49]/25 md:block"
        style={{
          clipPath: "polygon(0 0, 75% 0, 100% 100%, 25% 100%)",
        }}
      />

      {/* Right solid blue block */}
      <div
        className="absolute inset-y-0 right-0 -z-10 w-[37%] bg-[#174f89]/95"
        style={{
          clipPath: "polygon(27% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      {/* Subtle top and bottom shading */}
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#041e45]/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#041e45]/35 to-transparent" />

      {/* Decorative tropical leaf */}
      <div className="pointer-events-none absolute -right-10 -top-32 hidden h-[430px] w-[520px] rotate-[-7deg] opacity-25 lg:block">
        <svg
          viewBox="0 0 500 420"
          fill="none"
          className="h-full w-full"
          aria-hidden="true"
        >
          <path
            d="M460 5C373 85 297 181 239 405"
            stroke="#071b51"
            strokeWidth="18"
            strokeLinecap="round"
          />

          <path
            d="M438 39C372 31 318 10 276 -22C302 54 339 91 399 99"
            fill="#071b51"
          />

          <path
            d="M405 78C328 91 268 79 212 48C252 117 305 144 372 134"
            fill="#071b51"
          />

          <path
            d="M366 124C286 154 218 151 150 126C203 190 267 207 333 181"
            fill="#071b51"
          />

          <path
            d="M326 180C246 226 174 234 95 221C159 277 227 280 294 239"
            fill="#071b51"
          />

          <path
            d="M289 238C218 300 147 324 62 327C139 367 208 352 264 296"
            fill="#071b51"
          />

          <path
            d="M458 18C469 79 462 129 433 177C416 111 423 64 458 18Z"
            fill="#071b51"
          />

          <path
            d="M424 71C442 141 435 198 402 253C379 183 386 125 424 71Z"
            fill="#071b51"
          />

          <path
            d="M386 129C405 202 393 264 354 322C337 242 348 183 386 129Z"
            fill="#071b51"
          />

          <path
            d="M343 194C356 271 335 334 287 391C282 310 300 245 343 194Z"
            fill="#071b51"
          />
        </svg>
      </div>

      <ScrollReveal variant="fade-in" delay={100} duration={1300}>
        <div className="relative mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                stat={stat}
                started={started}
                index={index}
              />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}