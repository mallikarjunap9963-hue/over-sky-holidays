import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, LocationIcon } from '../icons/Icons';
import logo from '../../assets/logo-removebg-preview.png';
import { contentApi } from '../../api/contentApi';
import { toursApi } from '../../api/toursApi';
import type { ApiContactSection, ApiTopHeader } from '../../api/types';

export function Footer() {
  const [contact, setContact] = useState<ApiContactSection | null>(null);
  const [topHeader, setTopHeader] = useState<ApiTopHeader | null>(null);
  const [popularTours, setPopularTours] = useState<Array<{ label: string; href: string }>>([]);

  useEffect(() => {
    let isMounted = true;
    async function loadFooterData() {
      try {
        const [contactRes, headerRes, toursRes] = await Promise.all([
          contentApi.getContactSectionActive(),
          contentApi.getTopHeaderActive(),
          toursApi.getAllTours(),
        ]);

        if (!isMounted) return;

        if (contactRes.isLive && contactRes.contact) {
          setContact(contactRes.contact);
        }

        if (headerRes.isLive && headerRes.header) {
          setTopHeader(headerRes.header);
        }

        if (toursRes.isLive && toursRes.tours.length > 0) {
          const links = toursRes.tours.slice(0, 6).map((t: any) => {
            const cat = t.category || (t.tour_type_id === 6 ? "international" : "domestic");
            return {
              label: t.title,
              href: `/tour/${cat}/${t.id}`,
            };
          });
          if (links.length > 0) {
            setPopularTours(links);
          }
        }
      } catch (err) {
        console.error("Failed to load footer data:", err);
      }
    }

    loadFooterData();
    return () => {
      isMounted = false;
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phone = contact?.phone || "+91 99081 17712";
  const phoneClean = phone.replace(/[^0-9+]/g, '');
  const email = contact?.email || "info@openskyholidays.com";
  const address = contact?.address || "#1-11-110, Shyamlal Building, Begumpet, Hyderabad - 500 018";
  const mapLink = contact?.map_link || "https://www.google.com/maps/search/?api=1&query=Shyamlal+Building+Begumpet+Hyderabad+500018";

  return (
    <>
      <footer
        id="contact"
        className="relative overflow-hidden bg-[#0853a4] text-white font-jost"
      >
        {/* DECORATIVE BACKGROUND */}
        <div className="absolute -left-32 top-24 h-80 w-80 rounded-full border border-white/5" />
        <div className="absolute -left-20 top-36 h-56 w-56 rounded-full border border-white/5" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

        {/* MAIN FOOTER */}
        <div className="relative mx-auto max-w-[1320px] px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pt-20">
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-[1.25fr_0.75fr_0.9fr_1.1fr]">
            {/* COMPANY DETAILS */}
            <div>
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-flex rounded-[12px] bg-white px-4 py-3 cursor-pointer"
              >
                <img
                  src={logo}
                  alt="Open Sky Holidays"
                  className="h-[66px] w-auto object-contain"
                />
              </Link>

              <p className="mt-6 max-w-[360px] text-[14px] leading-7 text-white/80">
                Established since 2020, Open Sky Holidays provides complete
                domestic and international travel solutions, including tours,
                flights, hotels, passport support and visa assistance.
              </p>

              <p className="mt-5 font-satisfy text-[22px] font-normal text-[#fbb03b] capitalize">
                The World Is Waiting
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-3">
                {(topHeader?.social_links && topHeader.social_links.length > 0
                  ? topHeader.social_links
                  : [
                      { platform: "Instagram", url: "https://www.instagram.com/openskyholidays/", icon: "fa-brands fa-instagram" },
                      { platform: "Facebook", url: "https://www.facebook.com/openskyholidays", icon: "fa-brands fa-facebook-f" },
                    ]
                ).map((social, idx) => (
                  <a
                    key={social.platform || idx}
                    href={social.url || (social as any).link || "#social"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform || "Social"}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#0853a4]"
                  >
                    <i className={social.icon || (social.platform?.toLowerCase().includes("instagram") ? "fa-brands fa-instagram" : "fa-brands fa-facebook-f")} />
                  </a>
                ))}
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="font-rubik text-[20px] font-bold text-white">Quick Links</h3>

              <span className="mt-3 block h-[3px] w-12 rounded-full bg-[#fbb03b]" />

              <ul className="mt-6 space-y-3.5">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Domestic Tours", href: "/tours/domestic" },
                  { label: "International Tours", href: "/tours/international" },
                  { label: "Services", href: "/services" },
                  { label: "Blogs", href: "/blogs" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={scrollToTop}
                      className="group flex items-center gap-3 text-[14px] text-white/80 transition hover:translate-x-1 hover:text-[#fbb03b]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#fbb03b] transition group-hover:bg-[#fbb03b]" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* POPULAR TOURS */}
            <div>
              <h3 className="font-rubik text-[20px] font-bold text-white">
                Popular Tours
              </h3>

              <span className="mt-3 block h-[3px] w-12 rounded-full bg-[#fbb03b]" />

              <ul className="mt-6 space-y-3.5">
                {popularTours.map((tour) => (
                  <li key={tour.label}>
                    <Link
                      to={tour.href}
                      onClick={scrollToTop}
                      className="group flex items-center gap-3 text-[14px] text-white/80 transition hover:translate-x-1 hover:text-[#fbb03b]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#fbb03b] transition group-hover:bg-[#fbb03b]" />
                      {tour.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT DETAILS */}
            <div>
              <h3 className="font-rubik text-[20px] font-bold text-white">Get In Touch</h3>

              <span className="mt-3 block h-[3px] w-12 rounded-full bg-[#fbb03b]" />

              <div className="mt-6 space-y-5">
                {/* PHONE */}
                <a
                  href={`tel:${phoneClean}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-[#0853a4]">
                    <PhoneIcon className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-[12px] text-white/60">
                      More Inquiry
                    </span>

                    <span className="mt-1 block text-[15px] font-semibold text-white font-rubik">
                      {phone}
                    </span>
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href={`mailto:${email}`}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-[#0853a4]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>

                  <span>
                    <span className="block text-[12px] text-white/60">
                      Send Mail
                    </span>

                    <span className="mt-1 block break-all text-[15px] font-semibold text-white font-rubik">
                      {email}
                    </span>
                  </span>
                </a>

                {/* ADDRESS */}
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-[#0853a4]">
                    <LocationIcon className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-[12px] text-white/60">
                      Office Address
                    </span>

                    <span className="mt-1 block text-[14px] leading-6 text-white font-rubik">
                      {address}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="relative border-t border-white/10 bg-black/20">
          <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:px-8 md:flex-row md:text-left">
            <p className="text-[13px] text-white/85">
              © {new Date().getFullYear()} Open Sky Holidays. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="text-[13px] text-white/85 transition hover:text-[#fbb03b]"
              >
                Privacy Policy
              </Link>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="text-[13px] text-white/85 transition hover:text-[#fbb03b]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
