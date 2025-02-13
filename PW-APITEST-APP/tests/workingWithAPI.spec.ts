import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json'

test.beforeEach(async ({page}) =>{
  await page.route('https://conduit-api.bondaracademy.com/api/tags', async route => {
    

    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })


  await page.goto('https://conduit.bondaracademy.com/')
})


test('has title', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText('conduit')
});

