import { ReactNode } from "react";
import styles from "./mainSection.module.css";

const MainSection = ({ children }: { children: ReactNode }) => {
  return <section className={styles.content}>{children}</section>;
};

export default MainSection;
