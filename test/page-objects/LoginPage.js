import { Button, Input, Label } from "../../framework/elements/index.js";
import BasePage from "../../framework/page/BasePage.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";

class LoginPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator(`Returning Customer`)), "Login page");
    this.emailField = new Input(`//input[@name="email"]`, "Email Field");
    this.passwordField = new Input(`//input[@name="password"]`, "Password Field");
    this.loginButton = new Button(`//button[@class="btn btn-primary"]`, "Login Button");
  }

  async Login(email, password) {
    await this.emailField.typeText(email);
    await this.passwordField.typeText(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
}

export default new LoginPage();
