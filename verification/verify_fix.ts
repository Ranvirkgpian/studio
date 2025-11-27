
import { chromium, expect } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // Go to the home page
    await page.goto('http://localhost:9003');

    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    // Click the hamburger menu
    const hamburger = page.locator('button[aria-label="Toggle mobile menu"]');
    await hamburger.click();

    // Wait for animation
    await page.waitForTimeout(500);

    // Take screenshot
    await page.screenshot({ path: 'verification/mobile_menu_fix.png' });
    console.log('Screenshot taken at verification/mobile_menu_fix.png');

    // Check bounding box height
    const mobileMenu = page.getByTestId('mobile-menu');
    const box = await mobileMenu.boundingBox();
    console.log('Mobile menu bounding box:', box);

    if (box && box.height > 600) {
        console.log('Verification Success: Menu height is correct.');
    } else {
        console.error('Verification Failed: Menu height is incorrect.');
        process.exit(1);
    }

  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
