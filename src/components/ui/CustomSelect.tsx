import { useState, useRef, useEffect, type ReactNode } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { label: string; value: string }[] | string[];
  placeholder: string;
  icon?: ReactNode;
  heightClass?: string;
}

export function CustomSelect({
  value,
  onChange,
  options,
  placeholder,
  icon,
  heightClass = 'h-[38px]'
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Normalize options array
  const formattedOptions = options.map((opt) =>
    typeof opt === 'string' ? { label: opt, value: opt } : opt
  );

  const selectedOption = formattedOptions.find((opt) => opt.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative group w-full ${isOpen ? 'z-[100]' : 'z-10'}`}>
      {/* Icon */}
      {icon && (
        <span className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0853a4] transition-colors z-10 pointer-events-none ${isOpen ? 'text-[#0853a4]' : ''}`}>
          {icon}
        </span>
      )}

      {/* Button Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${heightClass} ${icon ? 'pl-9.5' : 'pl-3.5'} pr-9 rounded-lg border bg-slate-50/50 text-left outline-none transition-all flex items-center justify-between text-[13px] cursor-pointer ${
          isOpen
            ? 'border-[#0853a4] bg-white ring-4 ring-[#0853a4]/10 shadow-sm'
            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
        }`}
      >
        <span className={`truncate font-medium ${selectedOption ? 'text-[#100c08]' : 'text-slate-500'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0853a4]' : ''}`}>
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </button>

      {/* Floating Custom Dropdown List (Opens Upwards) */}
      {isOpen && (
        <div className="absolute bottom-[calc(100%+6px)] left-0 right-0 z-50 max-h-56 overflow-y-auto rounded-xl border border-sky-100 bg-white p-1.5 shadow-[0_16px_40px_rgba(8,83,164,0.2)] animate-[fadeIn_0.15s_ease-out]">
          {formattedOptions.length === 0 ? (
            <div className="p-3 text-center text-xs text-slate-400">No options</div>
          ) : (
            formattedOptions.map((opt) => {
              const isSelected = opt.value === value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2.5 my-0.5 rounded-lg text-left text-[13px] font-medium transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0853a4] text-white font-semibold shadow-sm'
                      : 'text-slate-700 hover:bg-[#0853a4]/10 hover:text-[#0853a4]'
                  }`}
                >
                  <span className="truncate">{opt.label}</span>
                  {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-white" />}
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
