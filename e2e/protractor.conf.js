// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 30000,
  specs: ['./features/shortener/shortener.feature'],

  capabilities: {
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=800,600", "--disable-dev-shm-usage"]
    },
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    compiler: 'ts:ts-node/register',
    dryRun: false,
    require: ['./steps/*.ts'],
    strict: true,
    tags: '@TypeScriptScenario or @CucumberScenario or @ProtractorScenario'
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.json'
    });
  }
};
