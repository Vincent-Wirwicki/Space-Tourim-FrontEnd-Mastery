import styles from "./mainNav.module.css";
import useOnResize from "../../hooks/useOnResize";
import NavMobile from "./mobile/MobileNav";
import NavDesktopAndTablet from "./DesktopAndTablet/NavDesktopAndTablet";
import { useState } from "react";

const MainNav = () => {
  const width = useOnResize();
  const [isOpen, setIsOpen] = useState(false);
  
  const handlClick = () => {
    if (width > 426) return;
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      {width > 425 ? (
        <NavDesktopAndTablet width={width} handlClick={handlClick} />
      ) : (
        <NavMobile handleClick={handlClick} isOpen={isOpen} />
      )}
    </nav>
  );
};

export default MainNav;
