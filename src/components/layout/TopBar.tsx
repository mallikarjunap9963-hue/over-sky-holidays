import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MailIcon } from "../icons/Icons";
import { contentApi } from "../../api/contentApi";
import type { ApiTopHeader } from "../../api/types";

export function TopBar() {
  const [topHeader, setTopHeader] = useState<ApiTopHeader | null>(null);

  useEffect(() => {
    let isMounted = true;
    async function loadTopHeader() {
      try {
        const res = await contentApi.getTopHeaderActive();
        if (isMounted && res.isLive && res.header) {
          setTopHeader(res.header);
        }
      } catch (err) {
        console.error("Failed to load active top header:", err);
      }
    }
    loadTopHeader();
    return () => {
      isMounted = false;
    };
  }, []);

  const email = topHeader?.email || "";
  const tagline = topHeader?.tagline || "";
  const buttonText = topHeader?.button_text || "Book Your Tour";
  const buttonUrl = topHeader?.button_url && topHeader.button_url !== "#" ? topHeader.button_url : "/tours/domestic";

  const socialList = topHeader?.social_links || [];

  return (
    <>
      {/* TOP INFORMATION BAR */}
      <section className="hidden sm:block bg-[#100c08] text-white">
        <div className="mx-auto flex min-h-[35px] max-w-[1540px] flex-col items-center justify-center gap-2 px-4 py-2 sm:flex-row sm:justify-between sm:gap-4 sm:px-8 sm:py-0 lg:px-10">

          {/* Email */}
          {email && (
            <a
              href={`mailto:${email}`}
              className="hidden items-center gap-1.5 text-[12px] transition-colors hover:opacity-90 lg:flex group"
            >
              <span className="flex h-6 w-5 items-center justify-center text-[#fbb03b] scale-75 group-hover:scale-90 transition-transform">
                <MailIcon />
              </span>

              <span className="font-medium text-slate-300">
                Email:
                <span className="ml-1 font-semibold text-[#fbb03b]">
                  {email}
                </span>
              </span>
            </a>
          )}

          {/* Center Text */}
          <p className="flex-1 text-center text-[11px] font-medium leading-5 text-slate-200 sm:text-[12px] lg:text-[13px]">
            {tagline}{" "}
            {buttonText && (buttonUrl.startsWith("http") ? (
              <a
                href={buttonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-[#fbb03b] underline underline-offset-2 transition-colors hover:text-amber-300"
              >
                {buttonText}
              </a>
            ) : (
              <Link
                to={buttonUrl}
                className="ml-1 font-semibold text-[#fbb03b] underline underline-offset-2 transition-colors hover:text-amber-300"
              >
                {buttonText}
              </Link>
            ))}
          </p>

          {/* Social Icons */}
          {socialList.length > 0 && (
            <div className="hidden items-center gap-2 border-l border-white/15 pl-5 lg:flex">
              {socialList.map((social, idx) => (
                <a
                  key={social.platform || idx}
                  href={social.url || social.link || "#social"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform || "Social"}
                  className="flex h-6 w-6 items-center justify-center rounded-full border border-white/50 text-[10px] text-white transition-all duration-300 hover:border-[#fbb03b] hover:bg-[#fbb03b] hover:text-[#100c08]"
                >
                  <i className={social.icon || (social.platform?.toLowerCase().includes("instagram") ? "fa-brands fa-instagram" : "fa-brands fa-facebook-f")} />
                </a>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}