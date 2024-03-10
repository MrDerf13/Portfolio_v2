import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ obj }) => {
  return (
    <article className={styles.wholeCard}>
      <img src={obj.img} alt={obj.name} className={styles.imgStyle} />
      <h3>{obj.name}</h3>
      <p>{obj.description}</p>
      <div>
        <a href={obj.link}>
          <img
            src="./src/assets/github.png"
            alt="Github"
            className={styles.gitImg}
          />
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
