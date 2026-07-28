export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-6 font-jost">
      {subtitle && (
        <div className="flex items-center gap-2.5 mb-1.5">
          <span className="h-px w-6 bg-[#0853a4]" />
          <p className="font-satisfy text-[20px] font-normal text-[#0853a4] capitalize">
            {subtitle}
          </p>
        </div>
      )}

      <h2 className="font-rubik text-[26px] sm:text-[32px] font-bold text-[#100c08] leading-tight">
        {title}
      </h2>
    </div>
  )
}
