class BasePage {
    constructor() {
        this.shortDelay = 500;
        this.longDelay = 30000;
    }

    goto() {
        browser.url(this.url);
    }

    randomString() {
        return `Test_${Math.random().toString(36)
            .substr(2, 10)}`;
    }

    randomEmail() {
        return `${this.randomString()}@mailinator.com`;
    }
}

module.exports = BasePage;