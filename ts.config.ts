module.exports = {
  compilerOptions: {
    outDir: "./dist/",
    sourceMap: true,
    noImplicitAny: true,
    module: "es6",
    target: "es5",
    jsx: "react",
    allowJs: true,
    moduleResolution: "node",
    allowSyntheticDefaultImports: true,
    experimentalDecorators: true,
    baseUrl: ".",
    paths: {
      "enterprise/App": "./packages/enterprise/src/App.tsx",
    },
  },
  exclude: ["node_modules"],
};
