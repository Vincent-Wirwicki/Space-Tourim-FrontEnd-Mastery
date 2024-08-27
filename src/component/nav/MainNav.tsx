import styles from "./mainNav.module.css";
import NavLink from "../ui/navLink/NavLink";
import useOnResize from "../../hooks/useOnResize";
import { useState } from "react";

const MainNav = () => {
  const width = useOnResize();
  return (
    <nav className={styles.nav}>
      {width > 425 ? <NavDesktopAndTablet width={width} /> : <NavMobile />}
    </nav>
  );
};

export default MainNav;

const NavDesktopAndTablet = ({ width }: { width: number }) => {
  return (
    <>
      <div className={styles.nav__wrap__logo}>
        <LogoNav />
        {width > 1080 && <Line />}
      </div>
      <NavLinks />
    </>
  );
};

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LogoNav />
      <Burger isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

const Burger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <img className={styles.nav__burger} src="/shared/icon-close.svg" />
      ) : (
        <img className={styles.nav__burger} src="/shared/icon-hamburger.svg" />
      )}
    </div>
  );
};

const NavMobileMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={styles.nav__mobile__menu}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <NavLinks />
    </div>
  );
};

const NavLinks = () => {
  const paths = [
    { path: "/", title: "Home" },
    { path: "/destination", title: "Destination" },
    { path: "/crew", title: "Crew" },
    { path: "/technology", title: "Technology" },
  ];
  return (
    <div className={styles.nav__wrap__links}>
      {paths.map(({ path, title }, i) => (
        <NavLink key={`${title} ${i}`} id={i} path={path} title={title} />
      ))}
    </div>
  );
};

const LogoNav = () => {
  return <img className={styles.nav__logo} src="/shared/logo.svg" alt="logo" />;
};

const Line = () => {
  return <div className={styles.nav__line}></div>;
};
