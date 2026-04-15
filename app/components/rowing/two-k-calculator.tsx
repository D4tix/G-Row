"use client";

import { useMemo, useState } from "react";

import { DurationInputFields } from "./duration-input-fields";

import {
  ROWING_RECORDS,
  getRecordById,
  type RowingRecordId,
} from "@/app/lib/rowing-records";

const DISTANCE_OPTIONS = [500, 1000, 2000, 6000] as const;
type DistanceOption = (typeof DISTANCE_OPTIONS)[number];

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
  return `${value.toFixed(1)}%`;
}

export function TwoKCalculator() {
  const [recordId, setRecordId] = useState<RowingRecordId>(ROWING_RECORDS[0].id);
  const [distance, setDistance] = useState<DistanceOption>(2000);
  const [minutes, setMinutes] = useState("06");
  const [seconds, setSeconds] = useState("40");
  const [hundredths, setHundredths] = useState("20");

  const time = `${minutes}:${seconds.padStart(2, "0")}.${hundredths.padStart(2, "0")}`;
  const record = getRecordById(recordId);
  const athleteSeconds = parseTimeToSeconds(time);

  const result = useMemo(() => {
    if (!record || athleteSeconds === null) {
      return null;
    }

    const equivalentTwoKSeconds = athleteSeconds * (2000 / distance);
    const percentage = (record.seconds / equivalentTwoKSeconds) * 100;
    const gap = equivalentTwoKSeconds - record.seconds;

    return {
      percentage,
      gap,
      split: athleteSeconds / (distance / 500),
      equivalentTwoKSeconds,
    };
  }, [athleteSeconds, distance, record]);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
      <section className="rounded-[1.75rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 sm:px-7 sm:py-7">
        <div className="grid gap-6">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-zinc-700">Category</span>
            <select
              value={recordId}
              onChange={(event) => setRecordId(event.target.value as RowingRecordId)}
              className="h-14 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 text-sm text-zinc-950 outline-none transition focus:border-zinc-950"
            >
              {ROWING_RECORDS.map((entry) => (
                <option key={entry.id} value={entry.id}>
                  {entry.label}
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

        {record && result ? (
          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-zinc-400">Percentage of record pace</p>
              <p className="mt-2 text-[2.4rem] font-semibold tracking-tight sm:text-4xl">
                {formatPercent(result.percentage)}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              <div>
                <p className="text-sm text-zinc-400">Reference time</p>
                <p className="mt-1 text-lg font-medium">{record.time}</p>
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
                <p className="text-sm text-zinc-400">Gap to 2k record</p>
                <p className="mt-1 text-lg font-medium">
                  {result.gap > 0 ? "+" : ""}
                  {formatSeconds(Math.abs(result.gap))}
                </p>
              </div>
              <div>
                <p className="text-sm text-zinc-400">Category</p>
                <p className="mt-1 text-lg font-medium">{record.label}</p>
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
  );
}