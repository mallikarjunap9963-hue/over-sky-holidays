import { Link } from 'react-router-dom';
import { socialLinks } from '../../data';
import { PhoneIcon, LocationIcon } from '../icons/Icons';
import logo from '../../assets/logo-removebg-preview.png';

export function Footer() {

  return (
    <>
      <footer
        id="contact"
        className="relative overflow-hidden bg-[#071f36] text-white font-jost"
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
                to="/#home"
                className="inline-flex rounded-[12px] bg-white px-4 py-3"
              >
                <img
                  src={logo}
                  alt="Open Sky Holidays"
                  className="h-[66px] w-auto object-contain"
                />
              </Link>

              <p className="mt-6 max-w-[360px] text-[14px] leading-7 text-white/80">
                Established since 2013, Open Sky Holidays provides complete
                domestic and international travel solutions, including tours,
                flights, hotels, passport support and visa assistance.
              </p>

              <p className="mt-5 font-satisfy text-[22px] font-normal text-[#fbb03b] capitalize">
                The World Is Waiting
              </p>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href || "#social"}
                    target={social.href && social.href !== "#social" ? "_blank" : undefined}
                    rel={social.href && social.href !== "#social" ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#0b84d8]"
                  >
                    {social.icon}
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
                  ["Home", "/#home"],
                  ["About Us", "/about"],
                  ["Domestic Tours", "/#domestic-tours"],
                  ["International Tours", "/#international-tours"],
                  ["Services", "/#services"],
                  ["Blogs", "/blogs"],
                  ["Contact Us", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="group flex items-center gap-3 text-[14px] text-white/80 transition hover:translate-x-1 hover:text-[#fbb03b]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#fbb03b] transition group-hover:bg-[#fbb03b]" />
                      {label}
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
                {[
                  "Goa",
                  "Kullu - Manali & Shimla",
                  "Kerala",
                  "Dubai",
                  "Maldives",
                  "Singapore & Malaysia",
                ].map((tour) => (
                  <li key={tour}>
                    <Link
                      to="/#tours"
                      className="group flex items-center gap-3 text-[14px] text-white/80 transition hover:translate-x-1 hover:text-[#fbb03b]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#fbb03b] transition group-hover:bg-[#fbb03b]" />
                      {tour}
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
                  href="tel:+919908117712"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-[#0b84d8]">
                    <PhoneIcon className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-[12px] text-white/60">
                      More Inquiry
                    </span>

                    <span className="mt-1 block text-[15px] font-semibold text-white font-rubik">
                      +91 99081 17712
                    </span>
                  </span>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:info@openskyholidays.in"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-[#0b84d8]">
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
                      info@openskyholidays.in
                    </span>
                  </span>
                </a>

                {/* ADDRESS */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Shyamlal+Building+Begumpet+Hyderabad+500018"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-[#0b84d8]">
                    <LocationIcon className="h-5 w-5" />
                  </span>

                  <span>
                    <span className="block text-[12px] text-white/60">
                      Office Address
                    </span>

                    <span className="mt-1 block text-[14px] leading-6 text-white font-rubik">
                      #1-11-110, Shyamlal Building, Begumpet, Hyderabad - 500
                      018
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
              © {new Date().getFullYear()} Open Sky Holidays. All Rights
              Reserved.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-[13px] text-white/85 transition hover:text-[#fbb03b]"
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="text-[13px] text-white/85 transition hover:text-[#fbb03b]"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= FOOTER END ================= */}
    </>
  );
}
