import {BaseComponent} from "../../base/baseComponent";
import {Locator, Page} from "@playwright/test";
import {applyActivityModal} from "./applyActivityModal";

export class contractCardResultItem extends BaseComponent {
    private container;
    private readonly contractCardName: Locator;
    private readonly applyButton: Locator;
    private readonly applyActivityModal: Locator;


    constructor(page: Page, container: Locator) {
        super(page);
        this.container = container;
        this.contractCardName = this.container.locator('div >h3');
        this.applyButton = this.container.locator('div > button');
        this.applyActivityModal = this.container.locator('[class="modal-content"]')
    }

    /**
     * Gets cart product name
     * @return {Promise<string>}
     */
    async getContractCardName(): Promise<string> {
        const nameElement = await this.contractCardName;
        return await nameElement.textContent();
    }

    /**
     * Clicks on apply button
     */
    async clickOnApplyButton(): Promise<void> {
        await this.applyButton.click();
    }

    /**
     * Retrieves the container of the apply Activity Modal.
     * @returns {Promise<Locator>} - The container of the apply Activity Modal.
     */
    async getApplyActivityModalContainer() {
        return this.applyActivityModal;
    }


}