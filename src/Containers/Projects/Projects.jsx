import globalstyles from "../../App.module.scss";
import { projects } from "../../Helpers/js_helpers";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={globalstyles.section}>
      <h2>Projects</h2>
      <div className={styles.gallery}>
        {projects.map((project, index) => (
          <ProjectCard obj={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
