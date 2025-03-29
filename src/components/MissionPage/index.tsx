import React from "react";
import MathTask from "./TaskAndExplanation";
import SolutionComponent from "./Terminal";

const MathPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center space-y-8 p-4">
      <MathTask />
      <SolutionComponent />
    </div>
  );
};

export default MathPage;
