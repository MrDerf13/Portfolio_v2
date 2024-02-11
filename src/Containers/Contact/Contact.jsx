import globalstyles from "../../App.module.scss";
import styles from "./Contact.module.scss";

const Contact = ({ style }) => {
  const pageStyle = style ? styles.linksFooter : styles.linksHeader;
  return (
    <section className={globalstyles.section}>
      <div className={pageStyle}>
        <a
          className={styles.linkC}
          href="https://www.linkedin.com/in/frederick-giannone-798445137/"
        >
          <img src="src/assets/linkedin.png" alt="linkedin" />
          <span>LinkedIn</span>
        </a>

        <a className={styles.linkC} href="https://github.com/MrDerf13">
          <img src="src/assets/github.png" alt="github" />
          <span>GitHub</span>
        </a>

        <a className={styles.linkC} href="mailto: gia_fred@hotmail.com">
          <img src="src/assets/email.png" alt="email" />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
