import type { SearchSelectProps } from '../../types';
import { ChevronDownIcon } from '../icons/Icons';

export function SearchSelect({ label, options, icon, value, onChange }: SearchSelectProps) {
  return (
    <label className="flex min-h-[76px] items-start gap-3 border-b border-[#bae6fd] px-4 py-3 font-rubik sm:min-h-[82px] sm:items-center sm:px-5 lg:border-b-0 lg:border-r">
      <span className="shrink-0 text-[#0853a4]">{icon}</span>

      <span className="min-w-0 flex-1">
        <span className="block text-[12px] font-medium text-slate-500">
          {label}
        </span>

        <span className="relative mt-1 block">
          <select
            defaultValue={value === undefined ? options[0] : undefined}
            value={value}
            onChange={onChange}
            className="w-full cursor-pointer appearance-none bg-transparent pr-8 text-[14px] font-semibold text-[#100c08] outline-none sm:text-[15px]"
            aria-label={label}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#100c08]">
            <ChevronDownIcon />
          </span>
        </span>
      </span>
    </label>
  );
}


