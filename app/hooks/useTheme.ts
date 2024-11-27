import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export type UseThemeProps = {
  initialTheme?: Theme;
};

export const getTheme = (request: Request) => {
  const cookieHeader = request.headers.get("cookie");
  const match = cookieHeader?.match(/theme=(\w+)/);
  return match ? match[1] : "light";
};
export function useTheme({ initialTheme }: UseThemeProps) {
  const isDarkOS = useMediaQuery("(prefers-color-scheme: dark)");
  const osTheme: Theme = isDarkOS ? "dark" : "light";
  const [theme, setTheme] = useState(initialTheme ?? osTheme);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    // Set cookie for persistence
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000`;
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return { toggleTheme, theme };
}
