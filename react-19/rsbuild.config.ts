import { rspack } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default {
  plugins: [pluginReact()],
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['postcss-loader'],
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
      ],
    },
  },
};
