const { test, expect } = require('@playwright/test');

test('Verify maximum number of adults can be selected', async ({ page }) => {
    // 1. Відкриваємо модальне вікно гостей
    await page.locator('.guests-dropdown-trigger').click();

    // 2. Визначаємо локатори для кнопки "+" та поля зі значенням
    // Використовуємо прив'язку до тексту "Adults", щоб не сплутати з Children/Pets
    const adultsRow = page.locator('div:has-text("Adults")');
    const plusButton = adultsRow.locator('button:has-text("+")');
    const countDisplay = adultsRow.locator('.count-value'); // або input, залежно від верстки

    // 3. Клікаємо кнопку 12 разів (із запасом, щоб дійти до ліміту)
    for (let i = 0; i < 12; i++) {
        // Перевіряємо, чи кнопка не заблокована перед кліком
        const isEnabled = await plusButton.isEnabled();
        if (isEnabled) {
            await plusButton.click();
        } else {
            break; // Виходимо з циклу, якщо ліміт досягнуто раніше
        }
    }

    // 4. Валідація: перевіряємо, що значення зупинилося на 10
    await expect(countDisplay).toHaveText('10'); // або toHaveValue('10'), якщо це input
    
    // 5. Валідація UI: кнопка "+" має стати неактивною (disabled)
    await expect(plusButton).toBeDisabled();
});
