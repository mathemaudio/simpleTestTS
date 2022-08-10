import { setWorldConstructor } from "@cucumber/cucumber";
import playwright from 'playwright';

export class Wo {
    page!:playwright.Page;
    async openUrl(url:string) {
        const browser = await playwright.chromium.launch({
            headless: false,
        });
        const context = await browser.newContext();
        this.page = await context.newPage();
        await this.page.goto(url);
    }
}

setWorldConstructor(Wo);