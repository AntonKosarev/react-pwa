const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: "./src/index.js",
    output: {path: path.join(__dirname, "./dist"), filename: "index_bundle.js"},
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: {loader: "babel-loader" } },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(jpe?g|png|gif|svg)$/i, use: [ { loader: 'file-loader' } ] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/img/favicon.ico"
        }),
        new CopyWebpackPlugin ({
            patterns: [
                {from: "./public/img/logo192.png", to: "./logo192.png"},
                {from: "./public/img/logo512.png", to: "./log512.png"},
                {from: "./public/manifest.json", to: "./manifest.json"}
            ]
        })
    ],
    devServer: {
        contentBase: "./dist"
    },
};