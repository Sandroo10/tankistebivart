import React from 'react';

interface MissionCardProps {
  mission:string;  
  title: string;
  description: string;
  certificate: string;
  difficulty: string;
  hours: string;
  id:number;
}

const MissionCard: React.FC<MissionCardProps> = ({ mission, title, description, certificate, difficulty, hours }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-80 relative transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-700">
      <div className="absolute -left-2 -top-2 bg-blue-100 text-blue-600 rounded-tl-2xl rounded-br-2xl px-3 py-1 text-xs font-semibold">
        {mission}
      </div>
      <div className='h-1/3'>
      <h2 className="text-xl font-bold mt-6">{title}</h2>
      <p className="text-gray-600 mb-auto">{description}</p>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className='h-1/2'>
      <p className="text-gray-800 font-semibold mt-1"> <span className="font-bold">{certificate}</span></p>
      <p className="text-gray-800 font-semibold mt-1">{difficulty} </p>
      <span className="font-bold"> Time to complete this task: {hours}</span>
      </div>
    </div>
  );
};

export default MissionCard;
