import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ServiceHero } from '../components/services/ServiceHero';
import { ServiceHighlights } from '../components/services/ServiceHighlights';
import { ServiceContent } from '../components/services/ServiceContent';
import { ServiceProcess } from '../components/services/ServiceProcess';
import { ServiceInfoCards } from '../components/services/ServiceInfoCards';
import { ServiceCTA } from '../components/services/ServiceCTA';

export function ServicePage() {
  const { id } = useParams<{ id: string }>();
  
  // If no ID or invalid ID, redirect to home
  if (!id || !servicesData[id]) {
    return <Navigate to="/" replace />;
  }

  const data = servicesData[id];

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  return (
    <div className="bg-white min-h-screen">
      <ServiceHero 
        title={data.title} 
        subtitle={data.subtitle} 
        heroImage={data.heroImage} 
      />
      
      <ServiceHighlights highlights={data.highlights} />
      
      <ServiceContent data={data.content} subtitle={data.title} />
      
      <ServiceProcess steps={data.processSteps} title={data.title} />
      
      <ServiceInfoCards 
        documents={data.documents} 
        whyChooseUs={data.whyChooseUs} 
      />
      
      <ServiceCTA />
    </div>
  );
}
