import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MenuIcon, CloseIcon, ChevronDownIcon } from '../icons/Icons';
import logo from '../../assets/logo-removebg-preview.png';

const menuItems = [
  { label: "HOME", href: "/#home" },
  { label: "ABOUT", href: "/about" },
  {
    label: "TOURS",
    href: "#",
    dropdownItems: [
      { label: "Domestic Tours", href: "/#domestic-tours" },
      { label: "International Tours", href: "/#international-tours" }
    ]
  },
  {
    label: "SERVICES",
    href: "#",
    dropdownItems: [
      { label: "Visa", href: "/services/visa" },
      { label: "Flight Tickets", href: "/services/flight-tickets" },
      { label: "Passport", href: "/services/passport" }
    ]
  },
  { label: "BLOGS", href: "/blogs" },
  { label: "CONTACT", href: "/contact" }
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* MAIN NAVIGATION */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-350 ease-out ${scrolled ? 'shadow-[0_8px_30px_rgba(7,31,67,0.08)] bg-white/95 backdrop-blur-md' : 'shadow-none'
          }`}
      >
        <div
          className="mx-auto flex max-w-[1540px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 xl:px-10 transition-all duration-350 ease-out min-h-[70px] md:min-h-[80px]"
        >
          {/* Logo link */}
          <Link to="/#home" className="shrink-0 flex items-center">
            <img
              src={logo}
              alt="Open Sky Holidays"
              className="w-auto object-contain transition-all duration-350 ease-out h-[70px] md:h-[80px]"
            />
          </Link>

          {/* Desktop Navigation Link Menu (Visible >= 1280px / xl) */}
          <nav className="hidden items-center gap-5 xl:flex xl:gap-7 2xl:gap-10 font-jost">
            {menuItems.map((item, index) => {
              if (item.dropdownItems) {
                return (
                  <div key={item.label} className="relative group flex items-center h-full py-4">
                    <button
                      type="button"
                      className="flex items-center gap-1.5 whitespace-nowrap text-[13px] xl:text-[14.5px] font-semibold tracking-[0.02em] text-[#100c08] hover:text-[#0b84d8] transition-colors duration-250 cursor-pointer focus:outline-none"
                    >
                      {item.label}
                      <ChevronDownIcon className="h-4 w-4 transition-transform duration-250 group-hover:rotate-180 text-slate-500 group-hover:text-[#0b84d8]" />
                    </button>

                    {/* Dropdown menu panel */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none group-hover:pointer-events-auto">
                      <div className="bg-white border border-slate-100 rounded-lg shadow-[0_12px_30px_rgba(7,31,67,0.1)] p-2 flex flex-col gap-0.5">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="block rounded-md px-4 py-2.5 text-[13.5px] font-semibold text-[#100c08] hover:bg-[#0b84d8]/10 hover:text-[#0b84d8] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap text-[13px] xl:text-[14.5px] font-semibold tracking-[0.02em] transition-colors duration-250 2xl:text-[15.5px] ${index === 0
                    ? "text-[#0b84d8]"
                    : "text-[#100c08] hover:text-[#0b84d8]"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Call / Book CTA (Visible >= 1280px / xl) */}
          <div className="hidden items-center gap-4 xl:flex xl:gap-6">
            <a href="tel:+919908117712" className="flex items-center gap-3">
              <span className="text-[#0b84d8]">
                <PhoneIcon className="h-8 w-8 xl:h-9 xl:w-9" />
              </span>

              <span>
                <span className="block text-[12px] font-semibold text-[#100c08] font-rubik">
                  To More Inquiry
                </span>

                <span className="block text-[16px] xl:text-[18px] font-extrabold leading-tight text-[#0b84d8] 2xl:text-[20px] font-rubik">
                  +91 99081 17712
                </span>
              </span>
            </a>

            <div className="h-8 w-px bg-slate-200" />

            <Link
              to="/contact"
              className="btn-primary min-h-[42px] xl:min-h-[50px] rounded-[6px] px-5 xl:px-6 text-[13px] xl:text-[14px] font-bold shadow-[0_12px_24px_rgba(11,132,216,0.18)] font-rubik"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile & Tablet CTA Buttons + Hamburger Button (Visible < 1280px / xl) */}
          <div className="flex items-center gap-3 xl:hidden">
            {/* Quick Call Icon Button (Always visible on mobile/tablet for instant support) */}
            <a
              href="tel:+919908117712"
              className="flex items-center justify-center h-10 w-10 rounded-full bg-[#0b84d8]/10 hover:bg-[#0b84d8]/20 text-[#0b84d8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0b84d8]/30"
              aria-label="Call Inquiry"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>

            {/* Quick Book Now Button (Visible starting from sm / 640px width) */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex btn-primary min-h-[38px] rounded-[6px] px-4 text-[12.5px] font-bold shadow-[0_8px_16px_rgba(11,132,216,0.12)] font-rubik items-center justify-center transition-all"
            >
              Book Now
            </Link>

            {/* Hamburger / Menu toggle button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="text-[#100c08] p-2 hover:text-[#0b84d8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0b84d8]/30 rounded-lg"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION BACKDROP OVERLAY (Visible < 1280px / xl) */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE NAVIGATION SIDE DRAWER PANEL (Visible < 1280px / xl) */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[310px] sm:w-[360px] max-w-full bg-white shadow-2xl transition-transform duration-350 ease-out xl:hidden flex flex-col ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link to="/#home" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
            <img
              src={logo}
              alt="Open Sky Holidays"
              className="h-[52px] sm:h-[54px] w-auto object-contain"
            />
          </Link>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              setOpenDropdown(null);
            }}
            className="p-1.5 text-slate-500 hover:text-[#0b84d8] hover:bg-slate-50 rounded-full transition-colors focus:outline-none"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <nav className="flex flex-col gap-1 font-jost">
            {menuItems.map((item) => {
              if (item.dropdownItems) {
                const isOpen = openDropdown === item.label;
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className="flex items-center justify-between w-full rounded-lg px-4 py-3 text-[15px] font-semibold text-[#100c08] hover:bg-slate-50 hover:text-[#0b84d8] transition-all cursor-pointer focus:outline-none"
                    >
                      <span>{item.label}</span>
                      <ChevronDownIcon
                        className={`h-4 w-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#0b84d8]' : ''
                          }`}
                      />
                    </button>

                    {/* Dropdown collapsible panel */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out pl-4 ${isOpen ? 'max-h-40 opacity-100 py-1' : 'max-h-0 opacity-0 pointer-events-none'
                        }`}
                    >
                      <div className="flex flex-col gap-0.5 border-l border-slate-100 ml-4 pl-3">
                        {item.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            onClick={() => {
                              setOpenDropdown(null);
                              setMobileMenuOpen(false);
                            }}
                            className="block rounded-lg px-3 py-2 text-[14px] font-semibold text-[#100c08]/80 hover:bg-slate-50 hover:text-[#0b84d8] transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-[15px] font-semibold text-[#100c08] transition-all hover:bg-slate-50 hover:text-[#0b84d8] group"
                >
                  <span>{item.label}</span>
                  <span className="opacity-0 -translate-x-2 text-[#0b84d8] transition-all group-hover:opacity-100 group-hover:translate-x-0">
                    ➔
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer / CTA */}
        <div className="border-t border-slate-100 bg-slate-50/50 p-5 mt-auto">
          <div className="flex flex-col gap-4 font-rubik">
            <a
              href="tel:+919908117712"
              className="flex items-center gap-3.5 rounded-lg border border-slate-200 bg-white px-4 py-3 hover:border-[#0b84d8] hover:text-[#0b84d8] transition-all group"
            >
              <span className="text-[#0b84d8] bg-slate-100 rounded-full p-2 group-hover:bg-[#0b84d8]/10 transition-colors">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <span className="block text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  To More Inquiry
                </span>
                <span className="block text-[15px] font-bold text-[#100c08] group-hover:text-[#0b84d8]">
                  +91 99081 17712
                </span>
              </div>
            </a>

            <Link
              to="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
                setOpenDropdown(null);
              }}
              className="btn-primary flex items-center justify-center w-full min-h-[48px] rounded-lg text-sm font-bold shadow-[0_12px_24px_rgba(11,132,216,0.15)] text-center cursor-pointer"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
