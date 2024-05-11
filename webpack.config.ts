import path from "path";
import type { Configuration } from "webpack";
import { webpack } from "./config/webpack/webpack";
import { BuildMode, BuildPaths } from "./config/webpack/types/types";

interface EnvVariables {
  mode: BuildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    public: path.resolve(__dirname, "public"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: Configuration = webpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths: paths,
  });

  return config;
};
