import React, { useMemo, useState } from "react";
import { AlertCircle } from "lucide-react";
import { MissionCard } from "@/components/ui/progression";
import { completedMissionIds, missions, subjectLabels, type Subject } from "@/lib/missions";

const filters: Array<Subject | "all"> = ["all", "coding", "maths", "physics"];

const Missions: React.FC = () => {
  const [subject, setSubject] = useState<Subject | "all">("all");
  const visibleMissions = useMemo(() => missions.filter((mission) => subject === "all" || mission.subject === subject), [subject]);

  return (
    <main className="space-y-8 pt-6">
      <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-left md:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Mission catalogue</p>
        <h1 className="mt-3 text-4xl font-black text-white">Pick a task with clear rewards before you enter.</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Every mission shows subject, difficulty, time, XP, and class attributes up front so progression is easy to track.
        </p>
        <div className="mt-6 flex flex-wrap gap-2" aria-label="Mission subject filters">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSubject(item)}
              className={`rounded-full px-4 py-2 text-sm font-bold capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${subject === item ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-slate-200 hover:bg-white/15"}`}
              aria-pressed={subject === item}
            >
              {item === "all" ? "All" : subjectLabels[item]}
            </button>
          ))}
        </div>
      </section>

      {visibleMissions.length === 0 ? (
        <section className="rounded-3xl border border-white/10 bg-slate-900 p-8 text-center">
          <AlertCircle className="mx-auto text-cyan-300" />
          <h2 className="mt-4 text-xl font-bold text-white">No missions in this subject yet</h2>
          <p className="mt-2 text-slate-300">Switch subjects to keep progressing.</p>
        </section>
      ) : (
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" aria-label="Available missions">
          {visibleMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} completed={completedMissionIds.includes(mission.id)} />
          ))}
        </section>
      )}
    </main>
  );
};

export default Missions;
