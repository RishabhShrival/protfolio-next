import ProjectCard from "./miniElements/ProjectCards";
import "./pagesLayout.css";
import "../globals.css";
import "./projects.css";

const Projects = () => {
  const data = require("../../../public/variable_assets/Project.json");
  return (
    <section id="projects">
      <h1 id="title">Projects</h1>
      <div className="Projectmainframe">
      {Object.entries(data).map(([key,value],index) => (
        <ProjectCard key={index} data={value}/>
      ))
    } 
    </div>
    </section>
  );
};

export default Projects;
