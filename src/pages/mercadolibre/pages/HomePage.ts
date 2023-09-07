import {basePage} from "../../base/basePage";
import {Locator, Page} from "@playwright/test";
import {URLBuilder} from "../../../utils/URLBuilder";
import {env} from "../../../../load-env";

export class homePage extends basePage {

    /**
     * Constructor of the class.
     */
    constructor(page: Page) {
        super(page);
    }


    /**
     * Navigates to the login page
     * @returns {Promise<void>}
     */
    async navigateToHomePage(): Promise<void> {
        const urlBuilder = new URLBuilder(env.APP_ENV, env.APP_LANG);
        const url = urlBuilder.buildURL('');
        await this.page.goto(url);
        await this.page.setViewportSize(this.viewportSize);
    }

}