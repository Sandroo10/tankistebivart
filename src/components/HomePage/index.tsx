import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, ChevronRight, Flame, Target } from "lucide-react";
import { AttributeMeter, ClassBadge, MissionCard, ProgressBar } from "@/components/ui/progression";
import { completedMissionIds, getClassFromRewards, getRewardsTotal, missions, subjectLabels, type Subject } from "@/lib/missions";

const subjects: Array<Subject | "all"> = ["all", "coding", "maths", "physics"];

const Home: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | "all">("all");
  const rewards = getRewardsTotal();
  const currentClass = getClassFromRewards(rewards);
  const filteredMissions = useMemo(
    () => missions.filter((mission) => selectedSubject === "all" || mission.subject === selectedSubject).slice(0, 6),
    [selectedSubject]
  );
  return (
    <main className="space-y-12">
      <section className="grid gap-6 pt-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-left shadow-2xl shadow-black/30 md:p-8">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-semibold text-cyan-100">
            <Flame size={16} /> Mission-based learning
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
            Build real skill through coding, maths, and physics missions.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Complete tasks, earn attributes, and let your strongest stat shape your class identity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/missions" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Browse missions <ChevronRight size={18} />
            </Link>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left">
          <ClassBadge className={currentClass.label} points={rewards[currentClass.key]} />
          <div className="mt-6 space-y-4">
            <ProgressBar label="Season progress" value={completedMissionIds.length} max={missions.length} />
            <AttributeMeter type="assassin" value={rewards.assassin} />
            <AttributeMeter type="bruiser" value={rewards.bruiser} />
            <AttributeMeter type="mage" value={rewards.mage} />
          </div>
        </div>
      </section>

      <section className="space-y-5" aria-labelledby="subject-heading">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="text-left">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200"><Target size={16} /> Mission board</p>
            <h2 id="subject-heading" className="mt-2 text-3xl font-bold text-white">Choose your next stat gain</h2>
          </div>
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter missions by subject">
            {subjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => setSelectedSubject(subject)}
                className={`rounded-full px-4 py-2 text-sm font-bold capitalize focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${selectedSubject === subject ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-slate-200 hover:bg-white/15"}`}
                aria-pressed={selectedSubject === subject}
              >
                {subject === "all" ? "All" : subjectLabels[subject]}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredMissions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} completed={completedMissionIds.includes(mission.id)} />
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 text-left md:grid-cols-3">
        {[
          ["Completed", completedMissionIds.length, "Missions cleared"],
          ["Catalogue", missions.length, "Live learning missions"],
          ["Focus", "Mage", "Highest current attribute"]
        ].map(([label, value, detail]) => (
          <div key={label} className="rounded-2xl bg-slate-950/60 p-5">
            <BookOpen className="mb-4 text-cyan-300" aria-hidden="true" />
            <p className="text-3xl font-black text-white">{value}</p>
            <p className="mt-1 text-sm font-semibold text-slate-300">{label}</p>
            <p className="text-sm text-slate-500">{detail}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
