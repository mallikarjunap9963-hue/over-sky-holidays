import { useState } from 'react';
import {
  Plane,
  Sparkles,
  User,
  Phone,
  Mail,
  MapPin,
  Users,
  Compass,
  CheckCircle2
} from 'lucide-react';
import { CustomSelect } from './ui/CustomSelect';
import { CustomDatePicker } from './ui/CustomDatePicker';

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
    <div className="w-full p-5 sm:p-7 font-jost flex flex-col justify-center bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40 relative">
      {/* Soft sky-like background decorative blurs */}
      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 left-4 h-36 w-36 rounded-full bg-blue-200/20 blur-3xl pointer-events-none" />

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-20 text-center animate-[scaleIn_0.35s_ease-out] relative z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366]/10 border border-[#25d366]/30 text-[#25d366] mb-4">
            <CheckCircle2 className="h-8 w-8 text-[#25d366]" />
          </div>
          <h3 className="font-rubik text-[22px] font-bold text-slate-900">Inquiry Received!</h3>
          <p className="mt-2 text-slate-500 max-w-[320px] text-[14px]">
            Thank you, <span className="text-[#0853a4] font-bold">{formData.name}</span>! Our travel expert will contact you shortly.
          </p>
        </div>
      ) : (
        <div className="relative z-10">
          {/* Top Book Now Flight Badge */}
          <div className="flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#0853a4] font-rubik">
            <Plane className="h-3.5 w-3.5 text-[#0853a4] transform -rotate-45" />
            <span>Book Now</span>
            <Sparkles className="h-3.5 w-3.5 text-[#ffb400]" />
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
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors z-10 pointer-events-none">
                  <User className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name *"
                  className="w-full h-[38px] pl-9.5 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0853a4] focus:bg-white focus:ring-4 focus:ring-[#0853a4]/5 transition-all text-[13px]"
                />
              </div>

              {/* Phone Number Input */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors z-10 pointer-events-none">
                  <Phone className="h-4 w-4" />
                </span>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Phone Number *"
                  className="w-full h-[38px] pl-9.5 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0853a4] focus:bg-white focus:ring-4 focus:ring-[#0853a4]/5 transition-all text-[13px]"
                />
              </div>
            </div>

            {/* Email & Date Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Email Address */}
              <div className="relative group">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors z-10 pointer-events-none">
                  <Mail className="h-4 w-4" />
                </span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email Address *"
                  className="w-full h-[38px] pl-9.5 pr-3 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0853a4] focus:bg-white focus:ring-4 focus:ring-[#0853a4]/5 transition-all text-[13px]"
                />
              </div>

              {/* Travel Date */}
              <CustomDatePicker
                value={formData.travelDate}
                onChange={(dateStr) => setFormData({ ...formData, travelDate: dateStr })}
                placeholder="Travel Date *"
                heightClass="h-[38px]"
                direction="down"
              />
            </div>

            {/* Destination Dropdown */}
            <CustomSelect
              value={formData.destination}
              onChange={(val) => setFormData({ ...formData, destination: val })}
              options={destinationsList}
              placeholder="Destination"
              icon={<MapPin className="h-4 w-4" />}
            />

            {/* Travelers & Tour Type Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* No. of Travelers */}
              <CustomSelect
                value={formData.travelers}
                onChange={(val) => setFormData({ ...formData, travelers: val })}
                options={[
                  { label: "1 Traveler", value: "1" },
                  { label: "2 Travelers", value: "2" },
                  { label: "3 - 5 Travelers", value: "3-5" },
                  { label: "6+ Travelers", value: "6+" }
                ]}
                placeholder="No. of Travelers"
                icon={<Users className="h-4 w-4" />}
              />

              {/* Tour Type */}
              <CustomSelect
                value={formData.tourType}
                onChange={(val) => setFormData({ ...formData, tourType: val })}
                options={[
                  "Domestic Tour",
                  "International Tour",
                  "Islands Tour",
                  "Pilgrimage Yatra",
                  "Honeymoon Tour",
                  "Family Tour"
                ]}
                placeholder="Tour Type"
                icon={<Compass className="h-4 w-4" />}
              />
            </div>

            {/* Requirements Textarea */}
            <div className="relative group">
              <span className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-[#0853a4] transition-colors z-10">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </span>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Additional Requirements / Message"
                rows={1.5}
                className="w-full pl-9.5 pr-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50/50 text-[#100c08] placeholder:text-slate-500 outline-none focus:border-[#0853a4] focus:bg-white focus:ring-4 focus:ring-[#0853a4]/5 transition-all text-[13px] resize-none text-[13px]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full min-h-[42px] rounded-[6px] text-[13.5px] font-bold shadow-[0_12px_24px_rgba(8,83,164,0.18)] font-rubik cursor-pointer gap-2"
            >
              <span>SUBMIT ENQUIRY</span>
              <svg className="h-3.5 w-3.5 transform rotate-45 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>

          {/* Footer features row */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-[#100c08] font-rubik">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <svg className="h-4 w-4 text-[#0853a4] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-[10px] font-bold leading-tight">Best Price Guarantee</span>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <svg className="h-4 w-4 text-[#0853a4] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-[10px] font-bold leading-tight">24/7 Customer Support</span>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <svg className="h-4 w-4 text-[#0853a4] mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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