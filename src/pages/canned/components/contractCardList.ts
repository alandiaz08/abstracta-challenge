import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for contractCardList
 */
export class contractCardList extends BaseComponent {
    private readonly checkoutOverviewListItems: Locator;
    private container;

    /**
     * Constructor of the class
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.checkoutOverviewListItems = this.container.locator('[class="card__container__columns"] > div');
    }

    async getContractCardItems(): Promise<Locator[]> {
        return this.checkoutOverviewListItems.all();
    }

    async getContractCardItemsByIndex(index): Promise<Locator> {
        const contractCardItems = await this.getContractCardItems();
        if (index >= 0 && index < contractCardItems.length) {
            return contractCardItems[index]
        } else {
            throw new Error(`Invalid index: ${index}`);
        }
    }
}