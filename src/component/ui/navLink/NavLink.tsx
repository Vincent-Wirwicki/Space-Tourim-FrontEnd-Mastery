import { Link, useRoute } from "wouter";
import styles from "./navLink.module.css";

const NavLink = ({
  id,
  path,
  title,
}: {
  id: number;
  path: string;
  title: string;
}) => {
  const [isMatch] = useRoute(path);
  return (
    <Link to={path} className={`${styles.wrap__link}  text-preset-8`}>
      <span className={styles.nav__link__bold}>0{id}</span> <span>{title}</span>
      <div
        className={`${styles.nav__link__underline} ${
          isMatch && styles.nav__link__underline__active
        }`}
      />
    </Link>
  );
};

export default NavLink;
