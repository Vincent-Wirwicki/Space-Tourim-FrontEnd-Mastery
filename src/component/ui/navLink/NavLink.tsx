import { Link, useRoute } from "wouter";
import styles from "./navLink.module.css";

const NavLink = ({
  id,
  path,
  title,
  onClick,
}: {
  id: number;
  path: string;
  title: string;
  onClick: () => void;
}) => {
  const [isMatch] = useRoute(path);
  return (
    <Link
      to={path}
      className={`${styles.wrap__link}  text-preset-8`}
      onClick={onClick}
    >
      <span className={styles.nav__link__bold}>0{id}</span> <span>{title}</span>
      <div
        className={`${styles.nav__link__underline} ${
          isMatch && styles.nav__link__underline__active
        }`}
      ></div>
    </Link>
  );
};

export default NavLink;
