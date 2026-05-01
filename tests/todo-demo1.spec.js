import { expect, test } from '@playwright/test';

test('test to-do app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Buy Groceries');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Go for walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Play');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'Buy Groceries' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Rest' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByRole('listitem').filter({ hasText: 'Rest' }).getByTestId('todo-item-toggle')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('Buy Groceries');
  await page.getByRole('button', { name: 'Clear completed' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
});