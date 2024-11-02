import { assert } from "chai";
import LoginPage from "../page-objects/LoginPage.js";
import { Then, When } from "@wdio/cucumber-framework";

Then(/^I should be on the login page$/, async () => {
  assert.isTrue(await LoginPage.isPageOpened(), "Login page is not opened");
});

When(/^i type "(.*)" as a email and "(.*)" as a password$/, async (email, password) => {
  await LoginPage.Login(email, password);
});

When(/^I click on the login button$/, async () => {
  await LoginPage.clickLoginButton();
});
