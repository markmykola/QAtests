test('Verify Pets filter options can be selected', async ({ page }) => {
    // 1. Відкриваємо розширені фільтри (іконка з повзунками)
    await page.locator('button[aria-label="Filters"]').click();

    // Список опцій, які потрібно перевірити за завданням
    const petOptions = ['<1kg', '1–5 kg', '5–10 kg', '15–20 kg', '>20kg', 'Other'];

    // 2. Проходимося по кожній опції циклом
    for (const option of petOptions) {
        // Шукаємо чекбокс по тексту лейблу поруч із ним
        const checkbox = page.locator(`label:has-text("${option}") >> input[type="checkbox"]`);
        
        // 3. Відмічаємо чекбокс
        await checkbox.check();
        
        // 4. Валідація UI: перевіряємо, що чекбокс дійсно перейшов у стан checked
        await expect(checkbox).toBeChecked();
    }
});
