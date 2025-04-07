import { Locator, Page } from "@playwright/test";

export class LoginPage
{
    readonly page: Page; //we will not be able to chnage the value of this variable
    readonly userNameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
 constructor(page: Page)
 { 
     this.page= page;
     //!user email input locator:
     this.userNameInput= page.locator('[data-test-id="input-email"]').getByRole('textbox');
     //? password input locator:
     this.passwordInput = page.locator('[data-test-id="input-password"]').getByRole('textbox');
     //* login sign in button:
     this.loginButton = page.getByRole('button', {name: 'Log in'});
}

async openWebsite(url: string)
{
    await this.page.goto(url);
}
async loginUser(userName: string, password: string)
{
 await this.userNameInput.fill(userName);
 await this.passwordInput.fill(password);
 await this.loginButton.click();
 
}

}