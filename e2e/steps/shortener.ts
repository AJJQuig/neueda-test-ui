import {Given, Then, When} from 'cucumber';
import {browser, by, element} from 'protractor';
import * as chai from 'chai';

const expect = chai.expect;

When('I enter a long url of {string}', async (url) => {
  await element(by.id('shortener-input')).sendKeys(url);
});

Given('I click the shorten url button', async () => {
  await element(by.id('submit-btn')).click();
});

Then('I should see my shortened url', async () => {
  await element(by.id('shortened-url')).getText().then(text => expect(text).to.contain('Your Shortened Url: localhost:4200/'));
});
