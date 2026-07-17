import { Link } from "react-router-dom";
import { socialLinks } from "../../data";
import { MailIcon } from "../icons/Icons";

export function TopBar() {
  return (
    <>
      {/* TOP INFORMATION BAR */}
      <section className="hidden sm:block bg-[#100c08] text-white">
        <div className="mx-auto flex min-h-[35px] max-w-[1540px] flex-col items-center justify-center gap-2 px-4 py-2 sm:flex-row sm:justify-between sm:gap-4 sm:px-8 sm:py-0 lg:px-10">

          {/* Email */}
          <a
            href="mailto:info@openskyholidays.com"
            className="hidden items-center gap-1.5 text-[12px] transition-colors hover:text-[#0853a4] lg:flex"
          >
            <span className="flex h-6 w-5 items-center justify-center text-[#0853a4] scale-75">
              <MailIcon />
            </span>

            <span className="font-medium text-slate-300">
              Email:
              <span className="ml-1 font-semibold text-[#0853a4]">
                info@openskyholidays.com
              </span>
            </span>
          </a>

          {/* Center Text */}
          <p className="flex-1 text-center text-[11px] font-medium leading-5 text-slate-200 sm:text-[12px] lg:text-[13px]">
            The World Is Waiting. One Stop Destination For All Your Tours &
            Travels Needs.
            <Link
              to="/tours/domestic"
              className="ml-1 font-semibold text-[#fbb03b] underline underline-offset-2 transition-colors hover:text-[#0853a4]"
            >
              Book Your Tour
            </Link>
          </p>

          {/* Social Icons */}
          <div className="hidden items-center gap-2 border-l border-white/15 pl-5 lg:flex">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href || "#social"}
                target={social.href && social.href !== "#social" ? "_blank" : undefined}
                rel={social.href && social.href !== "#social" ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/50 text-[10px] text-white transition-all duration-300 hover:border-[#0853a4] hover:bg-[#0853a4] hover:text-white"
              >
                <span className="scale-75">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* MAIN NAVIGATION */}
    </>
  );
}