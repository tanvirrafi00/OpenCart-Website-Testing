import { Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import SearchResultPage from "../page-objects/SearchResultPage.js";

Then(/^I should see "(.*)" in the search results$/, async (searchValue) => {
  assert.include(await SearchResultPage.getSearchResult(), searchValue, "search value not showing in search result page");
});

Then(/^"(.*)" should be displayed in the search results$/, async (message) => {
  assert.strictEqual(await SearchResultPage.getNoSearchProductText(), message, `${message} is not displaying in the search result page`);
});
