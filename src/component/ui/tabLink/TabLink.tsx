import { HTMLAttributes } from "react";
import styles from "./tabLink.module.css";

type TabLinkProps = {
  name: string;
  isActive: boolean;
} & HTMLAttributes<HTMLDivElement>;

const TabLink = ({ name, isActive }: TabLinkProps) => {
  return (
    <div className={styles.wrap__link}>
      <span className={styles.tab__Link}>{name}</span>
      <div
        className={`${styles.tab__link__underline} ${
          isActive && styles.tab__link__underline__active
        }`}
      ></div>
    </div>
  );
};

export default TabLink;
