const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  plugin: [
    new ModuleFederationPlugin({
      name: "enterprise",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.tsx",
      },
    }),
  ],
};
