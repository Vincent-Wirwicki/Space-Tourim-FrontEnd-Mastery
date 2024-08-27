import styles from "./button.module.css";

const Button = ({ title }: { title: string }) => {
  return <button className={`${styles.button} text-preset-4`}>{title}</button>;
};

export default Button;
