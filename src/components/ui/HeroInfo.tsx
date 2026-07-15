import type { HeroInfoProps } from "../../types/tours"

export default function HeroInfo({
  icon,
  value,
  label,
}: HeroInfoProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-white">
        {icon}
      </span>

      <div>
        <p className="text-base font-bold sm:text-lg">
          {value}
        </p>

        <p className="mt-1 text-sm text-white/70">
          {label}
        </p>
      </div>
    </div>
  )
}
