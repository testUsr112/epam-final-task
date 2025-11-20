import { Before, Given, Then, When } from '@wdio/cucumber-framework';
import logger from '@wdio/logger';
import LoginPage from '../../po/pages/login.page.js';
import InventoryPage from '../../po/pages/inventory.page.js';

const log = logger('LoginSteps');
let loginPage;
let inventoryPage;

Before(async () => {
    loginPage = new LoginPage();
    inventoryPage = new InventoryPage();
});

Given('I am on the login page', async () => {
    log.info('Opening login page');
    await loginPage.open();
});

When('I enter username {string}', async (username) => {
    log.info(`Entering username ${username}`);
    await loginPage.enterUsername(username);
});

When('I enter password {string}', async (password) => {
    log.info('Entering password');
    await loginPage.enterPassword(password);
});

When('I clear the username field', async () => {
    log.info('Clearing username field');
    await loginPage.clearUsernameField();
});

When('I clear the password field', async () => {
    log.info('Clearing password field');
    await loginPage.clearPasswordField();
});

When('I click the Login button', async () => {
    log.info('Clicking Login button');
    await loginPage.clickLoginButton();
});

Then('I should see the error message {string}', async (expectedError) => {
    const errorMsg = await loginPage.getErrorMessage();
    await expect(errorMsg).toContain(expectedError);
});

Then('I should see the inventory page titled {string}', async (expectedTitle) => {
    await inventoryPage.isOpened();
    const pageTitle = await inventoryPage.getPageTitle();
    await expect(pageTitle).toBe(expectedTitle);
});

