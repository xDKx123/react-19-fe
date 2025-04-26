import { rspack } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default {
  plugins: [pluginReact()],
  mode: 'development',
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/,
        type: 'css',
      },
    ],
  },
  tools: {
    rspack: {
      plugins: [
        new rspack.DefinePlugin({
          'process.env': JSON.stringify(process.env),
        }),
          new rspack.SourceMapDevToolPlugin({}),
      ],
    },
  },
};
