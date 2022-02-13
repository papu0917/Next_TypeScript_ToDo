const path = require("path");

module.exports = {
    "typescript": { reactDocgen: false },
    "stories": [
        "../stories/**/*.stories.mdx",
        "../stories/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app"
    ],
    "framework": "@storybook/react",
    core: {
        builder: "webpack5",
    },
    webpackFinal: async (config, { configType }) => {
        // Fixes npm packages that depend on some modules
        config.resolve = {
            extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
            fallback: {
                fs: false,
                path: false,
            },
        };

        // Sass & CSS Modules
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: true,
                        },
                    },
                },
                "sass-loader",
            ],
            include: path.resolve(__dirname, "../"),
        });

        // Important: return the modified config
        return config;
    },
}