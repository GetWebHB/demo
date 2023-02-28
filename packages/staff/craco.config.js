const { ModuleFederationPlugin } = require("webpack").container;
module.exports = {
  devServer: {
    port: 3001,
  },
  plugin: [
    new ModuleFederationPlugin({
      name: "staff",
      remotes: {
        enterprise: "enterprise@[http://localhost:3000/remoteEntry.js]",
      },
    }),
  ],
};
