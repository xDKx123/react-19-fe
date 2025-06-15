import path from "path";
import { rspack } from "@rspack/core";
import dotenv from "dotenv";
// import ReactRefreshPlugin from "@rspack/plugin-react";

dotenv.config({ path: path.resolve(new URL('.', import.meta.url).pathname, ".env.prod") });

export default {
    mode: "production",
    entry: "./src/index.tsx", // adjust if you use jsx instead of tsx
    output: {
        path: path.resolve(new URL('.', import.meta.url).pathname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        publicPath: "/", // important for react-router
    },
    devtool: false, // production build: no source maps (or use 'source-map' if you want)
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
        alias: {
            "@": path.resolve(new URL('.', import.meta.url).pathname, "src"),
        },
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: "builtin:swc-loader",
                exclude: /node_modules/,
                options: {
                    jsc: {
                        parser: {
                            syntax: "typescript",
                            tsx: true,
                            decorators: true,
                        },
                        transform: {
                            react: {
                                runtime: "automatic",
                                refresh: false,
                            },
                        },
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { importLoaders: 1 },
                    },
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset",
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new rspack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("development"),
            "process.env.PUBLIC_API_URL": JSON.stringify("http://localhost:8080"),
            "process.env.VERSION": JSON.stringify("1.0.0"),
        }),
        new rspack.HtmlRspackPlugin({
            template: "./public/index.html",
            inject: "body",
            minify: true,
            title: "test"
        })
    ],
    optimization: {
        minimize: true,
        splitChunks: {
            chunks: "all",
        },
        runtimeChunk: "single",
        minimizer: [
            new rspack.SwcJsMinimizerRspackPlugin({
                compress: true,
                mangle: true,
                format: {
                    comments: false,
                },
            }),
            new rspack.LightningCssMinimizerRspackPlugin({
                targets: "cover 99.5%", // target modern browsers
                cssModules: false,      // unless you are using CSS Modules
            }),
        ],
    }
};