import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function webpackDevServer({
  port,
}: BuildOptions): DevServerConfiguration {
  return {
    open: true,
    port: port ?? 3000,
    historyApiFallback: true,
    hot: true,
  };
}
