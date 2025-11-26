
import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation Menu', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone 8 viewport

  test('should open and close the mobile menu', async ({ page }) => {
    await page.goto('http://localhost:9003');

    const mobileMenu = page.getByTestId('mobile-menu');

    // Initially, the menu should not be in the viewport
    await expect(mobileMenu).not.toBeInViewport();

    // Open the mobile menu
    await page.getByRole('button', { name: 'Toggle mobile menu' }).click();
    await expect(mobileMenu).toBeInViewport();
    await page.screenshot({ path: '/home/jules/verification/hamburger_open.png' });


    // Close the mobile menu
    await page.getByRole('button', { name: 'Close mobile menu' }).click();
    await expect(mobileMenu).not.toBeInViewport();
  });
});

test.describe('Desktop Navigation', () => {
  test.use({ viewport: { width: 1280, height: 720 } });

  test('should display the desktop navigation', async ({ page }) => {
    await page.goto('http://localhost:9003');
    const desktopMenu = page.getByTestId('desktop-menu');
    await expect(desktopMenu.getByRole('link', { name: 'Home' })).toBeVisible();
    await expect(desktopMenu.getByRole('link', { name: 'Projects' })).toBeVisible();
    await expect(desktopMenu.getByRole('link', { name: 'Skills' })).toBeVisible();
  });
});
