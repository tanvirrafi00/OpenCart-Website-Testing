import { Given, Then, When } from "@wdio/cucumber-framework";
import Browser from "../../framework/browser/Browser.js";
import { mainConfig } from "../../framework/configs/main.wdio.conf.js";
import HomePage from "../page-objects/HomePage.js";

Given(/^I am on the Home page$/, async () => {
  await Browser.openUrl(mainConfig.baseUrl);
  console.log("I am on the home page");
});

When(/^I type "(.*)" on the search field$/, async (value) => {
  await HomePage.setValueInSearchField(value);
});

When(/^I Click on the search button$/, async () => {
  await HomePage.clickSearchButton();
});
