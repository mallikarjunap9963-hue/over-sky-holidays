export default function SectionHeading({
  title,
}: {
  title: string
}) {
  return (
    <div className="mb-6 font-rubik">
      <h2 className="text-2xl font-black text-[#09255b] md:text-3xl">
        {title}
      </h2>

      <div className="mt-3 h-1 w-11 rounded-full bg-[#ffb400]" />
    </div>
  )
}
