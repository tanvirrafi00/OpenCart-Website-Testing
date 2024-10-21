import { Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import SearchResultPage from "../page-objects/SearchResultPage.js";

Then(/^I should see (.*) in the search results$/, async (searchValue) => {
  assert.include(await SearchResultPage.getSearchResult(), searchValue);
});
