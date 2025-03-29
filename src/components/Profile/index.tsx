import React from "react";
import Char1 from "@/assets/thief.png";
import Char2 from "@/assets/alchemy.png";
import Char3 from "@/assets/swordsman.png";
import Char4 from "@/assets/ninja.png";
import Char5 from "@/assets/wizard.png";

const ProfilePage: React.FC = () => {
  const username = "Sandro"; 
  const maxProgress = 300;

  const stats = [
    { image: Char1, value: 150 },
    { image: Char2, value: 200 },
    { image: Char3, value: 100 },
    { image: Char4, value: 250 },
    { image: Char5, value: 180 },
  ];

  const topStat = stats.reduce((prev, curr) =>
    curr.value > prev.value ? curr : prev
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <img src={topStat.image} alt="Profile" className="w-[200px] h-[200px] object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-2">{username}</h1>
      
      <div className="mt-6 w-1/2 space-y-4">
        {stats.map((stat, index) => {
          const progressPercentage = (stat.value / maxProgress) * 100;
          return (
            <div key={index} className="flex items-center">
              <img src={stat.image} alt={`Stat ${index + 1}`} className="w-[100px] h-[75px] object-cover rounded-lg mr-4" />
              <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
