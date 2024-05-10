const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
    entry: "./src/entry.js",
    mode: "development",
    devServer: {
        port: 3001,
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx|ts|tsx)?$/,
              exclude: /node_modules/,
              loader: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
        new ModuleFederationPlugin({
            name: "MicroFrontendsApp",
            filename: "remoteEntry.js",
            exposes: {
              "./SupportedTypes": "./src/supportedTypes.js",
              "./Dialogs/ErrorDialog": "./src/components/dialog/exports/ErrorDialog.tsx",
              "./Dialogs/AddProjectDialog": "./src/components/dialog/exports/AddProjectDialog.tsx",
              "./Dialogs/DeleteProjectDialog": "./src/components/dialog/exports/DeleteProjectDialog.tsx",
              "./Dialogs/DeleteIllustrationDialog": "./src/components/dialog/exports/DeleteIllustrationDialog.tsx",
              "./Dialogs/FormDialog": "./src/components/dialog/formDialog/FormDialog.tsx",
              "./Timelines/TimelineView": "./src/components/illustry/timeline/Timeline.tsx",
              "./CalendarView": "./src/components/illustry/calendar/Calendar.tsx",
              "./BarchartView": "./src/components/illustry/barchart/Barchart.tsx",
            },
            remotes: {
              "loop": "MicroFrontendsApp@http://localhost:3001/remoteEntry.js",
            },
            shared: {
              ...dependencies,
              react: {
                singleton: true,
                requiredVersion: dependencies["react"],
              },
              "react-dom": {
                singleton: true,
                requiredVersion: dependencies["react-dom"],
              },
            },
          }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    target: "web",
};