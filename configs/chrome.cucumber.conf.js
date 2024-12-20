import { downloadDir, mainConfig } from "../framework/configs/main.wdio.conf.js";

export const config = {
  ...mainConfig,
  ...{
    framework: "cucumber",
    cucumberOpts: {
      require: ["./test/step-definitions/**/*.js"],
      tags: "",
    },
    reporters: [
      "spec",
      [
        "allure",
        {
          outputDir: "allure-results",
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: true,
          disableHooks: true,
        },
      ],
    ],
    specs: ["../test/features/**/*.feature"],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    services: [
      [
        "browserstack",
        {
          testObservability: true,

          browserstackLocal: true,
        },
      ],
    ],
    capabilities: [
      {
        browserName: "Firefox",
        "bstack:options": {
          os: "Windows",
          osVersion: "11",
          browserVersion: "130.0",
        },
      },
      {
        browserName: "Safari",
        "bstack:options": {
          os: "OS X",
          osVersion: "Monterey",
          browserVersion: "15.6",
        },
      },
      {
        browserName: "chrome",
        "goog:chromeOptions": {
          prefs: {
            "download.default_directory": downloadDir,
          },
        },
      },
    ],
  },
};
