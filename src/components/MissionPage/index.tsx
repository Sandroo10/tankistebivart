import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AlertTriangle, ArrowLeft, CheckCircle2, Lightbulb, ListChecks, Loader2, Users } from "lucide-react";
import { MissionCompleteModal, RewardRail, TeamRequirement } from "@/components/ui/progression";
import { completedMissionIds, getMissionById, subjectLabels } from "@/lib/missions";

const MissionWorkspace: React.FC = () => {
  const { missionId } = useParams();
  const mission = getMissionById(missionId);
  const [completed, setCompleted] = useState(Boolean(mission && completedMissionIds.includes(mission.id)));
  const [showComplete, setShowComplete] = useState(false);
  const [solution, setSolution] = useState("");
  const [submissionError, setSubmissionError] = useState("");
  const [queueing, setQueueing] = useState(mission?.mode === "collaborative");

  if (!mission) {
    return (
      <main className="grid min-h-[60vh] place-items-center">
        <section className="max-w-xl rounded-3xl border border-white/10 bg-slate-900 p-8 text-center">
          <AlertTriangle className="mx-auto text-amber-300" size={36} />
          <h1 className="mt-4 text-3xl font-bold text-white">Mission not found</h1>
          <p className="mt-3 text-slate-300">This route is valid, but the mission id does not exist in the catalogue.</p>
          <Link to="/missions" className="mt-6 inline-flex rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
            Return to missions
          </Link>
        </section>
      </main>
    );
  }

  const completeMission = () => {
    if (!solution.trim()) {
      setSubmissionError("Add your solution before completing the mission.");
      return;
    }

    setSubmissionError("");
    setCompleted(true);
    setShowComplete(true);
  };

  if (queueing) {
    return (
      <main className="pt-6">
        <Link
          to="/missions"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-sm font-bold text-slate-100 shadow-lg shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
          aria-label="Back to missions"
        >
          <ArrowLeft size={18} />
          Missions
        </Link>
        <div className="grid min-h-[70vh] place-items-center">
        <section className="w-full max-w-2xl rounded-[2rem] border border-cyan-300/20 bg-slate-900/90 p-8 text-center shadow-2xl shadow-cyan-950/30">
          <div className="mx-auto grid size-24 place-items-center rounded-[2rem] border border-cyan-300/30 bg-cyan-300/10">
            <Loader2 className="size-14 animate-spin text-cyan-300 drop-shadow-[0_0_14px_rgba(103,232,249,0.8)] motion-reduce:animate-none" aria-hidden="true" />
          </div>
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Joining queue</p>
          <h1 className="mt-3 text-3xl font-black text-white">{mission.title}</h1>
          <p className="mt-3 text-slate-300">
            Matching the required party before the collaborative mission opens.
          </p>
          <div className="mt-5 flex justify-center">
            <TeamRequirement mission={mission} />
          </div>
          <div className="mt-6 grid gap-3 rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-left sm:grid-cols-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Status</p>
              <p className="mt-1 font-semibold text-cyan-100">Searching</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Mission mode</p>
              <p className="mt-1 font-semibold text-white">Collaborative</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Party size</p>
              <p className="mt-1 font-semibold text-white">
                {(mission.teamRequirement?.assassin ?? 0) + (mission.teamRequirement?.bruiser ?? 0) + (mission.teamRequirement?.mage ?? 0)} learners
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setQueueing(false)}
              className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Users size={18} /> Preview workspace
            </button>
            <Link to="/missions" className="rounded-2xl border border-white/15 px-5 py-3 font-bold text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">
              Leave queue
            </Link>
          </div>
        </section>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-6">
      <Link
        to="/missions"
        className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-sm font-bold text-slate-100 shadow-lg shadow-black/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
        aria-label="Back to missions"
      >
        <ArrowLeft size={18} />
        Missions
      </Link>
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <article className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-left shadow-2xl shadow-black/30 md:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-bold text-cyan-100">{subjectLabels[mission.subject]}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold capitalize text-slate-200">{mission.difficulty}</span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-slate-200">{mission.estimatedMinutes} min</span>
            {completed ? <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-3 py-1 text-sm font-bold text-emerald-100"><CheckCircle2 size={16} /> Completed</span> : null}
          </div>
          <TeamRequirement mission={mission} />

          <h1 className="text-4xl font-black text-white md:text-5xl">{mission.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{mission.shortDescription}</p>

          <section className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5" aria-labelledby="objective-heading">
            <h2 id="objective-heading" className="flex items-center gap-2 text-xl font-bold text-white"><Lightbulb className="text-cyan-300" /> Learning objective</h2>
            <p className="mt-3 text-slate-300">{mission.learningObjective}</p>
          </section>

          <section className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5" aria-labelledby="task-heading">
            <h2 id="task-heading" className="text-xl font-bold text-white">Task prompt</h2>
            <p className="mt-3 rounded-2xl bg-slate-900 p-4 text-slate-200">{mission.taskPrompt}</p>
          </section>

          <section className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5" aria-labelledby="criteria-heading">
            <h2 id="criteria-heading" className="flex items-center gap-2 text-xl font-bold text-white"><ListChecks className="text-cyan-300" /> Success criteria</h2>
            <ul className="mt-4 space-y-3">
              {mission.successCriteria.map((criterion) => (
                <li key={criterion} className="flex gap-3 text-slate-300">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={18} aria-hidden="true" />
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-6 rounded-3xl border border-white/10 bg-slate-950/60 p-5" aria-labelledby="solution-heading">
            <h2 id="solution-heading" className="text-xl font-bold text-white">Your solution</h2>
            <p className="mt-2 text-sm text-slate-400">
              Write your working, explanation, code, or final answer here. This keeps the mission workspace self-contained.
            </p>
            <form
              className="mt-4 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                completeMission();
              }}
            >
              <label htmlFor="mission-solution" className="sr-only">Mission solution</label>
              <textarea
                id="mission-solution"
                value={solution}
                onChange={(event) => {
                  setSolution(event.target.value);
                  if (submissionError) setSubmissionError("");
                }}
                rows={9}
                className="w-full resize-y rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/40"
                placeholder="Type your solution, reasoning, or code here..."
                aria-describedby={submissionError ? "solution-error" : undefined}
              />
              {submissionError ? (
                <p id="solution-error" className="rounded-2xl border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-sm font-semibold text-amber-100">
                  {submissionError}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={completed}
                className="rounded-2xl bg-cyan-300 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed disabled:bg-emerald-300"
              >
                {completed ? "Solution submitted" : "Submit solution"}
              </button>
            </form>
          </section>

          <details className="mt-6 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-left">
            <summary className="cursor-pointer font-bold text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300">Show hint</summary>
            <p className="mt-3 text-slate-200">{mission.hint}</p>
          </details>
        </article>

        <div className="hidden lg:block">
          <RewardRail mission={mission} completed={completed} onComplete={completeMission} />
        </div>

        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 p-3 backdrop-blur lg:hidden">
          <button
            type="button"
            onClick={completeMission}
            disabled={completed}
            className="w-full rounded-2xl bg-cyan-300 px-4 py-3 font-bold text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:bg-emerald-300"
          >
            {completed ? "Mission complete" : `Complete for ${mission.rewards.xp} XP`}
          </button>
        </div>
      </div>

      <MissionCompleteModal mission={mission} open={showComplete} onClose={() => setShowComplete(false)} />
    </main>
  );
};

export default MissionWorkspace;
