import {test, expect, Locator} from '@playwright/test';
import {homePage} from "../pages/mercadolibre/pages/HomePage";
import {Header} from "../pages/mercadolibre/components/Header";
import {SearchPage} from "../pages/mercadolibre/pages/SearchPage";
import {SearchResultList} from "../pages/mercadolibre/components/SearchResultList";
import {SearchResultItem} from "../pages/mercadolibre/components/SearchResultItem";
import {writeFileSync} from "fs";


test.describe('Demo Challenge Tests', () => {
    test('Login', async ({ page }, testInfo) => {
        //Arrange
        const product = 'Camisetas';
        const home = new homePage(page);
        let fileContent = 'Article Name, Price, Link\n';

        //Act
        await home.navigateToHomePage();

        const header = new Header(page);
        await header.inputPassword(product)
          .then(() => header.searchProduct());

        const search = new SearchPage(page);
        const searchResultList = new SearchResultList(page, await search.getSearchListContainer())

        for (let i = 0; i < await searchResultList.getProductItemCount(); i++) {
            const item: Locator = await searchResultList.getProductItemsByIndex(i);

            const resultItem = new SearchResultItem(page, item);

            const name = await resultItem.getProductName();
            const price = await resultItem.getProductPrice();
            const url = await resultItem.getProductUrlLink();

            fileContent += `${name}, ${price}, ${url}\n`;
        }

        writeFileSync('.abstracta-challenge/file-product-result/ProductInfo.csv', fileContent);
    });
});

