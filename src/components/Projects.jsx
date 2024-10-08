import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "Lively - Bus Tracking System",
      des: "Lively is a Real Time Bus Tracking system that allows user to track a bus real live location, It includes 2 mobile Apps implemented using React Native and Admin dashboard using MERN ",
      mission: "Real Time Tracking",
      language: "React JS, Node JS, MongoDB, React Native, Socket IO",
      images: "imgs/lively.png",
      link: "https://github.com/realAhsan/FYP",
    },
    {
      name: "Maxflow - Task Managemennt System",
      des: "Task Management System using MERN. it Allows user to  Add, edit, and delete tasks and drag and drop tasks to changes their status on Scrum board ",
      mission: "Back-end Developer, system analysis and design",
      language: "React JS, Node JS, MongoDB,  ShadeCn",
      images: "imgs/webflow.png",
      link: "https://max-flow.vercel.app",
    },
    {
      name: "Xcribe",
      des: "Xcribe allows users to seamlessly transcribe and translate audio into text with ease.",
      mission:
        "Machine Learning algorithm implementation, system analysis and design",
      language: "HTML5, CSS3, REACT JS, Tailwind CSS ",
      images: "imgs/xcribe.png",
      link: "https://xcribe.netlify.app/",
    },
    {
      name: "HomeTutor Plus",
      des: "A Landing page for Home Tutor Service ",
      mission: "UI Design and Implementation",
      language: "HTML5, CSS3, Tailwind CSS ",
      images: "imgs/hometut.png",
      link: "https://home-tutor-plus.netlify.app/",
    },
    {
      name: "SHOP.LY",
      des: "A simple Shopping Website with functional cart functionality ",
      mission: "Functional cart Implementation",
      language: "HTML5, CSS3, Tailwind CSS, Axios",
      images: "imgs/cart.png",
      link: "https://shop-ly.netlify.app/",
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Featured Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Welcome to my projects showcase! Each project highlights my skills in
        software development, design, and problem-solving. I’m proud of the work
        I’ve done and excited to share it with you. Explore my projects and see
        how I can bring innovative solutions to your needs.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <a
                target="_blank"
                href={value.link}
                style={{
                  textDecoration: "none",
                }}
                className="project-name"
              >
                <h3>{value.name}</h3>
              </a>

              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Technologies</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Projects;
