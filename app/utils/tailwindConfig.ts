import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const resolvedConfig = resolveConfig(tailwindConfig);

export default resolvedConfig;
