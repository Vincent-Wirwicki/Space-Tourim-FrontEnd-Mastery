import LogoNav from "../logo/LogoNav";
import Burger from "./Burger/Burger";
import MenuNav from "./menu/MenuNav";

const NavMobile = ({
  handleClick,
  isOpen,
}: {
  handleClick: () => void;
  isOpen: boolean;
}) => {
  return (
    <>
      <LogoNav />
      <Burger isOpen={isOpen} setIsOpen={handleClick} />
      <MenuNav isOpen={isOpen} handleClick={handleClick} />
    </>
  );
};

export default NavMobile;
