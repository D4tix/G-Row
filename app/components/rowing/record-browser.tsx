"use client";

import { useMemo, useState } from "react";

import RecordCard from "@/app/components/rowing/record-card";
import { type Record, ROWING_RECORDS } from "@/app/lib/rowing-records";

type DivisionFilter = "all" | "men" | "women";
type EnvironmentFilter = "all" | "indoor" | "on-water";
type WeightFilter = "all" | "open" | "lightweight";

function getRecordMeta(record: Record) {
  return {
    division: record.id.startsWith("men-") ? "men" : "women",
    environment: record.id.includes("-erg-") ? "indoor" : "on-water",
    weight: record.id.includes("lightweight") ? "lightweight" : "open",
  } as const;
}

function FilterGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: Array<{ value: T; label: string }>;
  onChange: (value: T) => void;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = option.value === value;

          return (
            <button
              key={option.value}
              type="button"
              onClick={() => onChange(option.value)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "bg-zinc-950 text-white"
                  : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50",
              ].join(" ")}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function RecordBrowser() {
  const [division, setDivision] = useState<DivisionFilter>("all");
  const [environment, setEnvironment] = useState<EnvironmentFilter>("all");
  const [weight, setWeight] = useState<WeightFilter>("all");

  const filteredRecords = useMemo(() => {
    return ROWING_RECORDS.filter((record) => {
      const meta = getRecordMeta(record);

      if (division !== "all" && meta.division !== division) {
        return false;
      }

      if (environment !== "all" && meta.environment !== environment) {
        return false;
      }

      if (weight !== "all" && meta.weight !== weight) {
        return false;
      }

      return true;
    });
  }, [division, environment, weight]);

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <section className="rounded-[1.75rem] bg-white px-5 py-6 shadow-sm ring-1 ring-zinc-200 sm:px-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-zinc-900">Filter records</p>
              <p className="text-sm text-zinc-500">
                {filteredRecords.length} {filteredRecords.length === 1 ? "record" : "records"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setDivision("all");
                setEnvironment("all");
                setWeight("all");
              }}
              className="self-start text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Reset filters
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <FilterGroup
              label="Division"
              value={division}
              onChange={setDivision}
              options={[
                { value: "all", label: "All" },
                { value: "men", label: "Men" },
                { value: "women", label: "Women" },
              ]}
            />
            <FilterGroup
              label="Discipline"
              value={environment}
              onChange={setEnvironment}
              options={[
                { value: "all", label: "All" },
                { value: "on-water", label: "On Water" },
                { value: "indoor", label: "Indoor" },
              ]}
            />
            <FilterGroup
              label="Weight"
              value={weight}
              onChange={setWeight}
              options={[
                { value: "all", label: "All" },
                { value: "open", label: "Open" },
                { value: "lightweight", label: "Lightweight" },
              ]}
            />
          </div>
        </div>
      </section>

      {filteredRecords.length > 0 ? (
        <section className="grid gap-4 md:grid-cols-2 md:gap-5">
          {filteredRecords.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))}
        </section>
      ) : (
        <section className="rounded-[1.75rem] bg-white px-5 py-8 text-center shadow-sm ring-1 ring-zinc-200 sm:px-8">
          <p className="text-lg font-medium text-zinc-900">No records match these filters.</p>
          <p className="mt-2 text-sm text-zinc-500">Adjust the filters to see more results.</p>
        </section>
      )}
    </div>
  );
}