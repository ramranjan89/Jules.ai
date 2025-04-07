import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/loginPage'; 
test('verify login', async ({ page })=>
{
    // Set the viewport size to 1920x1080:
    await page.setViewportSize({ width: 1920, height: 1080 });
    await test.setTimeout(18000);
// Create an instance of the LoginPage class:
const loginPage = new LoginPage(page);
// Navigate to the login page:
await loginPage.openWebsite('https://demo.haroldwaste.com/authentication');
// Perform the login action:
await loginPage.loginUser(' qa@julesai.com', 'QaJULES2023!');
// Verify the login was successful by checking the URL:
 await expect(page).toHaveURL('https://demo.haroldwaste.com/purchases');
 await expect(page).toHaveTitle('Jules.ai');
 await page.locator('.sc-iBkjds div').nth(2).click();
})
test.only('verify login with invalid credentials', async ({ page })=>
{
    // Set the viewport size to 1920x1080:
    await page.setViewportSize({ width: 1920, height: 1080 });
    await test.setTimeout(30000);
// Create an instance of the LoginPage class:
 const loginPage= new LoginPage(page);
 await loginPage.openWebsite('https://demo.haroldwaste.com/authentication');
// Perform the login action:
 await loginPage.loginUser('abc@gmail.com', '173993@jfke');
 // Verify the login was unsuccessful by checking error message:
  const LoginError= await page.getByTestId('toaster-message');
  console.log(await LoginError.innerText());
await expect(LoginError).toHaveText('Invalid email or password. Please try again.');
//error toaster message not appearing in the UI.

})