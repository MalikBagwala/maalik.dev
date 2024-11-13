import { useMediaQuery } from "@mantine/hooks";
import resolvedConfig from "~/utils/tailwindConfig";
export const useMobile = () => {
  return useMediaQuery(`(max-width: ${resolvedConfig.theme.screens.sm})`);
};
