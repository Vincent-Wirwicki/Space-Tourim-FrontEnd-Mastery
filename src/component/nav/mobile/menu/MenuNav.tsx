import styles from "./menuNav.module.css";
import WrapLinks from "../../wrapLinks/WrapLinks";

const MenuNav = ({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) => {
  return (
    <div
      className={styles.nav__mobile__menu}
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <WrapLinks handleClick={handleClick} />
    </div>
  );
};

export default MenuNav;
