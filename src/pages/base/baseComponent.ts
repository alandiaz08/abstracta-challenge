import { Locator, Page } from '@playwright/test';
import {logger} from "../../utils/logger";

export abstract class BaseComponent {
  protected readonly page: Page;
  protected logger;

  constructor(page: Page) {
    this.page = page;
    this.logger = logger;
  }

  protected locator(selector: string): Locator {
    return this.page.locator(selector);
  }
}
