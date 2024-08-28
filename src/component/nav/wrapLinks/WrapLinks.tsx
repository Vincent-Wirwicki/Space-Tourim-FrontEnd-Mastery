import NavLink from "../../ui/navLink/NavLink";
import styles from "./wrapLink.module.css";

const WrapLinks = ({ handleClick }: { handleClick: () => void }) => {
  const paths = [
    { path: "/", title: "Home" },
    { path: "/destination", title: "Destination" },
    { path: "/crew", title: "Crew" },
    { path: "/technology", title: "Technology" },
  ];
  return (
    <div className={styles.nav__wrap__links}>
      {paths.map(({ path, title }, i) => (
        <NavLink
          key={`${title} ${i}`}
          id={i}
          path={path}
          title={title}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default WrapLinks;
