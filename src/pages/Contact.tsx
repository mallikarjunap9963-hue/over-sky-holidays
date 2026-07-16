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
    phone: '',
    email: '',
    travelDate: '',
    destination: '',
    travelers: '',
    tourType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setSubmitted(true);

    // Automatically reset success message after 4 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        travelDate: '',
        destination: '',
        travelers: '',
        tourType: '',
        message: ''
      });
    }, 4000);
  };

  const destinationsList = [
    "Goa", "Kullu & Manali", "Ooty & Kodaikanal", "Kerala", "Delhi & Agra",
    "Darjeeling & Nainital", "Rishikesh & Haridwar", "Kedarnath & Badrinath",
    "Meghalaya", "Tirupati Balaji", "Maldives", "Nepal & Bhutan",
    "Bangkok", "Dubai", "Singapore", "Sri Lanka", "Andaman & Nicobar Islands",
    "Bali", "USA", "United Kingdom (UK)", "Vietnam & Cambodia", "Hong Kong"
  ];

  return (
    <>
      {/* ================= PROFESSIONAL BREADCRUMB BANNER ================= */}
      {variant === "full" && (
        <section
          id="contact"
          className="relative isolate overflow-hidden bg-[#071f36]"
        >
          {/* Background Image */}
          <div className="absolute inset-0 -z-20">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=90"
              alt="Open Sky Holidays Contact Page"
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071f36]/95 via-[#071f36]/82 to-[#0b84d8]/45" />

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#071f36]/60 to-transparent" />

          {/* Decorative Circle */}
          <div className="pointer-events-none absolute -right-24 -top-28 h-[340px] w-[340px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-16 h-[240px] w-[240px] rounded-full border border-white/10" />

          {/* Decorative Dots */}
          <div className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 grid-cols-6 gap-3 opacity-20 lg:grid">
            {Array.from({ length: 36 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
            ))}
          </div>

          <div className="relative mx-auto flex min-h-[220px] max-w-[1320px] items-center px-5 py-10 sm:min-h-[250px] sm:px-8 lg:min-h-[280px] lg:px-10">
            <ScrollReveal variant="fade-in-up" duration={1000}>
              <div className="max-w-[680px]">
                {/* Small Label */}
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-[#fbb03b]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2 11 13" />
                    <path d="m22 2-7 20-4-9-9-4Z" />
                  </svg>

                  <span className="font-jost text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                    Open Sky Holidays
                  </span>
                </div>

                {/* Page Title */}
                <h1 className="font-rubik text-[38px] font-black leading-[1.08] text-white sm:text-[48px] lg:text-[58px]">
                  Contact Us
                </h1>

                {/* Description */}
                <p className="mt-2.5 max-w-[570px] font-jost text-[14px] leading-7 text-white/75 sm:text-[15px]">
                  Start planning your perfect holiday with our travel experts.
                  Contact us for customized packages, destination guidance and
                  complete travel assistance.
                </p>

                {/* Breadcrumb */}
                <nav
                  aria-label="Breadcrumb"
                  className="mt-4.5 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#071f36]/40 px-4 py-2.5 backdrop-blur-md"
                >
                  <Link
                    to="/"
                    className="flex items-center gap-2 font-jost text-[13px] font-semibold text-white/75 transition-colors duration-300 hover:text-[#fbb03b]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m3 11 9-8 9 8" />
                      <path d="M5 10v10h14V10" />
                      <path d="M9 20v-6h6v6" />
                    </svg>

                    Home
                  </Link>

                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5 text-white/35"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>

                  <span className="font-jost text-[13px] font-semibold text-[#fbb03b]">
                    Contact Us
                  </span>
                </nav>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom White Curve */}
          <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden leading-none">
            <svg
              viewBox="0 0 1440 55"
              preserveAspectRatio="none"
              className="block h-[30px] w-full sm:h-[42px] lg:h-[55px]"
            >
              <path
                d="M0,36 C260,58 420,3 720,27 C1010,50 1180,5 1440,25 L1440,55 L0,55 Z"
                fill="#f8fafc"
              />
            </svg>
          </div>
        </section>
      )}

      {/* ================= CONTACT FORM SECTION ================= */}
      <section
        id={variant === 'form-only' ? 'contact' : undefined}
        className="relative overflow-hidden py-10 px-4 sm:px-6 lg:px-8 xl:px-10 bg-slate-50 flex flex-col items-center justify-center gap-12 min-h-[90vh]"
      >
        <div className="relative mx-auto w-full max-w-[1200px] z-10">
          <ScrollReveal variant="fade-in-up" duration={1200}>

            {/* Self-contained Box container housing both Image (Left) and Form (Right) */}
            <div className="bg-white rounded-[32px] border border-slate-200/60 shadow-[0_20px_60px_rgba(15,23,42,0.06)] grid grid-cols-1 lg:grid-cols-12 overflow-hidden items-stretch">

              {/* Left Side: Visual Image Box (lg:col-span-6) */}
              <div className="lg:col-span-6 relative min-h-[260px] lg:min-h-full flex flex-col justify-end overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
                {/* Image background inside the left box */}
                <div
                  className="absolute inset-0 bg-no-repeat bg-cover bg-left"
                  style={{ backgroundImage: "url('/enquiry-image.png')" }}
                />
              </div>

              {/* Right Side: Form Content Box (lg:col-span-6) */}
              <div className="lg:col-span-6 p-5 sm:p-8 font-jost flex flex-col justify-center bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40 relative overflow-hidden">
                {/* Soft sky-like background decorative blurs */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />
                <div className="absolute bottom-4 left-4 h-36 w-36 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center animate-[scaleIn_0.35s_ease-out]">
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
                  <div>
                    {/* Top Book Now Flight Badge */}
                    <div className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#0b84d8] font-rubik">
                      <span>✈</span>
                      <span>Book Now</span>
                      <span>✈</span>
                    </div>

                    {/* Form Heading */}
                    <h3 className="text-center mt-1.5 font-rubik text-[24px] sm:text-[28px] font-black text-[#100c08]">
                      Get In Touch With Us
                    </h3>

                    {/* Subheading text */}
                    <p className="text-center mt-1.5 text-[13px] text-slate-500 max-w-[440px] mx-auto leading-relaxed">
                      Fill in the details below and we'll get back to you with the best travel options.
                    </p>

                    {/* Form Fields */}
                    <form onSubmit={handleSubmit} className="mt-6 space-y-3">

                      {/* Name & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Name Input */}
                        <div className="relative group">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your Name *"
                            className="w-full h-[40px] pl-10 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px]"
                          />
                        </div>

                        {/* Phone Number Input */}
                        <div className="relative group">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </span>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="Phone Number *"
                            className="w-full h-[40px] pl-10 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px]"
                          />
                        </div>
                      </div>

                      {/* Email & Date Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Email Address */}
                        <div className="relative group">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Email Address *"
                            className="w-full h-[40px] pl-10 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px]"
                          />
                        </div>

                        {/* Travel Date */}
                        <div className="relative group">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </span>
                          <input
                            type="text"
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => {
                              if (!e.target.value) e.target.type = "text";
                            }}
                            value={formData.travelDate}
                            onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                            placeholder="Travel Date *"
                            className="w-full h-[40px] pl-10 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px]"
                          />
                        </div>
                      </div>

                      {/* Destination Dropdown */}
                      <div className="relative group">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10 pointer-events-none">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <circle cx="12" cy="10" r="2" />
                          </svg>
                        </span>
                        <select
                          value={formData.destination}
                          onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                          className="w-full h-[40px] pl-10 pr-10 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px] appearance-none cursor-pointer"
                        >
                          <option value="">Destination</option>
                          {destinationsList.map((dest) => (
                            <option key={dest} value={dest}>
                              {dest}
                            </option>
                          ))}
                        </select>
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      </div>

                      {/* Travelers & Tour Type Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* No. of Travelers */}
                        <div className="relative group">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10 pointer-events-none">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </span>
                          <select
                            value={formData.travelers}
                            onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                            className="w-full h-[40px] pl-10 pr-10 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px] appearance-none cursor-pointer"
                          >
                            <option value="">No. of Travelers</option>
                            <option value="1">1 Traveler</option>
                            <option value="2">2 Travelers</option>
                            <option value="3-5">3 - 5 Travelers</option>
                            <option value="6+">6+ Travelers</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>

                        {/* Tour Type */}
                        <div className="relative group">
                          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10 pointer-events-none">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </span>
                          <select
                            value={formData.tourType}
                            onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                            className="w-full h-[40px] pl-10 pr-10 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px] appearance-none cursor-pointer"
                          >
                            <option value="">Tour Type</option>
                            <option value="Domestic">Domestic Tour</option>
                            <option value="International">International Tour</option>
                            <option value="Islands">Islands Tour</option>
                            <option value="Pilgrimage">Pilgrimage Yatra</option>
                            <option value="Honeymoon">Honeymoon Tour</option>
                            <option value="Family">Family Tour</option>
                          </select>
                          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* Requirements Textarea */}
                      <div className="relative group">
                        <span className="absolute left-3.5 top-3 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </span>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Additional Requirements / Message"
                          rows={2}
                          className="w-full pl-10 pr-3 py-2 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13.5px] resize-none text-[13.5px]"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full h-[42px] rounded-lg bg-[#0b84d8] hover:bg-[#0975c0] text-white font-bold text-[14px] flex items-center justify-center gap-2.5 transition duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-[#0b84d8]/15 cursor-pointer font-rubik"
                      >
                        <span>SUBMIT ENQUIRY</span>
                        <svg className="h-4 w-4 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </button>
                    </form>

                    {/* Footer features row */}
                    <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[#100c08] font-rubik">
                      {/* Feature 1 */}
                      <div className="flex flex-col items-center">
                        <svg className="h-4.5 w-4.5 text-[#0b84d8] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-[10.5px] font-bold leading-tight">Best Price Guarantee</span>
                      </div>

                      {/* Feature 2 */}
                      <div className="flex flex-col items-center">
                        <svg className="h-4.5 w-4.5 text-[#0b84d8] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <span className="text-[10.5px] font-bold leading-tight">24/7 Customer Support</span>
                      </div>

                      {/* Feature 3 */}
                      <div className="flex flex-col items-center">
                        <svg className="h-4.5 w-4.5 text-[#0b84d8] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        <span className="text-[10.5px] font-bold leading-tight">Customized Itineraries</span>
                      </div>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= GOOGLE MAP EMBED (Only on full page) ================= */}
      {variant === 'full' && (
        <section className="relative w-full">
          <ScrollReveal variant="fade-in-up" delay={200} duration={1300}>
            {/* Map header bar */}
            <div className="flex items-center justify-center md:justify-start gap-3 bg-white px-6 py-4 border-b border-t border-slate-100/50">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0b84d8]/10 text-[#0b84d8] shrink-0">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="text-center md:text-left">
                <p className="font-rubik text-[14px] font-bold text-[#100c08]">Our Office Location</p>
                <p className="font-jost text-[12.5px] text-slate-500">#1-11-110, Shyamlal Building, Begumpet, Hyderabad - 500018</p>
              </div>
            </div>

            {/* Map iframe */}
            <iframe
              title="Open Sky Holidays Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5186641775836!2d78.45524677516599!3d17.43485748346061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90b9b3e944cd%3A0xc665e7178cf2338c!2sShyamlal%20Building!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="h-[300px] w-full sm:h-[400px] lg:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ScrollReveal>
        </section>
      )}
    </>
  );
}
