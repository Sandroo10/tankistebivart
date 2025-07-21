import React, { useState } from 'react';
import SkillCard from '@/components/MissionsCards';
import { Link } from "react-router-dom";

const SkillPage: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleUnavailableMission = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="relative flex flex-wrap justify-center gap-6 p-6 mt-9">

      {showAlert && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black border border-blue-500 text-[#00BFFF] px-6 py-3 rounded-lg shadow-[0_0_20px_#00BFFF] font-semibold sm:text-lg animate-pulse">
          Mission not yet available, adventurer!
        </div>
      )}

      <Link to="/mathtask">
        <SkillCard
          mission='SinglePLayer'
          title="Slay the dragon of Logarithms"
          description="Mathematics"
          certificate="Gives Samurai EXP"
          difficulty="Noob"
          hours="15 minutes"
          id={1}
        />
      </Link>

      <div onClick={handleUnavailableMission} className="cursor-pointer">
        <SkillCard
          mission='SinglePLayer'
          title="Build a site to defend against goblins"
          description="React"
          certificate="Gives mostly Bruiser EXP"
          difficulty="Intermediate"
          hours="120 minutes"
          id={2}
        />
      </div>

      <Link to="/collab">
        <SkillCard
          mission='MultiPlayer'
          title="Data Science with Python"
          description="Analyze data and build machine learning models"
          certificate="Collaborative"
          difficulty="Advanced"
          hours="3 days"
          id={3}
        />
      </Link>
    </div>
  );
};

export default SkillPage;
