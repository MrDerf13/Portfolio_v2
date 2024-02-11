import styles from "./SkillCard.module.scss";

const SkillCard = ({ path, altText }) => {
  return (
    <article className={styles.card}>
      <img src={path} alt={altText} />
      <br />
      <span>{altText.toUpperCase()}</span>
    </article>
  );
};

export default SkillCard;
