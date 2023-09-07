import {Locator, Page} from '@playwright/test';
import { basePage } from '../../base/basePage';


/**
 * Class for login page.
 */
export class SearchPage extends basePage {
    private readonly nextPageButton: Locator;
    private readonly searchListContainer: Locator;


    /**
     * Constructor of the login page
     */
    constructor(page: Page) {
        super(page);
        this.nextPageButton = this.page.getByRole('link', { name: 'Siguiente' });
        this.searchListContainer =
          page.locator('[class="ui-search-layout ui-search-layout--stack shops__layout"]')
    }

    /**
     * Clicks the next page button.
     * @return {Promise<void>}
     */
    async clickNextPageButton(): Promise<void> {
        this.logger.info('Clicking the next page button');
        await this.nextPageButton.waitFor({ state: 'attached' });
        await this.nextPageButton.click();
    }

    /**
     * Retrieves the container of the Search List.
     * @returns {Promise<Locator>} - The container of the Search List.
     */
    async getSearchListContainer() {
        this.logger.info('Retrieves the container of the Search List');
        await this.searchListContainer.waitFor({ state: 'attached' });
        return this.searchListContainer;
    }
}