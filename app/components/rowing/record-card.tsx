import { Record } from "@/app/lib/rowing-records";
import { getSplitFromSeconds } from "@/app/lib/rowing-records";

export default function RecordCard({ record }: { record: Record }) {
    const [division, ...boatClassParts] = record.label.split("-");
    const boatClass = boatClassParts.join(" ").trim() || record.label;
    const splitSeconds = getSplitFromSeconds(record.seconds);
    const splitMinutes = Math.floor(splitSeconds / 60);
    const splitRemainder = splitSeconds - splitMinutes * 60;
    const split = `${splitMinutes}:${splitRemainder.toFixed(2).padStart(5, "0")}`;
    const athleteCount = record.holder.individuals.length;

    return (
        <article className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-zinc-200">
            <div className="border-b border-zinc-100 bg-[linear-gradient(135deg,#fafafa_0%,#ffffff_45%,#f4f4f5_100%)] px-5 py-5 sm:px-7 sm:py-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.28em] text-zinc-500">
                            {division}
                        </p>
                        <h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 sm:mt-3 sm:text-2xl">
                            {boatClass}
                        </h2>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-zinc-950 px-4 py-3 text-white">
                        <p className="text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                            Record
                        </p>
                        <p className="text-2xl font-semibold leading-none">{record.time}</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-5 px-5 py-5 sm:gap-6 sm:px-7 sm:py-6">
                <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
                    <div className="rounded-2xl bg-zinc-50 px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Nation</p>
                        <p className="mt-2 text-base font-medium text-zinc-950">{record.holder.nation}</p>
                    </div>
                    <div className="rounded-2xl bg-zinc-50 px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Set in</p>
                        <p className="mt-2 text-base font-medium text-zinc-950">{record.year}</p>
                    </div>
                    <div className="rounded-2xl bg-zinc-50 px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">Split / 500m</p>
                        <p className="mt-2 text-base font-medium text-zinc-950">{split}</p>
                    </div>
                </div>

                <div>
                    <div className=" flex flex-wrap gap-2">
                        {record.holder.individuals.map((individual) => (
                            <span
                                key={individual}
                                className="rounded-full border border-zinc-200 px-3 py-2 text-sm leading-5 text-zinc-700"
                            >
                                {individual}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}