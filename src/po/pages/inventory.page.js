export default class InventoryPage {
    get pageTitle() {
        return $('//div[@class="app_logo"]');
    }

    async isOpened() {
        await expect(browser).toHaveUrl(expect.stringContaining('/inventory.html'));
    }

    async getPageTitle() {
        return await this.pageTitle.getText();
    }
}