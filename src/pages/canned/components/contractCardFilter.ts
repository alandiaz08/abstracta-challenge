import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for contractCardList
 */
export class contractCardFilter extends BaseComponent {
    private readonly activityName: Locator;
    private container;

    /**
     * Constructor of the class
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.activityName = this.container.locator('[placeholder="Activity name"]');
    }

    /**
     * Enters the activity name
     * @param activityName
     */
    async enterActivityName(activityName: string): Promise<void> {
        this.logger.info('Enter the activity name ' + activityName);
        await this.activityName.fill(activityName);
        await this.page.waitForLoadState('networkidle');
    }
}