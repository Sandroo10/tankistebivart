import { Link } from "react-router-dom";
import { Award, CheckCircle2, Clock, Star, Trophy, Users, X } from "lucide-react";
import type { Mission, Rewards, Subject } from "@/lib/missions";
import { subjectLabels } from "@/lib/missions";

const attributeMeta = {
  assassin: { label: "Assassin", color: "bg-emerald-400", text: "text-emerald-200" },
  bruiser: { label: "Bruiser", color: "bg-rose-400", text: "text-rose-200" },
  mage: { label: "Mage", color: "bg-sky-400", text: "text-sky-200" }
} as const;

const subjectStyles: Record<Subject, string> = {
  coding: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
  maths: "border-amber-300/30 bg-amber-300/10 text-amber-100",
  physics: "border-violet-300/30 bg-violet-300/10 text-violet-100"
};

export const ProgressBar = ({ label, value, max }: { label: string; value: number; max: number }) => {
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{label}</span>
        <span className="text-slate-400">{value}/{max}</span>
      </div>
      <div
        className="h-3 overflow-hidden rounded-full bg-slate-900 ring-1 ring-white/10"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <div className="h-full rounded-full bg-cyan-300 transition-[width] duration-500 motion-reduce:transition-none" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

export const AttributeMeter = ({ type, value, max = 120 }: { type: keyof Omit<Rewards, "xp">; value: number; max?: number }) => {
  const meta = attributeMeta[type];
  const percent = Math.min(100, Math.round((value / max) * 100));

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className={`text-sm font-semibold ${meta.text}`}>{meta.label}</span>
        <span className="text-sm text-slate-300">{value} pts</span>
      </div>
      <div
        className="h-2.5 overflow-hidden rounded-full bg-slate-950"
        role="meter"
        aria-label={`${meta.label} attribute`}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={value}
      >
        <div className={`h-full rounded-full ${meta.color} transition-[width] duration-500 motion-reduce:transition-none`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
};

export const ClassBadge = ({ className, points }: { className: string; points: number }) => (
  <div className="inline-flex items-center gap-3 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-3 text-left shadow-[0_0_40px_rgba(34,211,238,0.12)]">
    <span className="grid size-11 place-items-center rounded-xl bg-cyan-300 text-slate-950" aria-hidden="true">
      <Trophy size={22} />
    </span>
    <span>
      <span className="block text-xs uppercase tracking-[0.18em] text-cyan-100/80">Current class</span>
      <span className="block text-lg font-bold text-white">{className}</span>
      <span className="block text-sm text-slate-300">{points} leading points</span>
    </span>
  </div>
);

const RewardChips = ({ rewards }: { rewards: Rewards }) => (
  <div className="flex flex-wrap gap-2 text-xs font-semibold">
    <span className="rounded-full bg-cyan-300 px-2.5 py-1 text-slate-950">+{rewards.xp} XP</span>
    <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-emerald-100">A +{rewards.assassin}</span>
    <span className="rounded-full bg-rose-400/15 px-2.5 py-1 text-rose-100">B +{rewards.bruiser}</span>
    <span className="rounded-full bg-sky-400/15 px-2.5 py-1 text-sky-100">M +{rewards.mage}</span>
  </div>
);

export const TeamRequirement = ({ mission }: { mission: Mission }) => {
  if (mission.mode !== "collaborative" || !mission.teamRequirement) return null;

  return (
    <div className="flex flex-wrap gap-2 text-xs font-semibold" aria-label="Required party composition">
      <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-slate-100">
        <Users size={14} /> Collaborative
      </span>
      <span className="rounded-full bg-emerald-400/15 px-2.5 py-1 text-emerald-100">Assassin x{mission.teamRequirement.assassin}</span>
      <span className="rounded-full bg-rose-400/15 px-2.5 py-1 text-rose-100">Bruiser x{mission.teamRequirement.bruiser}</span>
      <span className="rounded-full bg-sky-400/15 px-2.5 py-1 text-sky-100">Mage x{mission.teamRequirement.mage}</span>
    </div>
  );
};

export const MissionCard = ({ mission, completed = false }: { mission: Mission; completed?: boolean }) => (
  <Link
    to={`/missions/${mission.id}`}
    className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-left shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
  >
    <div className="mb-4 flex items-center justify-between gap-3">
      <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${subjectStyles[mission.subject]}`}>{subjectLabels[mission.subject]}</span>
      {completed ? <CheckCircle2 className="text-emerald-300" aria-label="Completed" size={20} /> : null}
    </div>
    <h3 className="text-xl font-bold text-white">{mission.title}</h3>
    <p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{mission.shortDescription}</p>
    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-400">
      <span className="capitalize">{mission.difficulty}</span>
      <span className="inline-flex items-center gap-1"><Clock size={15} /> {mission.estimatedMinutes} min</span>
    </div>
    <div className="mt-4">
      <TeamRequirement mission={mission} />
    </div>
    <div className="mt-4">
      <RewardChips rewards={mission.rewards} />
    </div>
  </Link>
);


export const RewardRail = ({ mission, completed, onComplete }: { mission: Mission; completed: boolean; onComplete: () => void }) => (
  <aside className="sticky top-28 rounded-3xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl shadow-black/30 lg:max-h-[calc(100vh-8rem)]">
    <h2 className="flex items-center gap-2 text-lg font-bold text-white"><Award className="text-cyan-300" /> Rewards</h2>
    <div className="mt-4"><RewardChips rewards={mission.rewards} /></div>
    <div className="mt-6 space-y-3">
      <div className={`rounded-2xl border p-4 ${completed ? "border-emerald-300/30 bg-emerald-300/10" : "border-amber-300/30 bg-amber-300/10"}`}>
        <p className={`text-sm font-bold ${completed ? "text-emerald-100" : "text-amber-100"}`}>
          {completed ? "Complete" : "Not complete"}
        </p>
        <p className="mt-1 text-sm text-slate-300">
          Submit a solution from the workspace to claim these rewards.
        </p>
      </div>
      <AttributeMeter type="assassin" value={mission.rewards.assassin} max={40} />
      <AttributeMeter type="bruiser" value={mission.rewards.bruiser} max={40} />
      <AttributeMeter type="mage" value={mission.rewards.mage} max={40} />
    </div>
    <button
      type="button"
      onClick={onComplete}
      className="mt-6 w-full rounded-2xl bg-cyan-300 px-4 py-3 font-bold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:bg-emerald-300 motion-reduce:transition-none"
      disabled={completed}
    >
      {completed ? "Mission complete" : "Mark complete"}
    </button>
  </aside>
);

export const MissionCompleteModal = ({ mission, open, onClose }: { mission: Mission; open: boolean; onClose: () => void }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/80 p-4" role="dialog" aria-modal="true" aria-labelledby="complete-title">
      <div className="w-full max-w-md rounded-3xl border border-cyan-300/30 bg-slate-900 p-6 text-left shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div className="grid size-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
            <Star />
          </div>
          <button type="button" onClick={onClose} className="rounded-full p-2 text-slate-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300" aria-label="Close completion dialog">
            <X size={18} />
          </button>
        </div>
        <h2 id="complete-title" className="mt-5 text-2xl font-bold text-white">Mission complete</h2>
        <p className="mt-3 text-slate-300">{mission.completionMessage}</p>
        <div className="mt-5"><RewardChips rewards={mission.rewards} /></div>
      </div>
    </div>
  );
};
