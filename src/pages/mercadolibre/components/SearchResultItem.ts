import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

export class SearchResultItem extends BaseComponent {
    private container;
    private readonly productName: Locator;
    private readonly productPrice: Locator;
    private readonly productUrlLink: Locator;


    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.productName = this.container.locator('a h2');
        this.productPrice = this.container.locator('[class="andes-money-amount__fraction"]');
        this.productUrlLink = this.container.locator('div > span + a');
    }

    /**
     * Gets cart product name
     * @return {Promise<string>}
     */
    async getProductName(): Promise<string> {
        const nameElement = await this.productName;
        return await nameElement.textContent();
    }

    /**
     * Gets the product price.
     * @return {Promise<string>}
     */
    async getProductPrice(): Promise<string> {
        this.logger.info('Getting the product price');
        await this.productPrice.waitFor({ state: 'attached' });
        return await this.productPrice.textContent();
    }

    /**
     * Gets the product URL link.
     * @return {Promise<string | null>}
     */
    async getProductUrlLink(): Promise<string | null> {
        try {
            this.logger.info('Getting the product URL link');
            await this.productUrlLink.waitFor({ state: 'attached' });
            return await this.productUrlLink.getAttribute('href');
        } catch (error) {
            this.logger.error(`Error getting product URL link: ${error}`);
            return null;
        }
    }
}