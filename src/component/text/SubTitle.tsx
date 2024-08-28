import styles from "./subTitle.module.css";

const SubTitle = ({ text, num }: { text: string; num?: string }) => {
  return (
    <h2 className={`${styles.subTitle}  text-preset-5`}>
      {num && <span className={`${styles.subTitle__number}`}>{num}</span>}
      {text}
    </h2>
  );
};

export default SubTitle;
