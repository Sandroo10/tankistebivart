import React from 'react';
import SkillCard from '@/components/MissionsCards';
import { Link } from "react-router-dom";

const SkillPage: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 mt-9">
      <Link to="/mathtask">
      <SkillCard
        mission='SinglePLayer'
        title="Slay the dragon of Logarithms"
        description="Mathematics"
        certificate="Gives Samurai EXP"
        difficulty="Noob"
        hours={"15 minutes"}
        id={1}
      />
      </Link>
      <SkillCard
        mission='SinglePLayer'
        title="Build a site to defend aginst goblins"
        description="React"
        certificate="Gives mostly Bruiser EXP"
        difficulty="Intermediate"
        hours={"120 minutes"}
        id={2}
      />
      <Link to="/collab">
      <SkillCard    
        mission='MultiPlayer'
        title="Data Science with Python"
        description="Analyze data and build machine learning models"
        certificate="Collaborative"
        difficulty="Advanced"
        hours={"3 days"}
        id={3}
      />
      </Link>
    </div>
  );
};

export default SkillPage;
