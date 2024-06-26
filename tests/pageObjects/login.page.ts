import  { type Page, type Locator, expect} from '@playwright/test';
export class LoginPage {
    readonly page: Page;
    readonly url: string = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
    readonly username: Locator;
    readonly password: Locator;
    readonly submitBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[name="username"]');
        this.password = page.locator('[name="password"]');
        this.submitBtn = page.locator('[type="submit"]');
    }

    async navigate() {
        await this.page.goto(this.url);
    }

    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.submitBtn.click();
    }

    async getDashboardTitle() {
        return await this.page.innerText('h6:has-text("Dashboard")');
    }
}