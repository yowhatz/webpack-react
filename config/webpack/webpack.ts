import { Configuration } from "webpack";
import { webpackDevServer } from "./webpackDevServer";
import { webpackLoaders } from "./webpackLoaders";
import { webpackPlugins } from "./webpackPlugins";
import { webpackResolvers } from "./webpackResolvers";
import { BuildOptions } from "./types/types";

export function webpack(options: BuildOptions): Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },

    plugins: webpackPlugins(options),

    module: {
      rules: webpackLoaders(options),
    },

    resolve: webpackResolvers(options),

    devtool: isDev && "inline-source-map",

    devServer: isDev ? webpackDevServer(options) : undefined,
  };
}
