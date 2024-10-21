import BasePage from "../../framework/page/BasePage.js";
import { Label } from "../../framework/elements/index.js";
import { PreciseTextLocator } from "../../framework/utils/locatorHelper.js";
class SearchResultPage extends BasePage {
  constructor() {
    super(new Label(PreciseTextLocator("Products meeting the search criteria")), "Search Page");
    this.searchResult = new Label(`//h1`, "Search Result");
  }

  async getSearchResult() {
    return await this.searchResult.getText();
  }
}
export default new SearchResultPage();
