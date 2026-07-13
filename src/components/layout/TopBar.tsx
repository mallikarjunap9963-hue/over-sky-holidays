import { socialLinks } from '../../data';
import { MailIcon } from '../icons/Icons';


export function TopBar() {

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <section className="bg-[#100c08] text-white">
        <div className="mx-auto flex min-h-[58px] max-w-[1540px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <a
            href="mailto:info@openskyholidays.in"
            className="hidden items-center gap-3 lg:flex"
          >
            <span className="text-[#0b84d8]">
              <MailIcon />
            </span>

            <span>
              <span className="block text-[13px] font-semibold leading-none text-slate-300">
                Email:
              </span>

              <span className="mt-1 block text-[15px] font-bold text-[#0b84d8]">
                info@openskyholidays.in
              </span>
            </span>
          </a>

          <p className="flex-1 text-center text-[12px] font-medium sm:text-[15px] text-slate-200">
            The World Is Waiting. One Stop Destination For All Your Tours &
            Travels Needs.{" "}
            <a
              href="#tours"
              className="font-semibold text-[#fbb03b] underline underline-offset-4 hover:text-[#0b84d8] transition-colors"
            >
              Book Your Tour
            </a>
          </p>

          <div className="hidden items-center gap-3 border-l border-white/15 pl-10 lg:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#social"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/60 text-white transition hover:border-[#0b84d8] hover:bg-[#0b84d8] hover:text-white"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN NAVIGATION */}
    </>
  );
}

