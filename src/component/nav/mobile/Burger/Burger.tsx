import styles from "./burger.module.css";

const Burger = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  return (
    <div onClick={setIsOpen} className={styles.nav__burger}>
      <img
        src={isOpen ? "/shared/icon-close.svg" : "/shared/icon-hamburger.svg"}
      />
    </div>
  );
};

export default Burger;
