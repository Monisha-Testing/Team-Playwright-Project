import { test, expect } from '@playwright/test';
import { FormSubmissionPage } from '../pages/FormsubmissionPage';
import { DragDropPage } from '../pages/DragDropPage';

test.describe('Drag & Drop Page Tests', () => {

  test.beforeEach('Navigate to Drag & Drop page', async ({ page }) => {
    const formPage = new FormSubmissionPage(page);
    const DragdropPage = new DragDropPage(page);

    await test.step('Navigate to home page', async () => {
      await formPage.navigateToHome();
      await page.waitForTimeout(500);
    });

    await test.step('Click on Drag & Drop link', async () => {
      await DragdropPage.gotoDragDropPage();
      await expect(DragdropPage.DragdropHeading).toBeVisible();
      await page.waitForTimeout(500);
    });
  });

  test('Drag & Drop from source to destination', async ({ page }) => {
    const DragdropPage = new DragDropPage(page);

    await test.step('Drag & Drop', async () => {
      await DragdropPage.draganddrop();
    })

  });

  test('Validate source is dropped in destination', async ({ page }) => {
    const dragDropPage = new DragDropPage(page);

    await expect(dragDropPage.Destination).toBeVisible();

    await test.step('Before drag - Check if source is not dropped in destination', async () => {
      await expect(dragDropPage.Destination).not.toContainText(dragDropPage.Dragme);
    });

    await test.step('Perform drag & drop', async () => {
      await dragDropPage.draganddrop();
    });

    await test.step('After drag - Check if source is dropped in destination', async () => {
      await expect(dragDropPage.Destination).toContainText(dragDropPage.Dragme);
      await expect(dragDropPage.Destination).toContainText(dragDropPage.Dropped);
      await page.waitForTimeout(500);
    });
  });

});