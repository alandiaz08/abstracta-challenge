import { test, expect } from '@playwright/test';
import {loginPage} from "../pages/canned/pages/loginPage";

test.describe('Demo Challenge Tests', () => {
    test('Login', async ({ page }, testInfo) => {
        //Arrange
        const user = 'usertest@test.com';
        const password = 'test123';
        const login = new loginPage(page);
        const commentToApply = 'Quiero aplicar por que me gusta ayudar';

        //Act
        await login.navigateToLoginPage()
        await login.inputUserName(user)
            .then(() => login.next())
            .then(() => login.inputPassword(password))
            .then(() => login.login());
    });
});
