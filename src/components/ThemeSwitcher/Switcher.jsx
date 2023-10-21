import useTheme from "../../Hook/hook";
import { BiSolidSun } from "react-icons/bi";
const Switcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <BiSolidSun />
    </button>
  );
};

export default Switcher;
