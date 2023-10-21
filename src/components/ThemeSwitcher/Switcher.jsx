import useTheme from "../../Hook/hook";

const Switcher = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>
    Change Theme
    </button>;
};

export default Switcher;
