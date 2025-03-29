import React from "react";
import ProfileCard from "./SingleAvatar";

interface ProfileCardProps {
  avatar: string;
  name: string;
  position: string;
  description: string;
}

const AboutUs: React.FC<{ profiles: ProfileCardProps[] }> = ({ profiles }) => {
  return (
    <div className="flex flex-col items-center space-y-8 mt-12">
      {/* Top row with 3 profiles */}
      <div className="flex justify-center gap-8">
        {profiles.slice(0, 3).map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>

      {/* Bottom row with 2 profiles centered under top three */}
      <div className="flex justify-center gap-16 mt-4">
        {profiles.slice(3, 5).map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
