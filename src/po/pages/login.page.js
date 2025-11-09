
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

    async clearUsernameField() {
        await this.username.clearValue();
    }

    async clearPasswordField() {
        await this.password.clearValue();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.getText();
    }
}