import {basePage} from "../../base/basePage";
import {Locator, Page} from "@playwright/test";

export class homePage extends basePage {
    private readonly contractCardListContainer: Locator;
    private readonly filterContainer: Locator;

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
        this.contractCardListContainer = page.locator('[class="card__container"]');
        this.filterContainer = page.locator('div.sc-fmRtwQ.fOKkLp.card__container'
            + '__columns.h-75.d-none.d-xl-block')
    }

    /**
     * Retrieves the container of the contract card list.
     * @returns {Promise<Locator>} - The container of the contract card list.
     */
    async getContractCardListContainer() {
        this.logger.info('Retrieves the container of the contract card list');
        return this.contractCardListContainer;
    }

    /**
     * Retrieves the container of the filter.
     * @returns {Promise<Locator>} - The container of the filter.
     */
    async getFilterContainer() {
        this.logger.info('Retrieves the container of the filter');
        return this.filterContainer;
    }
}