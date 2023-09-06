import {Locator, Page} from '@playwright/test';
import { basePage } from '../../base/basePage';
import { URLBuilder } from '../../../utils/URLBuilder';
import { env } from "../../../../load-env";

/**
 * Class for login page.
 */
export class loginPage extends basePage {
    private readonly userInput: Locator;
    private readonly nextButton: Locator;
    private readonly signUpNowButton: Locator;
    private readonly passwordInput: Locator;
    private readonly iForgotMyPasswordButton: Locator;
    private readonly loginButton: Locator;
    private readonly backButton: Locator;


    /**
     * Constructor of the login page
     */
    constructor(page: Page) {
        super(page);
        this.userInput = page.locator('[name="email"]')
        this.nextButton = page.locator('div:nth-child(5) > button')
        this.signUpNowButton = page.locator('div > a')
        this.passwordInput = page.locator('[name="password"]')
        this.iForgotMyPasswordButton = page.locator('[class="password-wrapper mt-4"] + a')
        this.loginButton = page.locator('button:nth-child(2)')
        this.backButton = page.locator('button:nth-child(1)')
    }

    /**
     * Navigates to the login page
     * @returns {Promise<void>}
     */
    async navigateToLoginPage(): Promise<void> {
        const urlBuilder = new URLBuilder(env.APP_ENV, env.APP_LANG);
        const url = urlBuilder.buildURL('');
        await this.page.goto(url);
        await this.page.setViewportSize(this.viewportSize);
    }

    /**
     * Inputs the username into the username field
     * @param {string} username - The username to input
     * @returns {Promise<void>}
     */
    async inputUserName(username: string): Promise<void> {
        this.logger.info('Enters user name: ' + username);
        await this.userInput.fill(username);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Inputs the password into the password field
     * @param {string} password - The password to input
     * @returns {Promise<void>}
     */
    async inputPassword(password: string): Promise<void> {
        this.logger.info('Entering password: ' + password);
        await this.passwordInput.fill(password);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks the login button
     * @returns {Promise<void>}
     */
    async login(): Promise<void> {
        this.logger.info('Click on the login button')
        await this.loginButton.click();
    }

    /**
     * Clicks on next button
     *
     * @returns {Promise<void>}
     */
    async next(): Promise<void> {
        this.logger.info('Click on next button')
        await this.nextButton.click();
    }

    /**
     * Clicks on sign up now
     *
     * @return {Promise<void>}
     */
    async signUpNow(): Promise<void> {
        this.logger.info('Click on sign up now button')
        await this.signUpNowButton.click();
    }

    /**
     * Clicks on I forget my password
     *
     * @returns {Promise<void>}
     */
    async goToForgetMyPassword(): Promise<void> {
        this.logger.info('Click on I forget my password button')
        await this.iForgotMyPasswordButton.click();
    }

    /**
     * Clicks on Back button
     *
     * @return {Promise<void>}
     */
    async goBack(): Promise<void> {
        this.logger.info('Click on back button')
        await this.backButton.click();
    }
}