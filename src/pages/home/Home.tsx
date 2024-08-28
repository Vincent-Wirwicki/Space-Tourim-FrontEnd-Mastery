import LeadText from "../../component/text/LeadText";
import Button from "../../component/ui/button/Button";
import styles from "./home.module.css";

const Home = () => {
  const data = {
    title: "space",
    subTitle: "so you want to travel to",
    leadText:
      "Let’s face it; if you want to go to space, you might as we genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
  };

  return (
    <>
      <div className={`${styles.url} img__bg`} />
      <section className={styles.hero}>
        <div className={styles.hero__wrap}>
          <h3 className="text-preset-5" style={{ color: "var(--blue-300)" }}>
            {data.subTitle}
          </h3>
          <h1 className={`${styles.hero__title} text-preset-1`}>
            {data.title}
          </h1>
          <LeadText text={data.leadText} />
        </div>
        <div className={`${styles.hero__wrap} ${styles.hero__btn}`}>
          <Button title="explore" />
        </div>
      </section>
    </>
  );
};

export default Home;
