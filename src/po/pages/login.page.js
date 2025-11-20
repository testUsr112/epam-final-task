
import logger from '@wdio/logger';
const log = logger('LoginTest');

export default class LoginPage {

    get username() {
        return $('//input[@data-test="username"]');
    }

    get password() {
        return $('//input[@data-test="password"]');
    }

    get loginButton() {
        return $('//input[@data-test="login-button"]');
    }

    get errorMessage() {
        return $('//h3[@data-test="error"]');
    }

    async open() {
        log.info('Opening login page');
        await browser.url('/');
    }

    async enterUsername(username) {
        await this.username.setValue(username);
    }

    async enterPassword(password) {
        await this.password.setValue(password);
    }

    async clearInput(element) {
        await element.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    async clearUsernameField() {
        await this.clearInput(this.username);
    }

    async clearPasswordField() {
        await this.clearInput(this.password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}