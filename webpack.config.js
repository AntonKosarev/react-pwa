const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",
    output: {path: path.join(__dirname, "/dist"), filename: "index_bundle.js"},
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: {loader: "babel-loader" } },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(jpe?g|png|gif|svg)$/i, use: [ { loader: 'file-loader' } ] }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new CopyWebpackPlugin ({
            patterns: [
                {from: "./public/img/logo192.png", to: "./img/logo192.png"},
                {from: "./public/img/logo512.png", to: "./img/log512.png"},
                {from: "./public/img/favicon.ico", to: "./img/favicon.ico"},
                {from: "./public/manifest.json", to: "./manifest.json"},
                {from: "./public/serviceWorker.js", to: "./serviceWorker.js"},
                {from: "./public/offline.html", to: "./offline.html"}
            ]
        })
    ],
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 3000
    },
};