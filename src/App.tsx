import React from "react";
import { Route, Routes as Router } from "react-router-dom"; 
import Layout from "@/components/Layout";
import Home from "@/components/HomePage";
import Missions from "@/components/Missions";
import Profile from "@/components/Profile";
import MathPage from "./components/MissionPage";
import ImageCard from "./components/MissionPageCollab";
import AboutUs from "@/components/AboutUs"


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

const App: React.FC = () => {

  return (
    <Router>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/products" element={<Missions />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/mathtask" element={<MathPage />}></Route>
        <Route path="/collab" element={<ImageCard />}></Route>
        <Route path="/about" element={<AboutUs profiles={profiles} />}></Route>
      </Route>
    </Router>
  )
}

export default App
