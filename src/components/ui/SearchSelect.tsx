import { useState, useRef, useEffect } from 'react';
import type { SearchSelectProps } from '../../types';
import { ChevronDownIcon } from '../icons/Icons';
import { Check } from 'lucide-react';

export function SearchSelect({ label, options, icon, value, onChange }: SearchSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(value || options[0] || '');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedOption(value);
    }
  }, [value]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      const syntheticEvent = {
        target: { value: option },
        currentTarget: { value: option }
      } as unknown as React.ChangeEvent<HTMLSelectElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex min-h-[76px] items-start gap-3 border-b border-[#bae6fd] px-4 py-3 font-rubik sm:min-h-[82px] sm:items-center sm:px-5 lg:border-b-0 lg:border-r ${isOpen ? 'z-[100]' : 'z-10'}`}
    >
      <span className="shrink-0 text-[#0853a4]">{icon}</span>

      <div className="min-w-0 flex-1">
        <span className="block text-[12px] font-medium text-slate-500">
          {label}
        </span>

        {/* Trigger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 mt-1 text-left text-[14px] font-semibold text-[#100c08] sm:text-[15px] outline-none group cursor-pointer"
        >
          <span className="truncate">{selectedOption}</span>
          <span className={`shrink-0 text-[#100c08] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0853a4]' : ''}`}>
            <ChevronDownIcon />
          </span>
        </button>
      </div>

      {/* Custom Padded Dropdown Menu (Opens Upward) */}
      {isOpen && (
        <div className="absolute bottom-[calc(100%+6px)] left-0 right-0 z-50 max-h-64 overflow-y-auto rounded-2xl border border-sky-100 bg-white p-2 shadow-[0_20px_60px_rgba(8,83,164,0.22)] animate-[fadeIn_0.15s_ease-out]">
          {options.map((option) => {
            const isSelected = option === selectedOption;
            return (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full flex items-center justify-between px-4 py-3 my-0.5 rounded-xl text-left text-[14px] font-medium transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? "bg-[#0853a4] text-white font-bold shadow-sm"
                    : "text-slate-700 hover:bg-[#0853a4]/10 hover:text-[#0853a4]"
                }`}
              >
                <span className="truncate">{option}</span>
                {isSelected && <Check className="h-4 w-4 shrink-0 text-white" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}


