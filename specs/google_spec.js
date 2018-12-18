var googlePage = require('../pages/googlePage');

describe('Google page', () => {
    var testData = null;

    beforeEach(function() {
        testData = browser.testData();
    });

    it('should be able to search and find Rodrigo`s blog', () => {
        googlePage.goto();
        expect(googlePage.loaded()).toBe(true);

        googlePage.searchFor("rodrigotolledo.com");
        expect(browser.getSource()).toContain("Rodrigo Bonilha Tolledo");
        expect(browser.getUrl()).toContain("/search");
    });
});