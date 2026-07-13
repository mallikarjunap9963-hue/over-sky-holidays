import type { SearchSelectProps } from '../../types';
import { ChevronDownIcon } from '../icons/Icons';

export function SearchSelect({ label, options, icon }: SearchSelectProps) {
  return (
    <label className="flex min-h-[82px] items-center gap-3 border-b border-[#bae6fd] px-5 lg:border-b-0 lg:border-r font-rubik">
      <span className="shrink-0 text-[#0b84d8]">{icon}</span>

      <span className="min-w-0 flex-1">
        <span className="block text-[12px] font-medium text-slate-500">
          {label}
        </span>

        <span className="relative mt-1 block">
          <select
            defaultValue={options[0]}
            className="w-full cursor-pointer appearance-none bg-transparent pr-8 text-[15px] font-semibold text-[#100c08] outline-none"
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


