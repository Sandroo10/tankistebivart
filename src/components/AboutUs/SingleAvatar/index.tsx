import React from "react";

interface ProfileCardProps {
  avatar: string;
  name: string;
  position: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ avatar, name, position, description }) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-2xl shadow-lg w-96 text-center">
      <img src={avatar} alt={name} className="rounded-full mb-3 h-36 w-36" />
      <h2 className="text-lg font-semibold text-white">{name}</h2>
      <p className="text-sm text-gray-500">{position}</p>
      <p className="text-xs text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ProfileCard;