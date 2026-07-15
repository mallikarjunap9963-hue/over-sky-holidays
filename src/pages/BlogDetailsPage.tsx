import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function BlogDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const getAuthorImage = (authorName: string) => {
    if (authorName.includes("Priya")) return "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80";
    if (authorName.includes("Sneha")) return "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80";
    if (authorName.includes("Arjun")) return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80";
    return "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=150&q=80"; // Group/Team photo default
  };

  const post = blogPosts.find((p) => p.id === Number(id));

  // Get recent blogs for sidebar
  const recentBlogs = blogPosts.filter(p => p.id !== Number(id)).slice(0, 4);

  // Get related blogs (you may also like)
  const relatedBlogs = blogPosts.filter(p => p.id !== Number(id)).slice(0, 3);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4">
        <h1 className="font-rubik text-4xl font-bold text-[#100c08] mb-4">Blog Post Not Found</h1>
        <p className="font-jost text-lg text-slate-500 mb-8">The article you are looking for does not exist or has been removed.</p>
        <Link to="/blogs" className="btn-primary rounded-full px-8 py-3 font-bold">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-[#f4f7f9] pb-24">
      {/* ================= HERO BANNER ================= */}
      <section className="relative overflow-hidden bg-[#071f36] pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Abstract background pattern on the right (simulated with CSS/SVG) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute right-10 top-1/2 -translate-y-1/2 grid grid-cols-5 gap-3">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-white rounded-full opacity-40"></div>
            ))}
          </div>
          <svg className="absolute right-0 top-0 h-full w-full object-cover opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
          <ScrollReveal variant="fade-in-up" duration={800}>
            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 font-jost text-[13px] font-medium text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link>
              <span>›</span>
              <span className="text-white truncate max-w-[200px] sm:max-w-none">{post.title}</span>
            </div>

            {/* Title */}
            <h1 className="font-rubik text-[32px] font-bold leading-[1.2] text-white sm:text-[42px] lg:text-[48px] max-w-[800px]">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-[14px] text-white/90 font-jost font-medium">
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= MAIN LAYOUT ================= */}
      <section className="mx-auto max-w-[1200px] px-5 sm:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* LEFT COLUMN - CONTENT */}
          <div className="lg:col-span-8">
            {/* Main Image */}
            <div className="mb-6 overflow-hidden rounded-[16px] shadow-sm bg-white">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
              />
            </div>

            {/* Share & Content Wrapper */}
            <div className="bg-white rounded-[16px] p-6 sm:p-10 shadow-sm border border-slate-100 mb-8">

              {/* Share Bar */}
              <div className="flex flex-wrap items-center gap-3 border-b border-slate-100 pb-6 mb-8">
                <span className="font-jost text-[14px] font-semibold text-[#100c08] mr-2">Share:</span>

                <button className="h-9 w-9 rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0b84d8] hover:bg-[#0b84d8] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                </button>
                <button className="h-9 w-9 rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0b84d8] hover:bg-[#0b84d8] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                </button>
                <button className="h-9 w-9 rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0b84d8] hover:bg-[#0b84d8] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </button>
                <button className="h-9 w-9 rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0b84d8] hover:bg-[#0b84d8] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                </button>
                <button className="h-9 w-9 rounded-full bg-[#f4f7f9] flex items-center justify-center text-[#0b84d8] hover:bg-[#0b84d8] hover:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </button>
              </div>

              {/* Text Introduction / Overview */}
              <p className="font-jost text-[16px] leading-[1.8] text-slate-600 mb-8">
                {post.excerpt} {post.title.includes('India') ? "India is a land of diverse cultures, breathtaking landscapes, and timeless heritage. From the snow-capped peaks of the Himalayas to the serene backwaters of Kerala, the vibrant streets of Rajasthan to the tranquil beaches of Goa - the country offers unforgettable experiences for every traveler. Here are the top destinations that should be on your travel bucket list." : "Read on to discover the best insights and tips for this destination."}
              </p>

              {/* HTML Content */}
              <div
                className="prose prose-lg max-w-none 
                prose-headings:font-rubik prose-headings:font-bold prose-headings:text-[#100c08] 
                prose-h2:text-[22px] prose-h2:mt-10 prose-h2:mb-4 prose-h2:flex prose-h2:items-center prose-h2:gap-3
                prose-p:font-jost prose-p:text-slate-500 prose-p:text-[15px] prose-p:leading-[1.8] prose-p:mb-6
                [&>h2]:before:content-[counter(section)] [&>h2]:before:flex [&>h2]:before:items-center [&>h2]:before:justify-center [&>h2]:before:w-8 [&>h2]:before:h-8 [&>h2]:before:rounded-full [&>h2]:before:bg-[#0b84d8] [&>h2]:before:text-white [&>h2]:before:text-[14px] [&>h2]:before:font-bold [&>h2]:[counter-increment:section] [counter-reset:section]"
                dangerouslySetInnerHTML={{ __html: post.content || '' }}
              />

              {/* View All Button inside content */}
              <div className="mt-10 flex justify-center border-t border-slate-100 pt-10">
                <Link to="/blogs" className="flex items-center gap-2 rounded-full border border-[#0b84d8] px-8 py-3 text-[14px] font-bold text-[#0b84d8] hover:bg-[#0b84d8] hover:text-white transition-colors">
                  View All Destinations
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* About The Author Bottom Box */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 border border-slate-100 shadow-sm text-center sm:text-left mb-8">
              <img src={getAuthorImage(post.author)} alt="Author" className="h-[90px] w-[90px] rounded-full object-cover shadow-md" />
              <div className="flex-1">
                <span className="font-rubik text-[14px] font-bold text-[#0b84d8] mb-1 block">About The Author</span>
                <h4 className="font-rubik text-[18px] font-bold text-[#100c08] mb-2">{post.author}</h4>
                <p className="font-jost text-[14px] text-slate-500 leading-relaxed mb-4">
                  Travel enthusiasts sharing honest guides, travel tips, and destination stories to inspire your next adventure.
                </p>
                <div className="flex justify-center sm:justify-start gap-2">
                  <button className="h-8 w-8 rounded-full bg-[#0b84d8] flex items-center justify-center text-white hover:bg-[#100c08] transition-colors"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></button>
                  <button className="h-8 w-8 rounded-full bg-[#100c08] flex items-center justify-center text-white hover:bg-[#0b84d8] transition-colors"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></button>
                  <button className="h-8 w-8 rounded-full bg-[#0b84d8] flex items-center justify-center text-white hover:bg-[#100c08] transition-colors"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></button>
                </div>
              </div>
            </div>

            {/* Prev / Next Post Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <Link to={`/blogs/${relatedBlogs[0]?.id}`} className="group bg-white rounded-[12px] p-4 flex items-center gap-4 border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <img src={relatedBlogs[0]?.imageUrl || "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=100&q=80"} alt="Prev" className="h-[60px] w-[80px] rounded-[8px] object-cover" />
                <div>
                  <span className="flex items-center gap-1 font-jost text-[12px] font-semibold text-[#0b84d8] mb-1 group-hover:-translate-x-1 transition-transform">
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
                    Previous Article
                  </span>
                  <h5 className="font-rubik text-[13px] font-bold leading-tight text-[#100c08] line-clamp-2">{relatedBlogs[0]?.title || "How To Plan A Budget-Friendly International Trip"}</h5>
                </div>
              </Link>
              <Link to={`/blogs/${relatedBlogs[1]?.id}`} className="group bg-white rounded-[12px] p-4 flex items-center gap-4 border border-slate-100 shadow-sm hover:shadow-md transition-all text-right flex-row-reverse">
                <img src={relatedBlogs[1]?.imageUrl || "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=100&q=80"} alt="Next" className="h-[60px] w-[80px] rounded-[8px] object-cover" />
                <div>
                  <span className="flex items-center justify-end gap-1 font-jost text-[12px] font-semibold text-[#0b84d8] mb-1 group-hover:translate-x-1 transition-transform">
                    Next Article
                    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                  <h5 className="font-rubik text-[13px] font-bold leading-tight text-[#100c08] line-clamp-2">{relatedBlogs[1]?.title || "Best Honeymoon Spots: Maldives vs Bali vs Switzerland"}</h5>
                </div>
              </Link>
            </div>

            {/* You May Also Like */}
            <div>
              <h3 className="font-rubik text-[22px] font-bold text-[#100c08] mb-6">You May Also Like</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedBlogs.map((b) => (
                  <Link key={b.id} to={`/blogs/${b.id}`} className="group bg-white rounded-[16px] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                    <div className="relative h-[160px] overflow-hidden">
                      <img src={b.imageUrl} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <span className="absolute top-4 left-4 bg-[#0b84d8] text-white text-[10px] font-bold px-3 py-1 uppercase rounded-full tracking-wider">
                        {b.category}
                      </span>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex flex-wrap items-center gap-3 text-[12px] font-jost text-slate-400 mb-3">
                        <span className="flex items-center gap-1.5"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>{b.date}</span>
                        <span className="flex items-center gap-1.5"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M6 21v-2a6 6 0 0 1 12 0v2" /></svg>{b.author}</span>
                      </div>
                      <h4 className="font-rubik text-[16px] font-bold text-[#100c08] leading-snug group-hover:text-[#0b84d8] transition-colors mb-3 line-clamp-2">
                        {b.title}
                      </h4>
                      <div className="mt-auto flex items-center gap-1.5 text-[13px] font-bold text-[#0b84d8]">
                        Read More <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>


          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="lg:col-span-4 space-y-8">

            {/* Sidebar: About Author */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-slate-100 shadow-sm text-center">
              <h3 className="font-rubik text-[18px] font-bold text-[#0b84d8] mb-6 relative inline-block">
                About The Author
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-[#fbb03b]"></span>
              </h3>
              <div className="flex flex-col items-center">
                <img src={getAuthorImage(post.author)} alt="Author" className="h-[100px] w-[100px] rounded-full object-cover shadow-md mb-4" />
                <h4 className="font-rubik text-[16px] font-bold text-[#100c08] mb-2">{post.author}</h4>
                <p className="font-jost text-[14px] text-slate-500 leading-relaxed mb-5">
                  Travel enthusiasts sharing honest guides, travel tips, and destination stories to inspire your next adventure.
                </p>
                <div className="flex justify-center gap-2">
                  <button className="h-8 w-8 rounded-full bg-[#0b84d8] flex items-center justify-center text-white hover:bg-[#100c08] transition-colors"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg></button>
                  <button className="h-8 w-8 rounded-full bg-[#100c08] flex items-center justify-center text-white hover:bg-[#0b84d8] transition-colors"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg></button>
                  <button className="h-8 w-8 rounded-full bg-[#0b84d8] flex items-center justify-center text-white hover:bg-[#100c08] transition-colors"><svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></button>
                </div>
              </div>
            </div>

            {/* Sidebar: Table of Contents */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-slate-100 shadow-sm">
              <h3 className="font-rubik text-[18px] font-bold text-[#0b84d8] mb-6">Table of Contents</h3>
              <ul className="space-y-3 font-jost text-[14px] text-slate-600">
                <li className="flex gap-3"><span className="text-slate-400 font-bold">01.</span> Kerala – God's Own Country</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">02.</span> Rajasthan – The Land of Kings</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">03.</span> Goa – The Beach Paradise</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">04.</span> Himachal Pradesh – The Mountain Retreat</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">05.</span> Ladakh – The Land of High Passes</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">06.</span> Uttarakhand – The Spiritual Escape</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">07.</span> Andaman & Nicobar – Island Beauty</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">08.</span> Mumbai – The City of Dreams</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">09.</span> Varanasi – The Spiritual Heart</li>
                <li className="flex gap-3"><span className="text-slate-400 font-bold">10.</span> Northeast India – The Hidden Gem</li>
              </ul>
            </div>

            {/* Sidebar: Recent Blogs */}
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-slate-100 shadow-sm">
              <h3 className="font-rubik text-[18px] font-bold text-[#0b84d8] mb-6">Recent Blogs</h3>
              <div className="space-y-5">
                {recentBlogs.map((b) => (
                  <Link key={b.id} to={`/blogs/${b.id}`} className="group flex gap-4 items-center">
                    <img src={b.imageUrl} alt={b.title} className="min-w-[80px] w-[80px] h-[75px] rounded-[10px] object-cover" />
                    <div>
                      <h4 className="font-rubik text-[14px] font-bold text-[#100c08] leading-tight mb-2 group-hover:text-[#0b84d8] transition-colors line-clamp-2">
                        {b.title}
                      </h4>
                      <span className="font-jost text-[12px] text-slate-400 block">{b.date}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar: Ad Widget */}
            <div className="group rounded-[16px] overflow-hidden relative shadow-lg text-center min-h-[400px] flex flex-col justify-center">
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80" 
                alt="Adventure" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f36] via-[#0b84d8]/80 to-[#0b84d8]/30"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full text-white">
                <div className="mb-5 h-14 w-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                
                <h3 className="font-rubik text-[28px] font-black mb-3 leading-[1.15] drop-shadow-md">
                  Plan Your Next<br />Adventure!
                </h3>
                
                <p className="font-jost text-[15px] text-white/90 mb-8 max-w-[220px] mx-auto drop-shadow-md">
                  Get the best travel deals, customized packages & 24/7 support.
                </p>
                
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#fbb03b] text-[#100c08] font-bold font-rubik text-[14px] px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-[0_8px_20px_rgba(251,176,59,0.3)] group-hover:-translate-y-1">
                  Book Your Tour
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
