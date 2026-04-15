"use client";

import { useMemo, useState } from "react";

import { DurationInputFields } from "./duration-input-fields";

import {
  GMS_TIMES_2024_2028,
  getGmsReferenceById,
  type GmsReferenceId,
} from "@/app/lib/rowing-records";

const DISTANCE_OPTIONS = [500, 1000, 2000, 6000] as const;
type DistanceOption = (typeof DISTANCE_OPTIONS)[number];

function getGmsTimeForDistance(
  gmsReference: NonNullable<ReturnType<typeof getGmsReferenceById>>,
  distance: DistanceOption,
) {
  switch (distance) {
    case 500:
      return gmsReference.gms_500;
    case 1000:
      return gmsReference.gms_1000;
    case 2000:
      return gmsReference.gms_2000;
    case 6000:
      return gmsReference.gms_6000;
  }
}

function parseTimeToSeconds(value: string) {
  const trimmed = value.trim();

  if (!trimmed) {
    return null;
  }

  const match = trimmed.match(/^(\d+):(\d{2})(?:\.(\d{2}))$/);

  if (!match) {
    return null;
  }

  const minutes = Number(match[1]);
  const seconds = Number(match[2]);
  const hundredths = Number(match[3]);

  if (seconds >= 60) {
    return null;
  }

  return minutes * 60 + seconds + hundredths / 100;
}

function formatSeconds(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - minutes * 60;

  return `${minutes}:${seconds.toFixed(2).padStart(5, "0")}`;
}

function formatPercent(value: number) {
  return `${value.toFixed(2)}%`;
}

export function TwoKCalculator() {
  const [recordId, setRecordId] = useState<GmsReferenceId>(GMS_TIMES_2024_2028[9].id);
  const [distance, setDistance] = useState<DistanceOption>(2000);
  const [minutes, setMinutes] = useState("07");
  const [seconds, setSeconds] = useState("00");
  const [hundredths, setHundredths] = useState("00");

  const time = `${minutes}:${seconds.padStart(2, "0")}.${hundredths.padStart(2, "0")}`;
  const gmsReference = getGmsReferenceById(recordId);
  const athleteSeconds = parseTimeToSeconds(time);

  const result = useMemo(() => {
    if (!gmsReference || athleteSeconds === null) {
      return null;
    }

    const gmsSeconds = getGmsTimeForDistance(gmsReference, distance);
    const equivalentTwoKSeconds = athleteSeconds * (2000 / distance);
    const percentage = (gmsSeconds / athleteSeconds) * 100;
    const gap = athleteSeconds - gmsSeconds;

    return {
      percentage,
      gap,
      gmsSeconds,
      split: athleteSeconds / (distance / 500),
      equivalentTwoKSeconds,
    };
  }, [athleteSeconds, distance, gmsReference]);

  return (
    <div className="grid gap-4 lg:gap-6">
      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <section className="rounded-[1.75rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 sm:px-7 sm:py-7">
          <div className="grid gap-6">
            <label className="grid gap-2">
              <span className="text-sm font-medium text-zinc-700">Category</span>
              <select
                value={recordId}
                onChange={(event) => setRecordId(event.target.value as GmsReferenceId)}
                className="h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-950 outline-none transition focus:border-zinc-950"
              >
                {GMS_TIMES_2024_2028.map((entry) => (
                  <option key={entry.id} value={entry.id}>
                    {entry.id}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-zinc-700">Distance</span>
              <select
                value={distance}
                onChange={(event) =>
                  setDistance(Number(event.target.value) as DistanceOption)
                }
                className="h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-950 outline-none transition focus:border-zinc-950"
              >
                {DISTANCE_OPTIONS.map((entry) => (
                  <option key={entry} value={entry}>
                    {entry} m
                  </option>
                ))}
              </select>
            </label>

            <DurationInputFields
              minutes={minutes}
              seconds={seconds}
              hundredths={hundredths}
              onMinutesChange={setMinutes}
              onSecondsChange={setSeconds}
              onHundredthsChange={setHundredths}
            />
          </div>
        </section>

        <aside className="rounded-[1.75rem] bg-zinc-950 px-5 py-6 text-white shadow-sm sm:px-7 sm:py-7">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-400 sm:text-sm">
            Result
          </p>

          {result && gmsReference ? (
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-zinc-400">Percentage</p>
                <p className="mt-2 text-[2.4rem] font-semibold tracking-tight sm:text-4xl">
                  {formatPercent(result.percentage)}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                <div>
                  <p className="text-sm text-zinc-400">GMS reference time</p>
                  <p className="mt-1 text-lg font-medium">
                    {formatSeconds(result.gmsSeconds)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Equivalent 2k time</p>
                  <p className="mt-1 text-lg font-medium">
                    {formatSeconds(result.equivalentTwoKSeconds)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Your split / 500m</p>
                  <p className="mt-1 text-lg font-medium">
                    {formatSeconds(result.split)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Gap to GMS</p>
                  <p className="mt-1 text-lg font-medium">
                    {result.gap > 0 ? "+" : ""}
                    {formatSeconds(Math.abs(result.gap))}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 text-sm text-zinc-300">
              Enter a valid time to calculate the percentage.
            </div>
          )}
        </aside>
      </div>

      <section className="rounded-[1.75rem] border border-amber-200 bg-amber-50 px-5 py-5 text-zinc-900 shadow-sm sm:px-7 sm:py-6">
        <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-700 sm:text-[0.95rem]">
          These reference times are guidance values and should not be treated as fully
          accurate or authoritative for every crew class, distance, or testing setup.
        </p>
      </section>
    </div>
  );
}