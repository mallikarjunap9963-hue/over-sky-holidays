import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function PopupContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', destination: '' });
  const [submitted, setSubmitted] = useState(false);

  // Trigger popup on load/refresh after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact) return;
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      // Reset after closing
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', contact: '', destination: '' });
      }, 500);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-[#100c08]/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="relative w-full max-w-[850px] overflow-hidden rounded-[24px] bg-white shadow-2xl flex flex-col md:flex-row pointer-events-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Side: Visual / Offer */}
            <div className="relative w-full md:w-[45%] h-[200px] md:h-auto bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                alt="Tropical Beach"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100c08] via-transparent to-[#100c08]/40" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <span className="inline-block rounded-full bg-[#fbb03b] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-3">
                  Exclusive Deals
                </span>
                <h3 className="font-rubik text-[26px] font-bold leading-tight">Start Your Journey With Us</h3>
                <p className="mt-2 font-jost text-[14px] text-white/80">
                  Get personalized tour packages at the best price.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-full md:w-[55%] p-8 sm:p-10 bg-white">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center animate-[scaleIn_0.3s_ease-out]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-500 mb-4">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-rubik text-[22px] font-bold text-slate-900">Request Sent!</h4>
                  <p className="mt-2 font-jost text-[14px] text-slate-500">
                    Thanks {formData.name}! We will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h4 className="font-rubik text-[22px] font-bold text-slate-900">Get a Free Quote</h4>
                    <p className="font-jost text-[14px] text-slate-500 mt-1">Fill out the form below and we'll be in touch.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 font-jost">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name *"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/10"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        placeholder="Phone Number / Email *"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/10"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="Destination (e.g. Dubai, Kerala)"
                        className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-[14px] text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/10"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#0b84d8] font-rubik text-[15px] font-medium text-white transition-all hover:bg-[#0a73be] hover:shadow-[0_8px_25px_rgba(11,132,216,0.25)] active:scale-[0.98]"
                    >
                      Send Request
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
