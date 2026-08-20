import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesApi } from '../api/servicesApi';
import { servicesData } from '../data/servicesData';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceHighlights } from '../components/services/ServiceHighlights';
import { ServiceContent } from '../components/services/ServiceContent';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { ServiceInfoCards } from '../components/services/ServiceInfoCards';
import { ServiceCTA } from '../components/services/ServiceCTA';
import { Loader2 } from 'lucide-react';

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  const activeId = id || 'passport-services';

  const [service, setService] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeId]);

  useEffect(() => {
    let isMounted = true;
    async function loadService() {
      setLoading(true);
      try {
        const res = await servicesApi.getServiceById(activeId);
        if (!isMounted) return;

        if (res.isLive && res.service) {
          const apiSvc: any = res.service;
          const fallbackData: any = servicesData[activeId] || servicesData['passport-services'];

          setService({
            title: apiSvc.title || fallbackData?.title || 'Travel Services',
            subtitle: apiSvc.subtitle || fallbackData?.subtitle || 'Complete Travel Support',
            heroImage: apiSvc.heroImage || fallbackData?.heroImage || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
            highlights: Array.isArray(apiSvc.highlights) && apiSvc.highlights.length > 0
              ? apiSvc.highlights
              : fallbackData?.highlights || [],
            content: {
              mainParagraph1: apiSvc.description || fallbackData?.content?.mainParagraph1 || '',
              mainParagraph2: fallbackData?.content?.mainParagraph2 || '',
              offerTitle: fallbackData?.content?.offerTitle || 'What We Offer',
              offerItems: Array.isArray(apiSvc.features) && apiSvc.features.length > 0
                ? apiSvc.features.map((f: any) => ({
                    title: f.title || f.name,
                    desc: f.description || f.detail || f.title,
                  }))
                : fallbackData?.content?.offerItems || [],
            },
            processSteps: Array.isArray(apiSvc.processSteps) && apiSvc.processSteps.length > 0
              ? apiSvc.processSteps
              : fallbackData?.processSteps || [],
            documents: Array.isArray(apiSvc.documents) && apiSvc.documents.length > 0
              ? apiSvc.documents
              : fallbackData?.documents || [],
            whyChooseUs: Array.isArray(apiSvc.whyChooseUs) && apiSvc.whyChooseUs.length > 0
              ? apiSvc.whyChooseUs
              : fallbackData?.whyChooseUs || [],
          });
        } else {
          // Find matching key in servicesData
          const norm = activeId.toLowerCase();
          const matchedKey = Object.keys(servicesData).find(
            (key) => key.toLowerCase() === norm || key.toLowerCase().includes(norm) || norm.includes(key.toLowerCase().split('-')[0])
          ) || 'passport-services';

          setService(servicesData[matchedKey] || servicesData['passport-services']);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error("Failed to load service from API:", err);
        const norm = activeId.toLowerCase();
        const matchedKey = Object.keys(servicesData).find(
          (key) => key.toLowerCase() === norm || key.toLowerCase().includes(norm) || norm.includes(key.toLowerCase().split('-')[0])
        ) || 'passport-services';
        setService(servicesData[matchedKey] || servicesData['passport-services']);
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

  // If service fails to load, redirect to home
  if (!service) {
    return <Navigate to="/" replace />;
  }


  return (
    <div className="bg-white min-h-screen">
      <ServiceHero 
        title={service.title} 
        subtitle={service.subtitle} 
        heroImage={service.heroImage} 
      />
      
      <ServiceHighlights highlights={service.highlights} />
      
      <ServiceContent data={service.content} subtitle={service.title} />
      
      <ServiceProcess steps={service.processSteps} title={service.title} />
      
      <ServiceInfoCards 
        documents={service.documents} 
        whyChooseUs={service.whyChooseUs} 
      />
      
      <ServiceCTA />
    </div>
  );
}

