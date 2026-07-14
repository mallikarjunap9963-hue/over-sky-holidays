import { AboutHero } from '../about/AboutHero';
import { AboutStory } from '../about/AboutStory';
import { AboutMissionVision } from '../about/AboutMissionVision';
import { AboutStats } from '../about/AboutStats';
import { AboutServices } from '../about/AboutServices';
import { AboutWhyUs } from '../about/AboutWhyUs';
import { AboutValues } from '../about/AboutValues';
import { AboutTeam } from '../about/AboutTeam';

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

      {/* 7. Core Values */}
      <AboutValues />

      {/* 8. Our Team */}
      <AboutTeam />
    </>
  );
}
