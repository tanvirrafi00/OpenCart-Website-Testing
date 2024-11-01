import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js";
class HomePage extends BasePage {
  constructor() {
    super(new Label(`//div[@id="carousel-banner-0"]`), "Home Page");

    this.serachField = new Input(`//input[@name="search"]`, "Search field");
    this.searchButton = new Button(`//button[@class="btn btn-light btn-lg"]`, "Search Button");
    this.myAccountOption = new Label(`//div[@class="nav float-end"]//li[@class="list-inline-item"][2]`, "My account option");
    this.loginLink = new Label(`//ul[@class="dropdown-menu dropdown-menu-right show"]//li[2]`, "Login Link");
  }

  async setValueInSearchField(value) {
    await this.serachField.typeText(value);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }

  async clickMyAccount() {
    await this.myAccountOption.click();
  }

  async clickLogin() {
    await this.loginLink.state().waitForDisplayed();
    await this.loginLink.click();
  }
}

export default new HomePage();
