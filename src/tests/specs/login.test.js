import logger from '@wdio/logger';
const log = logger('LoginTest');
import LoginPage from '../../po/pages/login.page.js';
import InventoryPage from '../../po/pages/inventory.page.js';

const USERNAME_REQUIRED_ERROR = 'Username is required';
const PASSWORD_REQUIRED_ERROR = 'Password is required';
const TITLE = 'Swag Labs';
const acceptableUsernames = [
    'standard_user',
    'locked_out_user',
    'problem_user',
    'performance_glitch_user',
    'error_user',
    'visual_user'
];

const standardPassword = 'secret_sauce';

describe('Test Login Page', () => {
    let loginPage;

    beforeEach(async () => {
        loginPage = new LoginPage();
        await loginPage.open();
    });

    it('UC-1: Test Login form with empty credentials', async () => {
        await loginPage.enterUsername('test');
        await loginPage.enterPassword('test');
        await loginPage.clearUsernameField();
        await loginPage.clearPasswordField();
        await loginPage.clickLoginButton();

        let errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toContain(USERNAME_REQUIRED_ERROR);
    });

    it('UC-2: Test Login form with credentials by passing username only', async () => {
        await loginPage.enterUsername('test');
        await loginPage.enterPassword('test');
        await loginPage.clearPasswordField();
        await loginPage.clickLoginButton();

        let errorMsg = await loginPage.getErrorMessage();
        expect(errorMsg).toContain(PASSWORD_REQUIRED_ERROR);
    });

    acceptableUsernames.forEach(userName => {
        it(`UC-3: Test Login form with credentials by passing username ${userName} & password`, async () => {
            await loginPage.enterUsername(userName);
            await loginPage.enterPassword(standardPassword);
            await loginPage.clickLoginButton();
            let inventoryPage = new InventoryPage();
            await inventoryPage.isOpened();
            expect(await inventoryPage.getPageTitle()).toBe(TITLE);
        });
    });
})