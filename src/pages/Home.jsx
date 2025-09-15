import React, { useEffect, useState } from "react";
import axios from "axios";
import Map from "../component/Map.jsx";
import MemojiTiltCorrected from "../component/MemojiTiltCorrected.jsx";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../component/Loader.jsx";
import Navbar from "../component/NavBar.jsx";
import FluidCanvas from "../canvas/FluidCanvas.jsx";
import TopSection from "../sections/TopSection.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ProjectsSection from "../sections/ProjectSection.jsx";
import SkillsSection from "../sections/SkillSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import FooterSection from "../sections/FooterSection.jsx";

function Home() {
  const [about, setAbout] = useState({});
  const [project, setProject] = useState([]);
  const [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://portfolio-backend-1bch.onrender.com";
  // const url = "http://localhost:5002";
  const getContent = async () => {
    try {
      const aboutRes = await axios.get(`${url}/api/content/about`);
      setAbout(aboutRes.data[0]);

      const projectRes = await axios.get(`${url}/api/content/project`);
      setProject(projectRes.data);

      const skillRes = await axios.get(`${url}/api/content/skill`);
      setSkill(skillRes.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getContent();
    AOS.init({
      duration: 1200,

      easing: "ease-in-out",
    });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-blue-500 animate-ping"></div>
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-blue-700 opacity-75"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* Top Section */}
      <Navbar />
      <TopSection about={about} />

      {/* About Section */}
      <AboutSection about={about} />

      {/* Projects Section */}
      <ProjectsSection project={project} />

      {/* Skills Section */}
      <SkillsSection skill={skill} />
      {/* Contact Section */}
      <ContactSection about={about} />

      {/* Footer */}
      {/* <FooterSection about={about} /> */}
    </div>
  );
}

export default Home;
