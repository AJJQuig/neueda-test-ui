import { Given, setDefaultTimeout, Then, When } from 'cucumber';
import { browser } from 'protractor';

setDefaultTimeout(60 * 1000);

const env = {
  local: 'http://localhost:4200/',
};

Given('I have loaded the app', async function loaded() {
  await browser.waitForAngularEnabled(true);
  await browser.sleep(2000);
});

Given('I open the environment {string}', async function setup(envName) {
  browser.get(env[envName]);
});
