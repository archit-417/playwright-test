import { expect, test } from '@playwright/test';

test('test to-do app @sanity', async ({ page }) => {
  //used to navigate to desired URL and perform actions on the page
  await page.goto('https://todomvc.com/examples/react/dist/');

  //used to interact with the input field and add multiple to-do items
  await page.getByTestId('text-input').click();

  //used to fill the input field with items
  await page.getByTestId('text-input').fill('Buy Groceries');

  //used to press a key (Enter)
  await page.getByTestId('text-input').press('Enter');

  await page.getByTestId('text-input').fill('Go for walk');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Rest');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('Play');
  await page.getByTestId('text-input').press('Enter');

  //used to check the checkboxes for specific to-do items and verify their visibility and text content
  await page.getByRole('listitem').filter({ hasText: 'Buy Groceries' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('listitem').filter({ hasText: 'Rest' }).getByTestId('todo-item-toggle').check();
  
  //used to click on the filter links and verify the visibility of specific to-do items based on their status (active or completed)
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();

  //used to verify the visibility of specific to-do items based on their status (active or completed) 
  //also used to verify the presence of specific text in the to-do list
  await expect(page.getByRole('listitem').filter({ hasText: 'Rest' }).getByTestId('todo-item-toggle')).toBeVisible();
  await expect(page.getByTestId('todo-list')).toContainText('Buy Groceries');

  //used to click on a button.
  await page.getByRole('button', { name: 'Clear completed' }).click();

  //used to click on a link
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
});