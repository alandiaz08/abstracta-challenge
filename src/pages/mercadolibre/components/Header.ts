import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for header
 */
export class Header extends BaseComponent{
    private readonly searchFiled: Locator;
    private readonly searchButton: Locator;


    /**
     * Constructor of the class.
     * @param page
     */
    constructor(page: Page){
        super(page);
        this.searchFiled = this.page.locator('cb1-edit');
        this.searchButton = this.page.locator('type="submit"');
    }

    /**
     * Inputs the value into the search field.
     * @param {string} search - The search to input
     * @returns {Promise<void>}
     */
    async inputPassword(search: string): Promise<void> {
        this.logger.info('Entering search: ' + search);
        await this.searchFiled.fill(search);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks on submit button.
     */
    async searchProduct(): Promise<void> {
        this.logger.info('Click on submit button')
        await this.searchButton.click();
    }
}