import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for searchResultList
 */
export class SearchResultList extends BaseComponent {
    private readonly productsListItems: Locator;
    private container;

    /**
     * Constructor of the class
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.productsListItems =
          this.container.locator('[class="ui-search-layout__item shops__layout-item"]');
    }

    /**
     * Gets the Product list items.
     * @returns {Promise<Locator[]>}
     */
    async getProductItems(): Promise<Locator[]> {
        return this.productsListItems.all();
    }

    /**
     * Gets the Products list items by index.
     * @returns {Promise<Locator[]>}
     */
    async getProductItemsByIndex(index): Promise<Locator> {
        this.logger.info('Gets the Product list items by index');
        const contractCardItems = await this.getProductItems();
        if (index >= 0 && index < contractCardItems.length) {
            return contractCardItems[index]
        } else {
            throw new Error(`Invalid index: ${index}`);
        }
    }

    /**
     * Gets the number of product items on the current page.
     * @return {Promise<number>}
     */
    async getProductItemCount(): Promise<number> {
        this.logger.info('Getting the number of product items');
        const contractCardItems = await this.getProductItems();
        return contractCardItems.length;
    }

}