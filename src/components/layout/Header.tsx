import { useState, useEffect } from 'react';
import { navLinks } from '../../data';
import { PhoneIcon, MenuIcon, CloseIcon } from '../icons/Icons';
import logo from '../../assets/logo-removebg-preview.png';


export function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* MAIN NAVIGATION */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_4px_24px_rgba(7,31,67,0.10)]' : 'shadow-none'
        }`}
      >
        <div className="mx-auto flex min-h-[108px] max-w-[1540px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <a href="#home" className="shrink-0">
            <img
              src={logo}
              alt="Open Sky Holidays"
              className="h-[65px] w-auto object-contain sm:h-[72px] lg:h-[82px]"
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex xl:gap-8 2xl:gap-10 font-jost">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-1 whitespace-nowrap text-[14px] font-semibold tracking-[0.02em] transition 2xl:text-[15px] ${
                  index === 0
                    ? "text-[#0b84d8]"
                    : "text-[#100c08] hover:text-[#0b84d8]"
                }`}
              >
                {link.label}

                {link.dropdown && <span className="text-base">+</span>}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 xl:flex">
            <a href="tel:+919908117712" className="flex items-center gap-3">
              <span className="text-[#0b84d8]">
                <PhoneIcon className="h-9 w-9" />
              </span>

              <span>
                <span className="block text-[13px] font-semibold text-[#100c08] font-rubik">
                  To More Inquiry
                </span>

                <span className="block text-[18px] font-extrabold leading-tight text-[#0b84d8] 2xl:text-[20px] font-rubik">
                  +91 99081 17712
                </span>
              </span>
            </a>

            <div className="h-10 w-px bg-slate-200" />

            <a
              href="#contact"
              className="btn-primary min-h-[50px] rounded-[6px] px-6 text-[14px] font-bold shadow-[0_12px_24px_rgba(11,132,216,0.2)] font-rubik"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="text-[#100c08] xl:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`absolute left-0 top-full w-full border-t border-slate-100 bg-white shadow-xl transition-all duration-300 xl:hidden ${
            mobileMenuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-3 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-[1540px] flex-col px-5 py-5 sm:px-8 font-rubik">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-slate-100 py-3.5 text-sm font-semibold text-[#100c08] transition hover:pl-2 hover:text-[#0b84d8]"
              >
                {link.label} {link.dropdown ? "+" : ""}
              </a>
            ))}

            <a
              href="tel:+919908117712"
              className="mt-5 flex items-center justify-center gap-3 rounded-lg bg-[#0b84d8] hover:bg-[#086caf] px-5 py-3.5 font-bold text-white transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              +91 99081 17712
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
    </>
  );
}
