import LogoNav from "../logo/LogoNav";
import WrapLinks from "../wrapLinks/WrapLinks";
import styles from "./navMobileDesktop.module.css";

const NavDesktopAndTablet = ({
  width,
  handlClick,
}: {
  handlClick: () => void;
  width: number;
}) => {
  return (
    <>
      <div className={styles.nav__wrap__logo}>
        <LogoNav />
        {width > 1080 && <Line />}
      </div>
      <WrapLinks handleClick={handlClick} />
    </>
  );
};

export default NavDesktopAndTablet;

const Line = () => <div className={styles.nav__line}></div>;
