import { useMediaQuery } from "@mantine/hooks";
import config from "../../tailwind.config";
export const useMobile = () => {
  return useMediaQuery(`(max-width: ${config.theme.screens.sm})`);
};
