import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";

/**
 * Class for contractCardList
 */
export class applyActivityModal extends BaseComponent {
    private readonly pleaseEnterACommentField: Locator;
    private readonly selectCharDropDown: Locator;
    private readonly tellMeColorField: Locator;
    private readonly cancelButton: Locator;
    private readonly iWantToParticipateButton: Locator;
    private readonly thankYouModal: Locator;
    private container;

    /**
     * Constructor of the class
     * @param page
     * @param container
     */
    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.pleaseEnterACommentField = this.container.locator('[id="message-text"]');
        this.selectCharDropDown = this.container.locator('[class=" css-1hwfws3"]')
        this.tellMeColorField = this.container.locator('[class="form-control"]')
        this.cancelButton = this.container.locator('[data-dismiss="modal"]')
        this.iWantToParticipateButton = this.container.locator('[class="btn btn-primary"]')
        this.thankYouModal = this.container.locator('[class="modal-title"]')
    }

    /**
     * Enters a comment
     * @param comment
     */
    async enterComment(comment: string): Promise<void> {
        this.logger.info('Enter the comment: ' + comment);
        await this.pleaseEnterACommentField.fill(comment);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Enters a color
     * @param color
     */
    async enterColor(color: string): Promise<void> {
        this.logger.info('Enter the color: ' + color);
        await this.pleaseEnterACommentField.fill(color);
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * Clicks on cancel button
     */
    async clickCancel(): Promise<void> {
        this.logger.info('Click on cancel button');
        await this.cancelButton.click();
    }

    /**
     * Clicks on i want to participate button
     */
    async clickParticipate(): Promise<void> {
        this.logger.info('Click on cancel button');
        await this.iWantToParticipateButton.click();
    }

    /**
     * Checks if the thank you message is visible.
     * @returns {Promise<boolean>}
     */
    async hasThankYouMessage() {
        this.logger.info('Check if the thank you message is visible');
        return await this.thankYouModal.isVisible();
    }

    /**
     * Gets the thank you message.
     * @return {Promise<string>}
     */
    async getName(): Promise<string> {
        this.logger.info('Get the thank you message');
        const nameElement = await this.thankYouModal;
        return await nameElement.textContent();
    }
}