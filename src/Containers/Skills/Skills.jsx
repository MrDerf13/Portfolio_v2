import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.scss";
import globalstyles from "../../App.module.scss";
import { skills } from "../../Helpers/js_helpers";

const Skills = () => {
  return (
    <section className={globalstyles.section}>
      <h2>Skills</h2>
      <div className={styles.gallery}>
        {skills.map((skill, index) => (
          <SkillCard path={skill.img} altText={skill.name} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
