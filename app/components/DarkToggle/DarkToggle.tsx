import { useDarkMode } from "~/hooks/useDarkMode";

export default function DarkToggle() {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <button onClick={toggle}>
      {isDarkMode ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
