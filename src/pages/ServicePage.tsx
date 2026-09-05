import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesApi } from '../api/servicesApi';
import { contentApi } from '../api/contentApi';
import type { ApiPageBanner } from '../api/types';
import { formatImageUrl } from '../api/imageHelper';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceHighlights } from '../components/services/ServiceHighlights';
import { ServiceContent } from '../components/services/ServiceContent';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { ServiceInfoCards } from '../components/services/ServiceInfoCards';
import { ServiceCTA } from '../components/services/ServiceCTA';
import { Loader2, AlertCircle } from 'lucide-react';

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const activeId = id || 'passport-services';

  const [service, setService] = useState<any>(null);
  const [banner, setBanner] = useState<ApiPageBanner | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeId]);

  useEffect(() => {
    let isMounted = true;
    async function loadService() {
      setLoading(true);
      setError(null);
      try {
        const candidateSlug = activeId.startsWith('services-')
          ? activeId
          : `services-${activeId.replace('-services', '')}`;

        const [res, bannerRes] = await Promise.all([
          servicesApi.getServiceById(activeId),
          contentApi.getPageBanner(candidateSlug).catch(() => null),
        ]);

        if (!isMounted) return;

        if (bannerRes && bannerRes.banner) {
          setBanner(bannerRes.banner);
        } else {
          // Try fetching without prefix
          const altBanner = await contentApi.getPageBanner(activeId).catch(() => null);
          if (isMounted && altBanner && altBanner.banner) setBanner(altBanner.banner);
        }

        if (res.service) {
          setService(res.service);
        } else {
          setService(null);
        }
      } catch (err: any) {
        if (!isMounted) return;
        console.error("Failed to load service from API:", err);
        setError("Unable to load service details.");
        setService(null);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadService();
    return () => {
      isMounted = false;
    };
  }, [activeId]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4 font-jost">
        <Loader2 size={40} className="animate-spin text-[#0853a4]" />
        <p className="mt-4 font-rubik text-base font-semibold text-slate-700">Loading Service Details...</p>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4 font-jost">
        <AlertCircle size={44} className="text-slate-400" />
        <h2 className="mt-4 font-rubik text-2xl font-bold text-slate-800">Service Not Available</h2>
        <p className="mt-2 text-sm text-slate-500 max-w-md">
          {error || "The requested service could not be found or is currently inactive."}
        </p>
        <Link
          to="/"
          className="mt-6 rounded-full bg-[#0853a4] px-6 py-2.5 font-rubik text-xs font-bold text-white transition hover:bg-[#064a8f]"
        >
          Go Back Home
        </Link>
      </div>
    );
  }

  const dynamicHeroImg = banner?.image_url || (banner?.image ? formatImageUrl(banner.image) : service.heroImage);

  return (
    <div className="bg-white min-h-screen">
      <ServiceHero 
        title={banner?.title || service.title} 
        subtitle={banner?.description || service.subtitle} 
        heroImage={dynamicHeroImg} 
      />

      {/* Service Switcher Navigation Tabs */}
      <div className="border-b border-slate-100 bg-slate-50/80 py-3.5 backdrop-blur-sm sticky top-[72px] z-30 shadow-xs">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {[
            { id: 'visa', slug: 'visa', label: 'Visa Assistance' },
            { id: 'flight', slug: 'flight-tickets', label: 'Flight Tickets' },
            { id: 'passport', slug: 'passport-services', label: 'Passport Services' },
          ].map((tab) => {
            const isCurrent = activeId.toLowerCase().includes(tab.id);
            return (
              <Link
                key={tab.id}
                to={`/services/${tab.slug}`}
                className={`rounded-full px-4 sm:px-5 py-2 text-xs sm:text-[13px] font-bold tracking-wider uppercase font-rubik transition-all duration-300 ${
                  isCurrent
                    ? 'bg-[#0853a4] text-white shadow-md shadow-[#0853a4]/25 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200/80'
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
      
      <ServiceHighlights highlights={service.highlights} />
      
      <ServiceContent data={service.content} subtitle={service.title} />
      
      <ServiceProcess steps={service.processSteps} title={service.title} />
      
      <ServiceInfoCards 
        documents={service.documents} 
        whyChooseUs={service.whyChooseUs} 
      />
      
      <ServiceCTA cta={service.cta} />
    </div>
  );
}

