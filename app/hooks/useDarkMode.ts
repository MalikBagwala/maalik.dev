import {
  useIsomorphicEffect,
  useLocalStorage,
  useMediaQuery,
} from "@mantine/hooks";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";
const LOCAL_STORAGE_KEY = "mantine-dark-mode";

type DarkModeOptions = {
  defaultValue?: boolean;
  localStorageKey?: string;
};

type DarkModeReturn = {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
  set: (value: boolean) => void;
};

export function useDarkMode(options: DarkModeOptions = {}): DarkModeReturn {
  const { defaultValue, localStorageKey = LOCAL_STORAGE_KEY } = options;

  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] = useLocalStorage({
    key: localStorageKey,
    defaultValue: defaultValue ?? isDarkOS ?? false,
  });

  // Update darkMode if OS preference changes
  useIsomorphicEffect(() => {
    if (isDarkOS !== isDarkMode) {
      setDarkMode(!!isDarkOS);
    }
  }, [isDarkOS]);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
    set: (value) => setDarkMode(value),
  };
}
