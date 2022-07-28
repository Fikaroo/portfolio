import React from "react";
import CardItem from "./CardItem";
import projects from "../projects-data.json";

const Projects = () => {
  return (
    <div className="mt-16">
      <h1 className="text-center text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-white">
        Projects Portfolio
      </h1>
      <div className="mt-12 flex flex-wrap gap-20 justify-center">
        {projects.map((project,idX) => {
          return <CardItem key={idX} title={project.title} link={project.link} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
