import globalstyles from "../../App.module.scss";
import Contact from "../Contact/Contact";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.amSection}>
      <div className={styles.textSection}>
        <p>
          I’m Fred, an eager learner who has a passion for applying logic and
          problem solving. I have 6 years of corporate experience in the luxury
          goods industry from both a supply chain and finance standpoint
          specialising in process implementation and systems improvements. But
          now I find myself far more engaged with pursuing a career in tech.
        </p>
        <p>
          I’ve played both chess and soccer for several decades which have
          become key parts of who I am. I get great joy from doing crossword
          puzzles and similar word games. Most recently I’ve taken a keen
          enjoyment from cooking, creating new and interesting things (though I
          can’t fully vouch for their quality).
        </p>
      </div>
      <Contact style={false} />
      <img
        src="src\assets\fgprofilepic.jpg"
        alt="fred"
        className={styles.imgClass}
      />
    </section>
  );
};

export default AboutMe;
