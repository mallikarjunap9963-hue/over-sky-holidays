import { useState, useEffect } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { contentApi } from '../../api/contentApi';
import { formatImageUrl } from '../../api/imageHelper';
import { AboutStorySkeleton } from '../ui/Skeletons';
import aboutUsImg from '../../assets/about us img.png';
import aboutUs2ndImg from '../../assets/about us 2nd img.png';
import aboutUs3rdImg from '../../assets/about us 3 rd img.png';

export function AboutStory() {
  const [storyData, setStoryData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    async function loadStory() {
      setLoading(true);
      try {
        const res = await contentApi.getOurStories();
        if (isMounted && res.isLive && res.story) {
          setStoryData(res.story);
          return;
        }

        // Fallback to active about section
        const aboutRes = await contentApi.getAboutSectionActive();
        if (isMounted && aboutRes.isLive && aboutRes.about) {
          setStoryData(aboutRes.about);
        }
      } catch (err) {
        console.error("Failed to load story API:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }
    loadStory();
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading && !storyData) {
    return <AboutStorySkeleton />;
  }

  const heading = storyData.heading || storyData.title || "";
  const description = storyData.description || "";

  const img1 = formatImageUrl(storyData.images?.[0]?.url || storyData.images?.[0]?.path || storyData.images?.[0] || storyData.image_one_url, aboutUsImg);
  const img2 = formatImageUrl(storyData.images?.[1]?.url || storyData.images?.[1]?.path || storyData.images?.[1] || storyData.image_two_url, aboutUs2ndImg);
  const img3 = formatImageUrl(storyData.images?.[2]?.url || storyData.images?.[2]?.path || storyData.images?.[2] || storyData.image_three_url, aboutUs3rdImg);

  const features = Array.isArray(storyData.features) ? storyData.features : [];

  return (
    <section
      id="our-story"
      className="relative overflow-hidden bg-white px-5 py-10 sm:px-8"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-50/40 blur-3xl" />
        <div className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-amber-50/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Story Images collage (Left) */}
          <ScrollReveal variant="fade-in-left" delay={50} duration={1200} className="relative">
            <div className="grid grid-cols-2 gap-4 h-[420px] sm:h-[465px]">
              {/* Tall 1st image */}
              <div className="overflow-hidden rounded-2xl shadow-lg border border-slate-100 h-full w-full bg-slate-100">
                <img
                  src={img1}
                  alt="Open Sky Holidays Team"
                  onError={(e) => {
                    if (e.currentTarget.src !== aboutUsImg) {
                      e.currentTarget.src = aboutUsImg;
                    }
                  }}
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>
              {/* Stacked 2nd & 3rd images */}
              <div className="flex flex-col gap-4 h-full">
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 flex-1 min-h-0 bg-slate-100">
                  <img
                    src={img2}
                    alt="Open Sky Holidays Travel Consultation"
                    onError={(e) => {
                      if (e.currentTarget.src !== aboutUs2ndImg) {
                        e.currentTarget.src = aboutUs2ndImg;
                      }
                    }}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-100 flex-1 min-h-0 bg-slate-100">
                  <img
                    src={img3}
                    alt="Open Sky Holidays Travel Essentials"
                    onError={(e) => {
                      if (e.currentTarget.src !== aboutUs3rdImg) {
                        e.currentTarget.src = aboutUs3rdImg;
                      }
                    }}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-24 w-24 rounded-2xl bg-gradient-to-br from-[#0853a4]/10 to-amber-500/10 blur-sm" />
          </ScrollReveal>

          {/* Story Text content (Right) */}
          <div className="flex flex-col gap-5">
            <ScrollReveal variant="fade-in-right" delay={50} duration={1200}>
              <div className="flex items-center gap-2">
                <span className="h-[1.5px] w-6 bg-[#0853a4]" />
                <p className="font-satisfy text-[24px] font-normal capitalize text-[#0853a4]">
                  Our Story
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-right" delay={200} duration={1300}>
              <h2 className="font-rubik text-[30px] font-extrabold leading-[1.2] tracking-tight text-[#100c08] sm:text-[38px] lg:text-[44px]">
                {heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal variant="fade-in-right" delay={350} duration={1300}>
              <div
                className="flex flex-col gap-4 font-jost text-[15.5px] leading-relaxed text-slate-600"
                dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>') }}
              />
            </ScrollReveal>

            <ScrollReveal variant="fade-in-right" delay={500} duration={1300}>
              <div className="mt-2 grid grid-cols-2 gap-4 font-rubik">
                {features.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0853a4] mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-[14px] font-bold text-slate-800">{item.heading || item.title}</h4>
                      <p className="text-[12px] text-slate-500">{item.sub_heading || item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
