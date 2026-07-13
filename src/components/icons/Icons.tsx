import type { ActivityName, ReviewSource, SearchTab } from '../../types';

export function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.82 19.82 0 0 1-8.63-3.07 19.48 19.48 0 0 1-6-6A19.82 19.82 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />

      <path d="M16.2 3.7a7 7 0 0 1 4.1 4.1M16.2 7.7a3 3 0 0 1 .8.8" />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function GridIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="3" y="15" width="6" height="6" rx="1" />
      <rect x="15" y="15" width="6" height="6" rx="1" />
    </svg>
  );
}

export function LocationIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function ArrowLeftIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m15 18-6-6 6-6" />
      <path d="M9 12h10" />
    </svg>
  );
}

export function ArrowRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
      <path d="M5 12h10" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.2 8.3V6.8c0-.7.5-.9.9-.9h2.3V2.1L14.2 2C10.7 2 9.9 4.6 9.9 6.3v2H7v4.2h2.9V22h4.3v-9.5h3.2l.5-4.2h-3.7Z" />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-3.5 w-3.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-6.4L6.6 22H3.5l7.1-8.1L2.9 2h6.4l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.4 4H6.6l11.2 15.9Z" />
    </svg>
  );
}

export function PinterestIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.6 0-3.4.4-5.1l1.3-5.5s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1 4.2-.6 2.4 1.2 4.3 3.5 4.3 4.2 0 7-5.4 7-11.8C23.1 2.1 18 2 12 2Zm0 18.1c-.9 0-1.8-.2-2.6-.4.4-.7.8-1.8 1-2.7l.7-2.6c.4.7 1.5 1.3 2.7 1.3 3.6 0 6.1-3.3 6.1-7.7 0-3.3-2.8-6.4-7.1-6.4-5.3 0-8 3.8-8 7 0 2.3.9 4.3 2.8 5 .3.1.6 0 .7-.3l.3-1.1c.1-.3.1-.4-.2-.7-.5-.6-.8-1.4-.8-2.6 0-3.4 2.5-6.4 6.6-6.4 3.6 0 5.6 2.2 5.6 5.1 0 3.9-1.7 7.1-4.3 7.1-1.4 0-2.5-1.2-2.1-2.6.4-1.7 1.2-3.5 1.2-4.7 0-1.1-.6-2-1.8-2-1.4 0-2.6 1.5-2.6 3.5 0 1.3.4 2.1.4 2.1l-1.7 7c-.5 2.1-.1 4.6 0 4.9A8.2 8.2 0 0 1 12 20.1Z" />
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BookingTabIcon({
  type,
  className = "h-6 w-6",
}: {
  type: SearchTab;
  className?: string;
}) {
  if (type === "Hotel") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <path d="M4 21V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v16" />
        <path d="M17 9h2a2 2 0 0 1 2 2v10M2 21h20" />
        <path d="M8 7h2M13 7h1M8 11h2M13 11h1M8 15h2M13 15h1" />
      </svg>
    );
  }

  if (type === "Visa") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="5" y="2.5" width="14" height="19" rx="2" />
        <path d="M9 6h6M9 17h6" />
        <circle cx="12" cy="11.5" r="3" />
        <path d="M9.2 11.5h5.6M12 8.5a5 5 0 0 1 0 6" />
      </svg>
    );
  }

  if (type === "Activities") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18" />
        <circle cx="9" cy="15" r="2.5" />
        <path d="m11 17 2 1.5 3-4" />
      </svg>
    );
  }

  if (type === "Transport") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        aria-hidden="true"
      >
        <rect x="4" y="3" width="16" height="15" rx="3" />
        <path d="M7 18v3M17 18v3M4 13h16M8 7h8" />

        <circle cx="8" cy="15.5" r="1" fill="currentColor" stroke="none" />

        <circle cx="16" cy="15.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M3 21h6M15 21h6" />
    </svg>
  );
}

export function ClockIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function CategoryIcon({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
      <path d="m15 17 2 2 4-5" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ActivityIcon({
  type,
  className = "h-12 w-12",
}: {
  type: ActivityName;
  className?: string;
}) {
  if (type === "Zip lining") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        aria-hidden="true"
      >
        {/* Diagonal zip line cable */}
        <path d="M6 10 L58 34" strokeLinecap="round" />
        {/* Zip line trolley/pulley */}
        <path d="M26 19 L38 24.5" strokeWidth="5.5" strokeLinecap="round" />
        {/* Suspension hanger wire */}
        <path d="M32 22 L32 36" strokeWidth="2.5" />
        {/* Traveler hanging/ziplining */}
        <circle cx="32" cy="40" r="4.5" fill="none" strokeWidth="2.5" />
        <path d="M32 44.5 L32 52" strokeLinecap="round" />
        <path d="M22 45.5 L32 44.5 M32 44.5 L42 47.5" strokeLinecap="round" />
        <path d="m25 58 7-6 7 6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "Paragliding") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M9 20c7-15 39-15 46 0-8-5-15-6-23-6S17 15 9 20Z" />
        <path d="M9 20c8 5 15 6 23 6s15-1 23-6" />
        <path d="m14 20 14 24M50 20 36 44M32 26v18" />
        <circle cx="32" cy="48" r="4" />
        <path d="M28 53h8" />
      </svg>
    );
  }

  if (type === "Bungee Jumping") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M43 5v18c0 8-5 12-11 12" />
        <circle cx="27" cy="22" r="4" />
        <path d="m26 26-4 12 10 8M23 31l-9 7M28 31l10 2" />
        <path d="m32 46-7 12M32 46l10 8" />
        <path d="M43 5h10" />
      </svg>
    );
  }

  if (type === "Ski touring") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="36" cy="12" r="4" />
        <path d="m33 17-8 12 11 8 7-11" />
        <path d="m27 25-10-2M40 25l10 5" />
        <path d="m36 37-9 14M36 37l10 12" />
        <path d="M12 54c13 5 27 5 40 0M17 18l-8 37M52 20l-5 35" />
        <path d="m8 14 9 4M47 16l8 4" />
        <path d="M11 7h2M18 11h2M51 8h2" />
      </svg>
    );
  }

  if (type === "Rafting") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M10 42h44l-7 11H17l-7-11Z" />
        <circle cx="22" cy="24" r="4" />
        <circle cx="34" cy="21" r="4" />
        <circle cx="46" cy="25" r="4" />
        <path d="m20 29-5 12M24 29l7 12M33 26l-4 15M38 26l7 15" />
        <path d="M8 57c8-4 14 4 22 0s14 4 26 0" />
        <path d="m12 22 11 19M52 20 41 41" />
      </svg>
    );
  }

  if (type === "Surfing") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M6 43c8-20 30-31 48-17-14-3-23 4-25 14 9-7 21-4 27 5-9 13-39 17-50-2Z" />
        <circle cx="36" cy="18" r="4" />
        <path d="m34 23-8 10 9 5 7-8" />
        <path d="m27 32-9 3M38 28l9 5" />
        <path d="M15 50c10 5 24 4 35-2" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M10 12c12 10 32 10 44 0" />
      <path d="M20 18 32 31 44 18" />
      <path d="M32 31v10" />
      <circle cx="32" cy="46" r="4" />
      <path d="m29 50-6 9M35 50l7 9" />
      <path d="m27 43-9 6M37 43l9 6" />
      <path d="M12 11h40" />
    </svg>
  );
}

export function ReviewSourceIcon({ source }: { source: ReviewSource }) {
  if (source === "Tripadvisor") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#35c2a2] text-[12px] font-black text-white">
        ◎
      </span>
    );
  }

  if (source === "Facebook") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877f2] text-[14px] font-bold text-white">
        f
      </span>
    );
  }

  if (source === "Google") {
    return (
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[14px] font-extrabold shadow-sm">
        <span className="text-[#4285f4]">G</span>
      </span>
    );
  }

  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0b84d8] text-white">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M8 12h8M8 8h5M8 16h6" />
        <path d="M5 3h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      </svg>
    </span>
  );
}

