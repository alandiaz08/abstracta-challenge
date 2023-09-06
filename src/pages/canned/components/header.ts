import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for header
 */
export class header extends BaseComponent{
    private readonly homeButton: Locator;
    private readonly hoursButton: Locator;
    private readonly communityButton: Locator;
    private readonly activitiesButton: Locator;

    /**
     * Constructor of the class.
     * @param page
     */
    constructor(page: Page){
        super(page);
        this.homeButton = this.page.locator(' div.collapse.navbar-collapse.mr-auto.false'
            + '.md-show.bg-light > ul > li:nth-child(1)');
        this.hoursButton = this.page.locator(' div.collapse.navbar-collapse.mr-auto.false'
            + '.md-show.bg-light > ul > li:nth-child(2)')
        this.communityButton = this.page.locator(' div.collapse.navbar-collapse.mr-auto'
            + '.false.md-show.bg-light > ul > li:nth-child(3)')
        this.activitiesButton = this.page.locator(' div.collapse.navbar-collapse.mr-auto.false.md-show'
            + '.bg-light > ul > li:nth-child(4)')
    }

    /**
     * Goes to the home page.
     */
    async goToHomePage(): Promise<void> {
        this.logger.info('Go to Home Page')
        await this.homeButton.click();
    }

    /**
     * Goes to the hours page.
     */
    async goToHoursPage(): Promise<void> {
        this.logger.info('Go to the hours page')
        await this.hoursButton.click();
    }

    /**
     * Goes to the community page.
     */
    async goToCommunityPage(): Promise<void> {
        this.logger.info('Go to the community page')
        await this.communityButton.click();
    }

    /**
     * Goes to the activities page.
     */
    async goToActivitiesPage(): Promise<void> {
        this.logger.info('Go to the activities page')
        await this.activitiesButton.click();
    }
}