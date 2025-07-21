import React from "react";
import MathTask from "./TaskAndExplanation";
import SolutionComponent from "./Terminal";

const MathPage: React.FC = () => {
  return (
    <div className="min-h-screen max-w-3/4 flex flex-col items-center space-y-8 p-4 mt-8 m-auto">
      <MathTask />
      <SolutionComponent />
    </div>
  );
};

export default MathPage;
