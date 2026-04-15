"use client";

import { ChangeEvent } from "react";

interface DurationInputFieldsProps {
  minutes: string;
  seconds: string;
  hundredths: string;
  onMinutesChange: (value: string) => void;
  onSecondsChange: (value: string) => void;
  onHundredthsChange: (value: string) => void;
}

/**
 * Three separate numeric inputs for duration: mm, ss, xx
 * Easier on mobile with no special characters needed.
 */
export function DurationInputFields({
  minutes,
  seconds,
  hundredths,
  onMinutesChange,
  onSecondsChange,
  onHundredthsChange,
}: DurationInputFieldsProps) {
  const handleMinutesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 2);
    onMinutesChange(value);
  };

  const handleSecondsChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value.replace(/\D/g, "").slice(0, 2);
    // Limit seconds to 0-59
    if (value && Number(value) > 59) {
      value = "59";
    }
    onSecondsChange(value);
  };

  const handleHundredthsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, "").slice(0, 2);
    onHundredthsChange(value);
  };

  return (
    <div className="grid gap-4">
      <div className="flex items-center gap-2">
        <div className="flex-1">
          <input
            value={minutes}
            onChange={handleMinutesChange}
            placeholder="06"
            type="text"
            inputMode="numeric"
            maxLength={2}
            className="h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-center text-base font-medium text-zinc-950 outline-none transition focus:border-zinc-950"
          />
        </div>

        <span className="text-2xl font-medium text-zinc-700">:</span>

        <div className="flex-1">
          <input
            value={seconds}
            onChange={handleSecondsChange}
            placeholder="40"
            type="text"
            inputMode="numeric"
            maxLength={2}
            className="h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-center text-base font-medium text-zinc-950 outline-none transition focus:border-zinc-950"
          />
        </div>

        <span className="text-2xl font-medium text-zinc-700">.</span>

        <div className="flex-1">
          <input
            value={hundredths}
            onChange={handleHundredthsChange}
            placeholder="20"
            type="text"
            inputMode="numeric"
            maxLength={2}
            className="h-14 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-center text-base font-medium text-zinc-950 outline-none transition focus:border-zinc-950"
          />
        </div>
      </div>
    </div>
  );
}
