import { test, expect } from "@playwright/test";

test.describe("Mobile Menu", () => {
  test("should have a solid background color", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }); // Mobile viewport
    await page.goto("http://localhost:9003/");

    // Open the mobile menu
    await page.getByLabel("Toggle mobile menu").click();

    // Get the mobile menu element
    const mobileMenu = page.getByTestId("mobile-menu");

    // Check the background color
    const backgroundColor = await mobileMenu.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue("background-color");
    });

    expect(backgroundColor).toBe("rgb(255, 255, 255)");
  });
});
