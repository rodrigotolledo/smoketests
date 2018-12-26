var BasePage = require('../pages/basePage');

class GooglePage extends BasePage {

    constructor() {
        super();
        this.url = '/';
    }

    // Page elements
    get searchField() { return browser.element('input[name="q"]'); }
    get searchButton() { return browser.element('input[name="btnK"]'); }

    // Actions that you can perform on the page
    loaded() {
        this.searchField.waitForVisible();
        return true;
    }

    searchFor(toBeSearched) {
        this.searchField.waitForVisible();
        this.searchField.click();
        this.searchField.setValue(toBeSearched);
        this.searchButton.click();
    }
}

module.exports = new GooglePage();