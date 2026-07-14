import { useState } from 'react';

export function BookNowForm() {
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
    <div className="w-full p-5 sm:p-7 font-jost flex flex-col justify-center bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40 relative overflow-hidden">
      {/* Soft sky-like background decorative blurs */}
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 left-4 h-36 w-36 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-20 text-center animate-[scaleIn_0.35s_ease-out] relative z-10">
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
        <div className="relative z-10">
          {/* Top Book Now Flight Badge */}
          <div className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#0b84d8] font-rubik">
            <span>✈</span>
            <span>Book Now</span>
            <span>✈</span>
          </div>

          {/* Form Heading */}
          <h3 className="text-center mt-1 font-rubik text-[22px] sm:text-[26px] font-black text-[#100c08]">
            Get In Touch With Us
          </h3>

          {/* Subheading text */}
          <p className="text-center mt-1 text-[12.5px] text-slate-500 max-w-[400px] mx-auto leading-relaxed">
            Fill in the details below and we'll get back to you with the travel options.
          </p>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-2.5">
            
            {/* Name & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Name Input */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
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
                  className="w-full h-[38px] pl-9.5 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px]"
                />
              </div>

              {/* Phone Number Input */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
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
                  className="w-full h-[38px] pl-9.5 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px]"
                />
              </div>
            </div>

            {/* Email & Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Email Address */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
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
                  className="w-full h-[38px] pl-9.5 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px]"
                />
              </div>

              {/* Travel Date */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
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
                  className="w-full h-[38px] pl-9.5 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px]"
                />
              </div>
            </div>

            {/* Destination Dropdown */}
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10 pointer-events-none">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <circle cx="12" cy="10" r="2" />
                </svg>
              </span>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full h-[38px] pl-9.5 pr-10 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px] appearance-none cursor-pointer"
              >
                <option value="">Destination</option>
                {destinationsList.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>

            {/* Travelers & Tour Type Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* No. of Travelers */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10 pointer-events-none">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className="w-full h-[38px] pl-9.5 pr-10 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px] appearance-none cursor-pointer"
                >
                  <option value="">No. of Travelers</option>
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3-5">3 - 5 Travelers</option>
                  <option value="6+">6+ Travelers</option>
                </select>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>

              {/* Tour Type */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10 pointer-events-none">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <select
                  value={formData.tourType}
                  onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                  className="w-full h-[38px] pl-9.5 pr-10 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px] appearance-none cursor-pointer"
                >
                  <option value="">Tour Type</option>
                  <option value="Domestic">Domestic Tour</option>
                  <option value="International">International Tour</option>
                  <option value="Islands">Islands Tour</option>
                  <option value="Pilgrimage">Pilgrimage Yatra</option>
                  <option value="Honeymoon">Honeymoon Tour</option>
                  <option value="Family">Family Tour</option>
                </select>
                <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Requirements Textarea */}
            <div className="relative group">
              <span className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-[#0b84d8] transition-colors z-10">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Additional Requirements / Message"
                rows={1.5}
                className="w-full pl-9.5 pr-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0b84d8] focus:bg-white focus:ring-4 focus:ring-[#0b84d8]/5 transition-all text-[13px] resize-none text-[13px]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[38px] rounded-lg bg-[#0b84d8] hover:bg-[#0975c0] text-white font-bold text-[13.5px] flex items-center justify-center gap-2 transition duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-[#0b84d8]/15 cursor-pointer font-rubik"
            >
              <span>SUBMIT ENQUIRY</span>
              <svg className="h-3.5 w-3.5 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>

          {/* Footer features row */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[#100c08] font-rubik">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <svg className="h-4 w-4 text-[#0b84d8] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[10px] font-bold leading-tight">Best Price Guarantee</span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <svg className="h-4 w-4 text-[#0b84d8] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-[10px] font-bold leading-tight">24/7 Customer Support</span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <svg className="h-4 w-4 text-[#0b84d8] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <span className="text-[10px] font-bold leading-tight">Customized Itineraries</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}