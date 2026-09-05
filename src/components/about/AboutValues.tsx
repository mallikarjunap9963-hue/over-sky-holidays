import { useState, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { contentApi } from '../../api/contentApi';

const defaultValues = [
  {
    title: 'Integrity',
    desc: 'We operate with complete honesty — no hidden fees, no misleading itineraries, just clear and ethical service.',
    emoji: '🤝',
    color: 'from-blue-50 to-blue-100/50 border-blue-100',
  },
  {
    title: 'Excellence',
    desc: 'From the first query to post-trip support, we hold ourselves to the highest standards in everything we do.',
    emoji: '⭐',
    color: 'from-amber-50 to-amber-100/50 border-amber-100',
  },
  {
    title: 'Innovation',
    desc: 'We continuously update our offerings with modern booking systems, real-time support, and digital-first experiences.',
    emoji: '💡',
    color: 'from-purple-50 to-purple-100/50 border-purple-100',
  },
  {
    title: 'Care',
    desc: 'Every traveler is unique. We invest time to understand your needs and craft experiences that feel truly personal.',
    emoji: '❤️',
    color: 'from-rose-50 to-rose-100/50 border-rose-100',
  },
];

export function AboutValues() {
  const [valuesList, setValuesList] = useState(defaultValues);

  useEffect(() => {
    let isMounted = true;
    async function loadValues() {
      try {
        const res = await contentApi.getAboutOurCoreValues();
        if (isMounted && res.isLive && res.values.length > 0) {
          const emojis = ['🤝', '⭐', '💡', '❤️'];
          const colors = [
            'from-blue-50 to-blue-100/50 border-blue-100',
            'from-amber-50 to-amber-100/50 border-amber-100',
            'from-purple-50 to-purple-100/50 border-purple-100',
            'from-rose-50 to-rose-100/50 border-rose-100',
          ];

          const mapped = res.values.map((v, i) => ({
            title: v.title,
            desc: v.description,
            emoji: emojis[i % emojis.length],
            color: colors[i % colors.length],
          }));
          setValuesList(mapped);
        }
      } catch (err) {
        console.error("Failed to load core values:", err);
      }
    }
    loadValues();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section
      id="our-values"
      className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 bottom-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1320px] flex flex-col gap-12">
        {/* Heading */}
        <div className="flex flex-col items-center text-center gap-3">
          <ScrollReveal variant="fade-in-up" delay={50} duration={1200}>
            <div className="flex items-center justify-center gap-2">
              <span className="h-[1.5px] w-6 bg-[#0853a4]" />
              <p className="font-satisfy text-[24px] font-normal capitalize text-[#0853a4]">
                Our Core Values
              </p>
              <span className="h-[1.5px] w-6 bg-[#0853a4]" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-in-up" delay={150} duration={1200}>
            <h2 className="font-rubik text-[28px] font-extrabold leading-tight text-[#100c08] sm:text-[34px] lg:text-[40px]">
              The Principles We Live By
            </h2>
          </ScrollReveal>
          <ScrollReveal variant="fade-in-up" delay={250} duration={1200}>
            <p className="max-w-[520px] font-jost text-[15px] leading-relaxed text-slate-500">
              Our values are not just words on a wall — they guide every decision we make and every journey we craft.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Values grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valuesList.map((val, index) => (
            <ScrollReveal
              key={val.title}
              variant="fade-in-up"
              delay={350 + 100 * index}
              duration={1200}
            >
              <div
                className={`group relative flex flex-col gap-4 rounded-3xl border bg-gradient-to-br p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${val.color}`}
              >
                {/* Emoji Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-md transition-transform duration-300 group-hover:scale-110">
                  {val.emoji}
                </div>

                <div>
                  <h3 className="font-rubik text-[20px] font-bold text-[#100c08]">
                    {val.title}
                  </h3>
                  <p className="mt-2 font-jost text-[14px] leading-relaxed text-slate-600">
                    {val.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
