import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { enquiriesApi } from '../../api/enquiriesApi';
import { Loader2, AlertCircle, User, Mail, Phone, MapPin, X, CheckCircle2 } from 'lucide-react';

export function PopupContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: ''
  });

  // Automatically trigger popup on page load/refresh after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Listen for custom trigger event so buttons across the site can trigger it
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-enquiry-popup', handleOpen);
    return () => window.removeEventListener('open-enquiry-popup', handleOpen);
  }, []);

  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in your name, phone number, and email.');
      return;
    }

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formattedDate = tomorrow.toISOString().split('T')[0];

    setLoading(true);
    try {
      const res = await enquiriesApi.submitEnquiry({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        travel_date: formattedDate,
        destination: formData.description.trim() || 'General Holiday Enquiry',
        travelers: 2,
        tour_type: 'Domestic Tour',
        message: formData.description.trim() || undefined,
      });

      if (res.success || res.status) {
        setSubmitted(true);
        setTimeout(() => {
          setIsOpen(false);
          setTimeout(() => {
            setSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              description: ''
            });
          }, 400);
        }, 3200);
      } else {
        if (res.errors) {
          const firstErr = Object.values(res.errors)[0]?.[0];
          setError(firstErr || res.message || 'Failed to submit enquiry.');
        } else {
          setError(res.message || 'Failed to submit enquiry.');
        }
      }
    } catch (err: any) {
      console.error('Popup enquiry error:', err);
      setError('Unable to send enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#100c08]/70 backdrop-blur-[5px] cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 24 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-[420px] lg:max-w-[880px] max-h-[92dvh] overflow-y-auto overflow-x-hidden rounded-2xl sm:rounded-[28px] bg-white shadow-2xl flex flex-col lg:flex-row pointer-events-auto items-stretch border border-white/20"
          >
            {/* Close Modal Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-md transition-all hover:bg-black/70 hover:scale-105 cursor-pointer shadow-md lg:bg-slate-100 lg:text-slate-600 lg:hover:bg-red-50 lg:hover:text-red-500"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>

            {/* ================= MOBILE TOP BANNER ================= */}
            {/* 100% FULL UNCONSTRAINED IMAGE: ZERO CROPPING, NO GRADIENT OVERLAY */}
            <div className="relative w-full aspect-[16/9] overflow-hidden lg:hidden bg-[#0e74b3] shrink-0">
              <img
                src="/form-mobile-banner.jpg"
                alt="Open Sky Holidays - The World Is Waiting"
                className="h-full w-full object-cover block"
              />
            </div>

            {/* ================= DESKTOP LEFT SIDE ================= */}
            <div className="relative hidden lg:block lg:w-[42%] min-h-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src="/enquiry-image.png"
                alt="Open Sky Holidays"
                className="h-full w-full object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10 pointer-events-none" />
            </div>

            {/* ================= RIGHT / MAIN FORM BOX ================= */}
            <div className="w-full lg:w-[58%] p-4 sm:p-6 lg:p-7 font-jost flex flex-col justify-center bg-gradient-to-br from-sky-50/50 via-white to-blue-50/30 relative">
              {/* Soft decorative background blurs */}
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-sky-200/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-2 left-2 h-28 w-28 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 sm:py-14 text-center animate-[scaleIn_0.35s_ease-out]">
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25d366]/15 border border-[#25d366]/30 text-[#25d366] mb-3">
                    <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-rubik text-[20px] sm:text-[22px] font-bold text-slate-900">
                    Enquiry Received!
                  </h3>
                  <p className="mt-1.5 text-slate-600 max-w-[280px] text-[13px] sm:text-[14px] leading-relaxed">
                    Thank you, <span className="text-[#0853a4] font-bold">{formData.name}</span>! Our travel expert will call you shortly with custom plans.
                  </p>
                </div>
              ) : (
                <div className="relative z-10">
                  {/* Top Badge */}
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0853a4]/10 border border-[#0853a4]/15 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0853a4] font-rubik">
                      <span>✈</span>
                      <span>Instant Travel Enquiry</span>
                    </span>

                    {/* Heading */}
                    <h3 className="mt-1.5 font-rubik text-[19px] sm:text-[23px] lg:text-[24px] font-black leading-tight text-[#100c08]">
                      Get In Touch With Us
                    </h3>

                    {/* Subheading */}
                    <p className="mt-0.5 text-[12px] sm:text-[12.5px] text-slate-500 leading-snug">
                      Plan your dream holiday with our verified travel specialists.
                    </p>
                  </div>

                  {error && (
                    <div className="mt-2.5 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs text-red-700 font-jost">
                      <AlertCircle size={14} className="shrink-0 text-red-500" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Reduced, Compact Form */}
                  <form onSubmit={handleSubmit} className="mt-3.5 space-y-2.5 sm:space-y-3">
                    {/* Name Field */}
                    <div className="relative group">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors pointer-events-none">
                        <User size={15} />
                      </span>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name *"
                        className="w-full h-[38px] sm:h-[40px] pl-9 pr-3 rounded-lg border border-slate-200/90 bg-white text-[#100c08] placeholder:text-slate-400 outline-none focus:border-[#0853a4] focus:ring-2 focus:ring-[#0853a4]/10 transition-all text-[13px] sm:text-[13.5px] shadow-2xs"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="relative group">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors pointer-events-none">
                        <Phone size={15} />
                      </span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone Number / WhatsApp *"
                        className="w-full h-[38px] sm:h-[40px] pl-9 pr-3 rounded-lg border border-slate-200/90 bg-white text-[#100c08] placeholder:text-slate-400 outline-none focus:border-[#0853a4] focus:ring-2 focus:ring-[#0853a4]/10 transition-all text-[13px] sm:text-[13.5px] shadow-2xs"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors pointer-events-none">
                        <Mail size={15} />
                      </span>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email Address *"
                        className="w-full h-[38px] sm:h-[40px] pl-9 pr-3 rounded-lg border border-slate-200/90 bg-white text-[#100c08] placeholder:text-slate-400 outline-none focus:border-[#0853a4] focus:ring-2 focus:ring-[#0853a4]/10 transition-all text-[13px] sm:text-[13.5px] shadow-2xs"
                      />
                    </div>

                    {/* Destination / Requirements (Compact 1-Line instead of 3-line textarea) */}
                    <div className="relative group">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors pointer-events-none">
                        <MapPin size={15} />
                      </span>
                      <input
                        type="text"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Destination or Notes (Optional)"
                        className="w-full h-[38px] sm:h-[40px] pl-9 pr-3 rounded-lg border border-slate-200/90 bg-white text-[#100c08] placeholder:text-slate-400 outline-none focus:border-[#0853a4] focus:ring-2 focus:ring-[#0853a4]/10 transition-all text-[13px] sm:text-[13.5px] shadow-2xs"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full min-h-[40px] sm:min-h-[44px] mt-1 rounded-lg text-[13px] sm:text-[14px] font-bold shadow-[0_8px_20px_rgba(8,83,164,0.22)] font-rubik cursor-pointer gap-2 disabled:opacity-60 flex items-center justify-center tracking-wide"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>SUBMITTING...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT ENQUIRY</span>
                          <svg className="h-4 w-4 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Compact Sleek Trust Row */}
                  <div className="mt-3.5 pt-2.5 border-t border-slate-200/70 flex items-center justify-around text-center text-[#100c08] font-rubik text-[10px] sm:text-[11px]">
                    <div className="flex items-center gap-1 text-slate-700">
                      <span className="text-[#0853a4] font-bold">✓</span>
                      <span>Best Price</span>
                    </div>
                    <div className="h-3 w-px bg-slate-200" />
                    <div className="flex items-center gap-1 text-slate-700">
                      <span className="text-[#0853a4] font-bold">✓</span>
                      <span>24/7 Support</span>
                    </div>
                    <div className="h-3 w-px bg-slate-200" />
                    <div className="flex items-center gap-1 text-slate-700">
                      <span className="text-[#0853a4] font-bold">✓</span>
                      <span>Custom Plans</span>
                    </div>
                  </div>

                </div>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
