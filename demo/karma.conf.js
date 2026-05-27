module.exports = (config) => {
  config.set({
    basePath: "",
    frameworks: ["jasmine"],
    files: ["app/tests/**/*.js", "app/tests/**/*.ts"],
    exclude: [],
    preprocessors: {},
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [],
    customLaunchers: {
      android: { base: "NS", platform: "android" },
      ios: { base: "NS", platform: "ios" },
      ios_simulator: {
        base: "NS",
        platform: "ios",
        arguments: ["--emulator"]
      }
    },
    singleRun: false
  });
};
