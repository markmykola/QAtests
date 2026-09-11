test('Verify that applying filters changes the request URL', async ({ page }) => {
    // 1. Налаштовуємо перехоплення запиту ДО кліку.
    // Чекаємо на GET-запит, URL якого містить ендпоінт пошуку (наприклад, /api/hotels/search)
    const requestPromise = page.waitForRequest(request => 
        request.url().includes('/api/hotels/search') && request.method() === 'GET'
    );

    // 2. Застосовуємо фільтр в UI (клікаємо на кнопку "Free cancellation")
    const freeCancelBtn = page.locator('button:has-text("Free cancellation")');
    await freeCancelBtn.click();

    // 3. Чекаємо, поки запит фактично відправиться і ми його спіймаємо
    const request = await requestPromise;
    const requestUrl = request.url();

    // 4. Валідація: перевіряємо, що URL містить відповідний параметр
    // Наприклад, очікуємо щось на зразок ?free_cancellation=true
    expect(requestUrl).toContain('free_cancellation=true');
    
    /* Додатково: якщо система використовує POST запити для фільтрів, 
       можна перевірити Payload (тіло запиту) ось так:
    const postData = request.postDataJSON();
    expect(postData.filters.freeCancellation).toBe(true);
    */
});
