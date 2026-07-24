import { useState, useRef, useEffect } from 'react';
import { CalendarDays, ChevronLeft, ChevronRight, X, RotateCcw } from 'lucide-react';

interface SearchDatePickerProps {
  label?: string;
  value?: string;
  onChange?: (dateStr: string) => void;
}

export function SearchDatePicker({
  label = "When",
  value,
  onChange
}: SearchDatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value + "T00:00:00") : null);

  const [viewDate, setViewDate] = useState<Date>(selectedDate || new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value) {
      const parsed = new Date(value + "T00:00:00");
      if (!isNaN(parsed.getTime())) {
        setSelectedDate(parsed);
        setViewDate(parsed);
      }
    } else {
      setSelectedDate(null);
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

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const prevDaysInMonth = new Date(viewYear, viewMonth, 0).getDate();

  const handlePrevMonth = () => {
    setViewDate(new Date(viewYear, viewMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewYear, viewMonth + 1, 1));
  };

  const handleSelectDay = (day: number) => {
    const chosen = new Date(viewYear, viewMonth, day);
    if (chosen < today) return;

    setSelectedDate(chosen);
    setIsOpen(false);

    const yyyy = chosen.getFullYear();
    const mm = String(chosen.getMonth() + 1).padStart(2, '0');
    const dd = String(chosen.getDate()).padStart(2, '0');
    const dateStr = `${yyyy}-${mm}-${dd}`;

    if (onChange) {
      onChange(dateStr);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDate(null);
    if (onChange) onChange('');
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const formatDisplay = () => {
    if (!selectedDate) return "Select Travel Date";
    return selectedDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative flex min-h-[76px] items-start gap-3 border-b border-[#bae6fd] px-4 py-3 font-rubik sm:min-h-[82px] sm:items-center sm:px-5 lg:border-b-0 lg:border-r ${
        isOpen ? 'z-[100]' : 'z-10'
      }`}
    >
      <span className="shrink-0 text-[#0853a4] mt-0.5 sm:mt-0">
        <CalendarDays className="h-7 w-7 text-[#0853a4] transition-transform duration-200 group-hover:scale-110" />
      </span>

      <div className="min-w-0 flex-1">
        <span className="block text-[12px] font-medium text-slate-500">
          {label}
        </span>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between gap-2 mt-1 text-left text-[14px] font-semibold text-[#100c08] sm:text-[15px] outline-none group cursor-pointer"
        >
          <span className={`truncate ${selectedDate ? 'text-[#100c08] font-bold' : 'text-slate-500 font-normal'}`}>
            {formatDisplay()}
          </span>

          {selectedDate && (
            <span
              onClick={handleClear}
              className="p-1 text-slate-400 hover:text-red-500 transition-colors rounded-full hover:bg-slate-100"
              title="Clear date"
            >
              <X className="h-3.5 w-3.5" />
            </span>
          )}
        </button>
      </div>

      {/* INDUSTRY-LEVEL CUSTOM CALENDAR POPUP (OPENS UPWARD) */}
      {isOpen && (
        <div className="absolute bottom-[calc(100%+8px)] left-0 sm:left-auto right-0 z-50 w-full min-w-[310px] sm:w-[330px] rounded-2xl border border-sky-100 bg-white p-4 shadow-[0_20px_60px_rgba(8,83,164,0.22)] animate-[fadeIn_0.15s_ease-out]">
          {/* Header Month Navigation */}
          <div className="flex items-center justify-between mb-3 px-1">
            <h4 className="font-rubik text-[15px] font-extrabold text-[#100c08]">
              {monthNames[viewMonth]} <span className="text-[#0853a4]">{viewYear}</span>
            </h4>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="p-1.5 rounded-lg text-slate-600 hover:bg-sky-50 hover:text-[#0853a4] transition cursor-pointer"
                title="Previous Month"
              >
                <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={handleNextMonth}
                className="p-1.5 rounded-lg text-slate-600 hover:bg-sky-50 hover:text-[#0853a4] transition cursor-pointer"
                title="Next Month"
              >
                <ChevronRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-1">
            {dayNames.map((day) => (
              <span key={day} className="text-[11px] font-bold text-slate-400 uppercase tracking-wider py-1">
                {day}
              </span>
            ))}
          </div>

          {/* Calendar Grid Days */}
          <div className="grid grid-cols-7 gap-1 text-center">
            {/* Previous month padding days */}
            {Array.from({ length: firstDay }).map((_, i) => {
              const prevDay = prevDaysInMonth - firstDay + i + 1;
              return (
                <div
                  key={`prev-${i}`}
                  className="h-9 w-9 mx-auto flex items-center justify-center text-[12px] font-medium text-slate-300 pointer-events-none"
                >
                  {prevDay}
                </div>
              );
            })}

            {/* Current month days */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateObj = new Date(viewYear, viewMonth, day);
              const isPast = dateObj < today;
              const isToday = dateObj.getTime() === today.getTime();

              const isSelected = selectedDate &&
                selectedDate.getFullYear() === viewYear &&
                selectedDate.getMonth() === viewMonth &&
                selectedDate.getDate() === day;

              return (
                <button
                  key={day}
                  type="button"
                  disabled={isPast}
                  onClick={() => handleSelectDay(day)}
                  className={`h-9 w-9 mx-auto flex items-center justify-center rounded-xl text-[13px] font-semibold transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-[#0853a4] text-white font-bold shadow-md shadow-[#0853a4]/30 scale-105"
                      : isPast
                      ? "text-slate-300 cursor-not-allowed"
                      : isToday
                      ? "border border-[#0853a4] text-[#0853a4] font-bold hover:bg-[#0853a4]/10"
                      : "text-slate-700 hover:bg-sky-50 hover:text-[#0853a4]"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Quick Footer Action Bar */}
          <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-100 px-1">
            <button
              type="button"
              onClick={() => {
                const now = new Date();
                setViewDate(now);
                handleSelectDay(now.getDate());
              }}
              className="text-[12px] font-bold text-[#0853a4] hover:underline cursor-pointer"
            >
              Select Today
            </button>

            {selectedDate && (
              <button
                type="button"
                onClick={handleClear}
                className="flex items-center gap-1 text-[12px] font-semibold text-slate-500 hover:text-red-500 transition cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" />
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
