import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ui/ScrollReveal';

interface ContactProps {
  variant?: 'full' | 'form-only';
}

export function Contact({ variant = 'full' }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    destination: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
    
    // Automatically reset success message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', destination: '' });
    }, 4000);
  };

  return (
    <>
      {/* ================= BREADCRUMB HERO BANNER (Only on full page) ================= */}
      {variant === 'full' && (
        <section id="contact" className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1800&q=80"
            alt="Contact Us Banner"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#100c08]/85 via-[#100c08]/70 to-[#0b84d8]/50" />
        </div>

        {/* Decorative dot pattern */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 grid grid-cols-6 gap-[10px] opacity-[0.1]">
          {Array.from({ length: 36 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-white" />
          ))}
        </div>

        {/* Decorative circles */}
        <div className="pointer-events-none absolute -left-16 bottom-0 h-52 w-52 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -left-8 bottom-6 h-36 w-36 rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-[1320px] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
          <ScrollReveal variant="fade-in-up" duration={1000}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[13.5px] font-jost" aria-label="Breadcrumb">
              <Link
                to="/"
                className="text-white/70 transition hover:text-[#fbb03b] font-medium"
              >
                Home
              </Link>

              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 text-white/40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>

              <span className="text-[#fbb03b] font-semibold">
                Contact Us
              </span>
            </nav>

            {/* Page title */}
            <h1 className="mt-4 font-rubik text-[36px] font-bold leading-tight text-white sm:text-[46px] lg:text-[54px]">
              Contact Us
            </h1>

            <p className="mt-3 max-w-[480px] font-jost text-[15px] leading-7 text-white/65">
              We'd love to hear from you. Reach out to plan your next adventure
              with Open Sky Holidays.
            </p>
          </ScrollReveal>
        </div>

        {/* Bottom slanted edge */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-50/60" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
      </section>
      )}

      {/* ================= CONTACT FORM SECTION ================= */}
      <section id={variant === 'form-only' ? 'contact' : undefined} className="relative overflow-hidden bg-slate-50/60 py-16 px-5 sm:px-8">
        {/* Background decorative blurs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute -left-48 -top-48 h-96 w-96 rounded-full bg-[#0b84d8]/10 blur-[100px]" />
          <div className="absolute -right-48 -bottom-48 h-96 w-96 rounded-full bg-[#fbb03b]/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1140px]">
          {/* Section Heading */}
          <ScrollReveal variant="fade-in-up" duration={1200} className="text-center mb-10">
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#0b84d8]" />
              <p className="font-satisfy text-[24px] font-normal text-[#0b84d8] capitalize">
                Get In Touch
              </p>
              <span className="h-px w-8 bg-[#0b84d8]" />
            </div>
            <h2 className="mt-3 font-rubik text-[34px] font-bold leading-tight text-[#100c08] sm:text-[44px]">
              Plan Your Next Adventure
            </h2>
          </ScrollReveal>

          {/* 2-Column Split Premium Container Card */}
          <div className="grid overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(16,12,8,0.05)] lg:grid-cols-12 items-stretch">
            
            {/* Left Column: Form Card (lg:col-span-7) */}
            <ScrollReveal
              variant="fade-in-left"
              delay={150}
              duration={1300}
              className="p-8 sm:p-10 lg:col-span-7 bg-white flex flex-col justify-center relative h-full"
            >
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-[#0b84d8]" />
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center animate-[scaleIn_0.35s_ease-out] font-jost">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] mb-4">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-rubik text-[22px] font-bold text-slate-900">Inquiry Received!</h3>
                  <p className="mt-2 text-slate-500 max-w-[320px] text-[14px]">
                    Thank you, <span className="text-[#0b84d8] font-bold">{formData.name}</span>! Our travel expert will contact you shortly.
                  </p>
                </div>
              ) : (
                <div className="font-jost">
                  <h3 className="font-rubik text-[20px] font-bold text-slate-900">Quick Inquiry</h3>
                  <p className="text-[13px] text-slate-500 mt-1">Let us handle the details. Fill this 1-minute form.</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    
                    {/* Name Input */}
                    <div className="relative group">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Full Name *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors">
                          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full h-11 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-400 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/10 transition-all text-[13.5px]"
                        />
                      </div>
                    </div>

                    {/* Contact Info (Phone/Email) */}
                    <div className="relative group">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Phone or Email *</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors">
                          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          placeholder="Phone number or email address"
                          className="w-full h-11 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-400 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/10 transition-all text-[13.5px]"
                        />
                      </div>
                    </div>

                    {/* Destination */}
                    <div className="relative group">
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Preferred Destination (Optional)</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors">
                          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                        </span>
                        <input
                          type="text"
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          placeholder="e.g. Kerala, Singapore, Maldives"
                          className="w-full h-11 pl-11 pr-4 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-400 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/10 transition-all text-[13.5px]"
                        />
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-3">
                      <button
                        type="submit"
                        className="h-11 flex-1 rounded-lg bg-[#0b84d8] hover:bg-[#0a73be] text-white font-semibold text-[13.5px] flex items-center justify-center gap-2 transition hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-[#0b84d8]/15 cursor-pointer font-rubik"
                      >
                        <span>Send Inquiry</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      <a
                        href="https://wa.me/919908117712?text=Hello%20Open%20Sky%20Holidays%2C%20I%20want%20to%20know%20more%20about%20your%20tour%20packages."
                        target="_blank"
                        rel="noreferrer"
                        className="h-11 px-5 rounded-lg border border-[#25d366] text-[#25d366] hover:bg-[#25d366] hover:text-white font-semibold text-[13.5px] flex items-center justify-center gap-2 transition hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-rubik"
                      >
                        <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.5 3.5A11.7 11.7 0 0 0 12.1 0C5.6 0 .4 5.2.4 11.7c0 2.1.5 4.1 1.6 5.9L.3 24l6.6-1.7a11.8 11.8 0 0 0 5.2 1.3h.1c6.4 0 11.7-5.2 11.7-11.7 0-3.1-1.2-6.1-3.4-8.4Zm-8.4 18.1c-1.7 0-3.4-.5-4.9-1.3l-.3-.2-3.9 1 1-3.8-.2-.4a9.6 9.6 0 0 1-1.5-5.2c0-5.4 4.4-9.7 9.8-9.7 2.6 0 5 1 6.9 2.8a9.7 9.7 0 0 1 2.9 6.9c0 5.4-4.4 9.9-9.8 9.9Zm5.3-7.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.7.1-.2 0-.4 0-.6-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.9.3 1.7.2 2.3.1.7-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1 0-.4-.1-.7-.2Z" />
                        </svg>
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </form>
                </div>
              )}
            </ScrollReveal>

            {/* Right Column: Visual Image Panel + Overlay Info (lg:col-span-5) */}
            <ScrollReveal
              variant="fade-in-right"
              delay={300}
              duration={1350}
              className="relative min-h-[440px] lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 text-white overflow-hidden bg-slate-900 h-full"
            >
              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=90"
                alt="Travel Planning Visual"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-102"
              />
              {/* Dark vignette gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-slate-950/20" />

              {/* Inner Border Line */}
              <div className="pointer-events-none absolute inset-4 rounded-xl border border-white/20" />

              {/* Top Tagline Info */}
              <div className="relative z-10">
                <span className="inline-flex rounded-full bg-[#fbb03b] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900">
                  Since 2013
                </span>
                <h3 className="mt-4 font-rubik text-[24px] font-bold leading-tight sm:text-[28px]">
                  Open Sky Holidays
                </h3>
                <p className="mt-2 font-satisfy text-[19px] text-[#fbb03b]">
                  The World Is Waiting
                </p>
              </div>

              {/* Bottom Contact Details Overlay */}
              <div className="relative z-10 space-y-3 font-jost text-[13.5px] border-t border-white/10 pt-4 bg-slate-950/40 p-5 rounded-xl backdrop-blur-md">
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0b84d8] font-bold">Call / WhatsApp:</span>
                  <a href="tel:+919908117712" className="font-semibold hover:text-[#fbb03b] transition font-rubik">+91 99081 17712</a>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-[#0b84d8] font-bold">Email:</span>
                  <a href="mailto:info@openskyholidays.in" className="font-semibold hover:text-[#fbb03b] transition font-rubik">info@openskyholidays.in</a>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#0b84d8] font-bold mt-0.5">Location:</span>
                  <span className="font-medium leading-relaxed">
                    # 1-11-110, Shyamlal Building,<br/>
                    Begumpet, Hyderabad - 500 018
                  </span>
                </div>
                
                {/* Branches */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-[#0b84d8] font-bold block mb-2">Our Branches:</span>
                  <div className="flex flex-wrap gap-2">
                    {['Telangana', 'Andhra Pradesh', 'Karnataka', 'Tamil Nadu'].map(branch => (
                      <span key={branch} className="rounded border border-white/20 bg-white/5 px-2 py-1 text-[11px] font-medium tracking-wide">
                        {branch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </ScrollReveal>

          </div>

        </div>

        {/* ================= GOOGLE MAP EMBED (Only on full page) ================= */}
        {variant === 'full' && (
          <ScrollReveal variant="fade-in-up" delay={200} duration={1300}>
            <div className="relative mx-auto mt-14 max-w-[1140px] px-5 sm:px-8">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 shadow-[0_12px_40px_rgba(7,31,67,0.06)]">
              {/* Map header bar */}
              <div className="flex items-center gap-3 bg-white px-6 py-4 border-b border-slate-100">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b84d8]/10 text-[#0b84d8]">
                  <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-rubik text-[14px] font-bold text-[#100c08]">Our Office Location</p>
                  <p className="font-jost text-[12.5px] text-slate-500">#1-11-110, Shyamlal Building, Begumpet, Hyderabad - 500018</p>
                </div>
              </div>

              {/* Map iframe */}
              <iframe
                title="Open Sky Holidays Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5186641775836!2d78.45524677516599!3d17.43485748346061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b9b3e944cd%3A0xc665e7178cf2338c!2sShyamlal%20Building!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="h-[300px] w-full sm:h-[380px] lg:h-[420px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </ScrollReveal>
        )}

        {/* Bottom spacing */}
        <div className="h-8" />
      </section>
    </>
  );
}
