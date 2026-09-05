import type {
  ApiTour,
  ApiBlog,
  ApiService,
  ApiTestimonial,
  ApiHero,
} from './types';
import { formatImageUrl } from './imageHelper';
export { formatImageUrl };
import defaultBreadcrumb from '../assets/breadcrumb.png';

export function mapTourFromApi(tour: ApiTour) {
  const thumbnail = tour.thumbnail_url || tour.thumbnail || '';
  const formattedImage = formatImageUrl(thumbnail, defaultBreadcrumb);

  // 1. Extract raw places covered from backend shapes (tour.places_covered, tour.tour_features, or tour.features)
  const rawPlacesCovered: any[] = (Array.isArray(tour.places_covered) && tour.places_covered.length > 0)
    ? tour.places_covered
    : (Array.isArray(tour.tour_features) && tour.tour_features.length > 0)
      ? tour.tour_features.filter((f: any) => f?.type === 'place_covered')
      : (Array.isArray(tour.features) && tour.features.length > 0 && typeof tour.features[0] === 'object')
        ? (tour.features as any[]).filter((f: any) => f?.type === 'place_covered')
        : [];

  const placesCovered = rawPlacesCovered.map((place: any, index: number) => ({
    id: place.id ? String(place.id) : `${place.title || 'place'}-${index}`,
    name: place.title || place.name || '',
    title: place.title || place.name || '',
    image: formatImageUrl(place.image_url || place.image, formattedImage),
    description: place.description || `Explore ${place.title || place.name} during your ${tour.title} tour.`,
  }));

  // Extract raw string locations (from tour.features, tour.highlights, or mapped places)
  const stringFeatures: string[] = (Array.isArray(tour.features) && tour.features.length > 0 && typeof tour.features[0] === 'string')
    ? (tour.features as string[])
    : (Array.isArray(tour.highlights) && tour.highlights.length > 0 && typeof tour.highlights[0] === 'string')
      ? (tour.highlights as string[])
      : placesCovered.map((p) => p.name).filter(Boolean);

  const locations = stringFeatures.length > 0
    ? stringFeatures
    : (placesCovered.length > 0 ? placesCovered.map((p) => p.name) : [tour.country || tour.title]);

  // 2. Extract package inclusions from backend shapes (tour.package_inclusions, tour.tour_features, or tour.detail?.inclusions)
  const rawPackageInclusions: any[] = (Array.isArray(tour.package_inclusions) && tour.package_inclusions.length > 0)
    ? tour.package_inclusions
    : (Array.isArray(tour.tour_features) && tour.tour_features.length > 0)
      ? tour.tour_features.filter((f: any) => f?.type === 'package_inclusion')
      : (Array.isArray(tour.features) && tour.features.length > 0 && typeof tour.features[0] === 'object')
        ? (tour.features as any[]).filter((f: any) => f?.type === 'package_inclusion')
        : (Array.isArray(tour.detail?.inclusions) && tour.detail!.inclusions!.length > 0)
          ? tour.detail!.inclusions!
          : [];

  const packageInclusions = rawPackageInclusions.map((item: any, index: number) => {
    if (typeof item === 'string') {
      return {
        id: `${item}-${index}`,
        title: item,
        description: item,
      };
    }
    return {
      id: item.id ? String(item.id) : `${item.title || 'inc'}-${index}`,
      title: item.title || item.name || '',
      description: item.description || item.title || '',
      icon: item.icon || null,
    };
  });

  const inclusionsStrings = rawPackageInclusions.map((item: any) => {
    if (typeof item === 'string') return item;
    return item.title && item.description && item.title !== item.description
      ? `${item.title}: ${item.description}`
      : (item.title || item.description || '');
  }).filter(Boolean);

  // Extract highlights
  const rawHighlights = (Array.isArray(tour.tour_features) && tour.tour_features.length > 0)
    ? tour.tour_features.filter((f: any) => f?.type === 'tour_highlight' || f?.type === 'place_covered')
    : (Array.isArray(tour.features) && tour.features.length > 0 && typeof tour.features[0] === 'object')
      ? (tour.features as any[]).filter((f: any) => f?.type === 'tour_highlight' || f?.type === 'place_covered')
      : [];

  const highlights = placesCovered.length > 0
    ? placesCovered
    : rawHighlights.map((f: any) => ({
        id: f.id ? String(f.id) : f.title,
        title: f.title,
        name: f.title,
        description: f.description || `Explore ${f.title} during your ${tour.title} tour.`,
        image: formatImageUrl(f.image_url || f.image, formattedImage),
      }));

  // Map gallery images
  const galleryImages = (tour.gallery || []).map((img) => {
    if (typeof img === 'string') return formatImageUrl(img, formattedImage);
    return formatImageUrl(img.url || img.image, formattedImage);
  });

  const tourTypeSlug = tour.tour_type?.slug?.toLowerCase() || '';
  const tourTypeName = tour.tour_type?.name?.toLowerCase() || '';
  const isDomestic = tour.tour_type_id === 5 || tour.tour_type_id === 2 || tourTypeSlug.includes('domestic') || tourTypeName.includes('domestic');

  return {
    id: tour.id,
    tourId: tour.id,
    title: tour.title,
    slug: tour.slug || String(tour.id),
    country: tour.country || (isDomestic ? 'India' : 'International'),
    duration: tour.duration || 'Flexible Days',
    price: 'Best Price Guarantee',
    image: formattedImage,
    locations,
    category: isDomestic ? 'Domestic' : 'International',
    tourType: tour.tour_type?.name || (isDomestic ? 'Domestic Tours' : 'International Tours'),
    detail: {
      heading: tour.detail?.heading || 'About This Tour',
      about: tour.detail?.description || tour.detail?.about || `Discover the wonder of ${tour.title}. Experience unforgettable sightseeing, curated comfort, and personalized travel hospitality with Open Sky Holidays.`,
      inclusions: (tour.detail?.inclusions && tour.detail.inclusions.length > 0)
        ? tour.detail.inclusions
        : (inclusionsStrings.length > 0 ? inclusionsStrings : [
            'Accommodation on Twin Sharing Basis',
            'Daily Breakfast and Selected Dinners',
            'All Transfers and Sightseeing by AC Vehicle',
            'Pickup and Drop Services',
            '24/7 Travel Assistance Support',
          ]),
      packageInclusions,
      exclusions: tour.detail?.exclusions || [
        'Personal Expenses',
        'Airfare / Train Tickets unless specified',
        'Optional Activity Charges',
      ],
      highlights,
      gallery: galleryImages.length > 0 ? galleryImages : [formattedImage],
    },
    placesCovered,
    places_covered: rawPlacesCovered,
    packageInclusions,
    package_inclusions: rawPackageInclusions,
    features: tour.features || [],
  };
}

export function mapBlogFromApi(blog: ApiBlog) {
  const imgUrl = formatImageUrl(blog.featured_image || blog.image_url || blog.image);

  let authorName = 'Open Sky Team';
  let authorImg = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80';
  let authorDesc = 'Travel enthusiasts sharing honest guides, travel tips, and destination stories to inspire your next adventure.';
  let twitterUrl = 'https://x.com/';
  let facebookUrl = 'https://www.facebook.com/';
  let linkedinUrl = 'https://www.linkedin.com/';

  if (typeof blog.author === 'object' && blog.author !== null) {
    authorName = blog.author.name || authorName;
    if (blog.author.image) authorImg = formatImageUrl(blog.author.image, authorImg);
    if (blog.author.description) authorDesc = blog.author.description;
    if (blog.author.twitter_url) twitterUrl = blog.author.twitter_url;
    if (blog.author.facebook_url) facebookUrl = blog.author.facebook_url;
    if (blog.author.linkedin_url) linkedinUrl = blog.author.linkedin_url;
  } else if (typeof blog.author === 'string') {
    authorName = blog.author;
  } else if (blog.author_name) {
    authorName = blog.author_name;
  }

  let categoryName = 'Travel Stories';
  if (typeof blog.category === 'object' && blog.category !== null) {
    categoryName = blog.category.name || categoryName;
  } else if (typeof blog.category === 'string') {
    categoryName = blog.category;
  }

  const readTimeStr = blog.read_time_text || (blog.read_time ? `${blog.read_time} min read` : '5 min read');

  let dateStr = 'Recent';
  if (blog.published_date) {
    dateStr = blog.published_date;
  } else if (blog.published_at || blog.created_at) {
    const rawDate = new Date(blog.published_at || blog.created_at || '');
    if (!isNaN(rawDate.getTime())) {
      dateStr = rawDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  }

  return {
    id: blog.id,
    title: blog.title,
    slug: blog.slug || String(blog.id),
    excerpt: blog.short_description || (blog.content ? blog.content.replace(/<[^>]*>?/gm, '').substring(0, 160) + '...' : ''),
    content: blog.content || '',
    image: imgUrl,
    imageUrl: imgUrl,
    date: dateStr,
    author: authorName,
    authorImage: authorImg,
    authorDescription: authorDesc,
    twitterUrl,
    facebookUrl,
    linkedinUrl,
    category: categoryName,
    readTime: readTimeStr,
    tableOfContents: blog.table_of_contents || [],
  };
}

// Helper to safely convert array-like objects or values into arrays
function toSafeArray<T = any>(val: any): T[] {
  if (!val) return [];
  if (Array.isArray(val)) return val;
  if (typeof val === 'object') return Object.values(val);
  if (typeof val === 'string') {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
      if (typeof parsed === 'object' && parsed !== null) return Object.values(parsed);
    } catch {
      return [val as any];
    }
  }
  return [];
}

export function mapServiceFromApi(service: ApiService) {
  const heroImage = formatImageUrl(service.about_image_url || service.about_image);

  // Safely extract collections (backend sometimes returns features as objects: { "0": {...}, "${index}": {...} })
  const rawFeatures = toSafeArray<any>(service.features);
  const rawProcessSteps = toSafeArray<any>(service.process_steps);
  const rawServiceItems = toSafeArray<any>(service.service_items);
  const rawDocuments = toSafeArray<any>(service.documents);
  const rawWhyChoose = toSafeArray<any>(service.why_choose_items);
  const rawStats = toSafeArray<any>(service.stats);

  // Map highlights
  const highlights = rawFeatures.map((f, i) => {
    const icons: Array<'user' | 'list' | 'clock' | 'shield' | 'headset'> = [
      'user', 'list', 'clock', 'shield', 'headset'
    ];
    return {
      title: f.title || f.name || `Feature ${i + 1}`,
      desc: f.description || f.desc || '',
      iconType: icons[i % icons.length],
    };
  });

  // Map process steps
  const processSteps = rawProcessSteps.map((step, i) => {
    const iconTypes: Array<'chat' | 'document' | 'edit' | 'card' | 'hourglass' | 'check'> = [
      'chat', 'document', 'edit', 'card', 'hourglass', 'check'
    ];
    return {
      title: step.title || step.name || `Step ${i + 1}`,
      description: step.description || step.desc || '',
      iconType: iconTypes[i % iconTypes.length],
    };
  });

  // Map why choose items
  const whyChooseUs = rawWhyChoose.filter(Boolean).map((item, i) => {
    const icons: Array<'agent' | 'user' | 'building' | 'price' | 'support' | 'clock'> = [
      'agent', 'user', 'building', 'price', 'support', 'clock'
    ];
    return {
      title: typeof item === 'string' ? item : (item as any).title || '',
      iconType: icons[i % icons.length],
    };
  });

  const serviceItems = rawServiceItems.map((item) =>
    typeof item === 'string' ? item : (item.title || item.name || String(item))
  );

  const documents = rawDocuments.filter(Boolean).map((item) =>
    typeof item === 'string' ? item : (item.title || item.name || String(item))
  );

  return {
    id: service.slug || String(service.id),
    serviceId: service.id,
    title: service.title,
    subtitle: service.about_title || service.about_description || 'Complete travel assistance & transparent guidance.',
    heroImage: heroImage || 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop',
    highlights: highlights.length > 0 ? highlights : [
      { title: 'Expert Guidance', desc: 'From start to successful completion', iconType: 'user' as const },
      { title: 'High Success Rate', desc: 'Maximum satisfaction ratio', iconType: 'list' as const },
      { title: 'Save Time', desc: 'Fast & efficient process', iconType: 'clock' as const },
      { title: 'Secure & Reliable', desc: 'Your details are safe with us', iconType: 'shield' as const },
      { title: '24/7 Support', desc: "We're here to help you anytime", iconType: 'headset' as const },
    ],
    content: {
      title: service.about_title || `${service.title} For Your Journey`,
      description: service.about_description || 'We make travel processing simple and stress-free. Our experienced team provides end-to-end support.',
      features: serviceItems.length > 0
        ? serviceItems
        : [
            `${service.title} Guidance`,
            'Online Application & Verification',
            'Dedicated Customer Support',
            'Quick Turnaround Time',
          ],
      sideImage: heroImage || '',
      successRate: '99%',
      successLabel: 'Customer Satisfaction',
    },
    processSteps: processSteps.length > 0 ? processSteps : [
      { title: 'Consultation', description: 'Understand your requirements and travel details.', iconType: 'chat' as const },
      { title: 'Document Check', description: 'We review and verify all details for accuracy.', iconType: 'document' as const },
      { title: 'Processing', description: 'We process your request with high priority.', iconType: 'edit' as const },
      { title: 'Completion', description: 'Receive your confirmation and start your journey!', iconType: 'check' as const },
    ],
    documents: documents.length > 0
      ? documents
      : [
          'Valid Government ID',
          'Passport / Relevant Travel Documents',
          'Contact & Travel Details',
        ],
    whyChooseUs: whyChooseUs.length > 0 ? whyChooseUs : [
      { title: 'Experienced travel consultants', iconType: 'agent' as const },
      { title: 'Personalized guidance for each traveler', iconType: 'user' as const },
      { title: 'Transparent pricing, no hidden charges', iconType: 'price' as const },
      { title: 'Timely updates and 24/7 dedicated support', iconType: 'support' as const },
    ],
    cta: {
      title: service.cta_title || 'Ready To Start Your Journey?',
      description: service.cta_description || `Let us take care of your ${service.title ? service.title.toLowerCase() : 'travel process'} while you focus on making unforgettable memories.`,
      image: formatImageUrl(service.cta_background_image_url || service.cta_background_image, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop'),
      stats: rawStats.length > 0
        ? rawStats
        : [
            { number: '10,000+', label: 'Visas Processed' },
            { number: '25+', label: 'Countries Covered' },
            { number: '98%', label: 'Success Rate' },
          ],
    },
    raw: service,
  };
}

export function mapTestimonialFromApi(item: ApiTestimonial) {
  const avatar = formatImageUrl(
    item.customer_image_url || item.customer_image,
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  );

  let source: "Tripadvisor" | "Facebook" | "Google" = 'Google';
  const platformLower = (item.platform || '').toLowerCase();
  if (platformLower.includes('trip')) source = 'Tripadvisor';
  else if (platformLower.includes('face')) source = 'Facebook';
  else source = 'Google';

  return {
    id: item.id,
    name: item.customer_name,
    avatar,
    location: item.location || 'Verified Traveler',
    rating: item.rating || 5,
    message: item.review,
    date: item.review_date || 'Recent',
    time: item.review_time || '10:00 AM',
    source,
  };
}


export function mapHeroFromApi(hero: ApiHero) {
  return {
    id: hero.id,
    title: hero.title,
    description: hero.description || hero.subtitle || '',
    image: formatImageUrl(hero.image_url || hero.image),
    buttonText: hero.button_text || hero.btn_text || 'Explore More',
    buttonLink: hero.button_link || hero.btn_link || '/tours/domestic',
  };
}
