import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/components/HomePage";
import Missions from "@/components/Missions";
import Profile from "@/components/Profile";
import MissionWorkspace from "@/components/MissionPage";
import AboutUs from "@/components/AboutUs";
import { missions } from "@/lib/missions";

const profiles = [
  {
    avatar: "/Sandro.jpeg",
    name: "Sandro Saralidze",
    position: "Front-End Developer",
    description: "TBC x USAID React graduate"
  },
  {
    avatar: "/Daviti.jpeg",
    name: "Davit Matiashvili",
    position: "Data analytics engineer",
    description: "Epam Data analytics engineering trainee"
  },
  {
    avatar: "/Temuri.jpg",
    name: "Temuri Dagundaridze",
    position: "Business manager",
    description: "KIU managment student with concetration in economics"
  },
  {
    avatar: "/Nikoloz.jpeg",
    name: "Nikoloz Kvinikadze",
    position: "DevOps Engineer",
    description: "Studied DevOps at CredoBank"
  },
  {
    avatar: "/Andria.jpg",
    name: "Andria Gvaramia",
    position: "iOS developer",
    description: "TBC x USAID iOS graduate"
  }
];

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="missions" element={<Missions />} />
      <Route path="missions/:missionId" element={<MissionWorkspace />} />
      <Route path="products" element={<Navigate to="/missions" replace />} />
      <Route path="profile" element={<Profile />} />
      <Route path="mathtask" element={<Navigate to={`/missions/${missions[0].id}`} replace />} />
      <Route path="collab" element={<Navigate to="/missions" replace />} />
      <Route path="about" element={<AboutUs profiles={profiles} />} />
    </Route>
  </Routes>
);

export default App;
