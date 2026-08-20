import type {
  ApiTour,
  ApiBlog,
  ApiService,
  ApiTestimonial,
  ApiHero,
} from './types';
import { formatImageUrl } from './imageHelper';
import defaultBreadcrumb from '../assets/breadcrumb.png';

export function mapTourFromApi(tour: ApiTour) {
  const thumbnail = tour.thumbnail_url || tour.thumbnail || '';
  const formattedImage = formatImageUrl(thumbnail, defaultBreadcrumb);

  // Extract places covered from features
  const placesCovered = (tour.features || [])
    .filter((f) => f.type === 'place_covered')
    .map((f) => f.title);

  // Extract package inclusions
  const inclusions = (tour.features || [])
    .filter((f) => f.type === 'package_inclusion')
    .map((f) => f.title);

  // Extract highlights
  const highlights = (tour.features || [])
    .filter((f) => f.type === 'tour_highlight' || f.type === 'place_covered')
    .map((f) => ({
      title: f.title,
      description: f.description || `Explore ${f.title} during your ${tour.title} tour.`,
      image: formatImageUrl(f.image_url || f.image, formattedImage),
    }));

  const locations = placesCovered.length > 0
    ? placesCovered
    : [tour.country || tour.title];

  // Map gallery images
  const galleryImages = (tour.gallery || []).map((img) => {
    if (typeof img === 'string') return formatImageUrl(img, formattedImage);
    return formatImageUrl(img.url || img.image, formattedImage);
  });

  const tourTypeSlug = tour.tour_type?.slug || '';
  const isDomestic = tour.tour_type_id === 2 || tourTypeSlug.includes('domestic');

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
      about: tour.detail?.description || tour.detail?.about || '',
      inclusions: (tour.detail?.inclusions && tour.detail.inclusions.length > 0)
        ? tour.detail.inclusions
        : inclusions,
      exclusions: tour.detail?.exclusions || [
        'Personal Expenses',
        'Airfare / Train Tickets unless specified',
        'Optional Activity Charges',
      ],
      highlights,
      gallery: galleryImages.length > 0 ? galleryImages : [formattedImage],
    },
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

export function mapServiceFromApi(service: ApiService) {
  const heroImage = formatImageUrl(service.about_image_url || service.about_image);

  // Map highlights
  const highlights = (service.features || []).map((f, i) => {
    const icons: Array<'user' | 'list' | 'clock' | 'shield' | 'headset'> = [
      'user', 'list', 'clock', 'shield', 'headset'
    ];
    return {
      title: f.title,
      desc: f.description,
      iconType: icons[i % icons.length],
    };
  });

  // Map process steps
  const processSteps = (service.process_steps || []).map((step, i) => {
    const iconTypes: Array<'chat' | 'document' | 'edit' | 'card' | 'hourglass' | 'check'> = [
      'chat', 'document', 'edit', 'card', 'hourglass', 'check'
    ];
    return {
      title: step.title,
      description: step.description,
      iconType: iconTypes[i % iconTypes.length],
    };
  });

  // Map why choose items
  const whyChooseUs = (service.why_choose_items || []).filter(Boolean).map((item, i) => {
    const icons: Array<'agent' | 'user' | 'building' | 'price' | 'support' | 'clock'> = [
      'agent', 'user', 'building', 'price', 'support', 'clock'
    ];
    return {
      title: typeof item === 'string' ? item : (item as any).title || '',
      iconType: icons[i % icons.length],
    };
  });

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
      features: (service.service_items && service.service_items.length > 0)
        ? service.service_items
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
    documents: (service.documents && service.documents.filter(Boolean).length > 0)
      ? service.documents.filter(Boolean) as string[]
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
