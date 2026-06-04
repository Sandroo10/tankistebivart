import React from "react";
import { Award, Medal, ScrollText } from "lucide-react";
import { AttributeMeter, ClassBadge, ProgressBar } from "@/components/ui/progression";
import { completedMissionIds, getClassFromRewards, getRewardsTotal, missions, subjectLabels, type Subject } from "@/lib/missions";
import AssassinAvatar from "@/assets/ninja.png";
import BruiserAvatar from "@/assets/swordsman.png";
import MageAvatar from "@/assets/wizard.png";

const subjects: Subject[] = ["coding", "maths", "physics"];

const classAvatars = {
  Assassin: AssassinAvatar,
  Bruiser: BruiserAvatar,
  Mage: MageAvatar
};

const ProfilePage: React.FC = () => {
  const rewards = getRewardsTotal();
  const currentClass = getClassFromRewards(rewards);
  const completedMissions = missions.filter((mission) => completedMissionIds.includes(mission.id));
  const profileAvatar = classAvatars[currentClass.label];

  return (
    <main className="space-y-8 pt-6">
      <section className="grid gap-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-left shadow-2xl shadow-black/30 md:grid-cols-[220px_1fr] md:p-8">
        <div className="flex items-center gap-4 md:block">
          <img src={profileAvatar} alt={`${currentClass.label} class avatar`} className="size-24 rounded-3xl border border-cyan-300/30 object-cover md:size-44" />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">Progression dashboard</p>
          <h1 className="mt-2 text-4xl font-black text-white">Sandro</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            Class identity updates from your strongest attribute total. Complete balanced missions to unlock a broader build.
          </p>
          <div className="mt-6">
            <ClassBadge className={currentClass.label} points={rewards[currentClass.key]} />
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3" aria-label="Attribute meters">
        <AttributeMeter type="assassin" value={rewards.assassin} />
        <AttributeMeter type="bruiser" value={rewards.bruiser} />
        <AttributeMeter type="mage" value={rewards.mage} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-left">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><ScrollText className="text-cyan-300" /> Subject mastery</h2>
          <div className="mt-5 space-y-5">
            {subjects.map((subject) => {
              const total = missions.filter((mission) => mission.subject === subject).length;
              const completed = completedMissions.filter((mission) => mission.subject === subject).length;
              return <ProgressBar key={subject} label={subjectLabels[subject]} value={completed} max={total} />;
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-left">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white"><Medal className="text-cyan-300" /> Achievements</h2>
          <div className="mt-5 grid gap-3">
            {["First Clear", "Vector Initiate", "Semantic Scout"].map((badge) => (
              <div key={badge} className="flex items-center gap-3 rounded-2xl bg-slate-950/60 p-4">
                <Award className="text-cyan-300" aria-hidden="true" />
                <span className="font-semibold text-white">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 text-left">
        <h2 className="text-2xl font-bold text-white">Recent mission history</h2>
        <div className="mt-5 divide-y divide-white/10">
          {completedMissions.map((mission) => (
            <article key={mission.id} className="flex flex-col justify-between gap-3 py-4 md:flex-row md:items-center">
              <div>
                <h3 className="font-bold text-white">{mission.title}</h3>
                <p className="text-sm text-slate-400">{subjectLabels[mission.subject]} · {mission.difficulty}</p>
              </div>
              <p className="font-bold text-cyan-200">+{mission.rewards.xp} XP</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
