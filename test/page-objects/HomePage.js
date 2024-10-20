import BasePage from "../../framework/page/BasePage.js";
import { Button, Input, Label } from "../../framework/elements/index.js";
class HomePage extends BasePage {
  constructor() {
    super(new Label(`//div[@id="carousel-banner-0"]`), "Home Page");

    this.serachField = new Input(`//input[@name="search"]`, "Search field");
    this.searchButton = new Button(`//button[@class="btn btn-light btn-lg"]`, "Search Button");
  }

  async setValueInSearchField(value) {
    await this.serachField.typeText(value);
  }

  async clickSearchButton() {
    await this.searchButton.click();
  }
}

export default new HomePage();
