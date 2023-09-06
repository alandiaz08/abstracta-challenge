import { Page } from '@playwright/test';
import {env} from "../../../load-env";
import {logger} from "../../utils/logger";


export abstract class basePage {
    readonly page: Page;
    readonly viewportSize: { width: number; height: number; };
    protected logger;

    constructor(page: Page) {
        this.page = page;
        this.viewportSize = { width: +env.VIEWPORT_WIDTH, height: +env.VIEWPORT_HEIGHT };
        this.logger = logger;
    }

}