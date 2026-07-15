import { AboutHero } from '../components/about/AboutHero';
import { AboutStory } from '../components/about/AboutStory';
import { AboutMissionVision } from '../components/about/AboutMissionVision';
import { AboutStats } from '../components/about/AboutStats';
import { AboutServices } from '../components/about/AboutServices';
import { AboutWhyUs } from '../components/about/AboutWhyUs';
import { AboutValues } from '../components/about/AboutValues';

/**
 * AboutPage — assembles all About Us section components in order.
 * Each section lives in its own file under src/components/about/.
 */
export function AboutPage() {
  return (
    <>
      {/* 1. Hero banner */}
      <AboutHero />

      {/* 2. Our Story */}
      <AboutStory />

      {/* 3. Mission & Vision */}
      <AboutMissionVision />

      {/* 4. Stats / Achievements */}
      <AboutStats />

      {/* 5. What We Offer */}
      <AboutServices />

      {/* 6. Why Choose Us */}
      <AboutWhyUs />

      {/* 7. Core Valuesr */}
      <AboutValues />
    </>
  )
}
