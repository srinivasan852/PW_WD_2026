import {test} from "@playwright/test";

test('PVRCinemas_requirement', async({page})=> {

await page.goto("https://www.pvrcinemas.com/")
/* await page.locator("//input[@placeholder='Search for city']").click();
await page.locator("//input[@placeholder='Search for city']").fill("chennai") */
await page.getByRole('combobox', { name: 'Cities' }).click();
await page.getByRole('combobox', { name: 'Cities' }).fill('chennai');
await page.getByRole('option', { name: 'Chennai' }).click();

await page.locator("//span[text()='Cinema']").click();
await page.locator("//span[text()='Select Cinema']").click();
await page.locator("//span[text()='PVR Sathyam Royapettah Chennai']").click();
//await page.locator("//div[@aria-label='Select Date']").click();
//await page.locator("//span[text()='Today']").click();
await page.locator("//body[1]/div[3]/div[1]/ul[1]/li[1]/span[1]").click();
  await page.getByText('Today, 6 Mar').click();
await page.locator("//span[text()='Select Movie']").click();
await page.locator("(//span[text()='MUSTAFA MUSTAFA'])[2]").click();
await page.locator("//span[text()='Select Timing']").click();
await page.locator("//span[text()='10:30 PM']").click();
await page.locator("//button[@aria-label='Submit']//span[@class='p-button-label p-c'][text()='Book']").click();
await page.locator("//button[text()='Accept']").click();
await page.locator("//span[@id='EL.ELITE|K:5']").click();
await page.locator("//button[text()='Proceed']").click();


await page.waitForTimeout(4000);




})