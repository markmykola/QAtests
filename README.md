#Hotel Search Platform - Automated UI Tests

This project contains automated UI test cases for the hotel booking platform's frontend, focusing on guest selection limits, filter interactions, and API request interception. The automation framework is built using Playwright and JavaScript/Node.js.

Prerequisites
Before you begin, ensure you have the following installed on your local machine:

Node.js (version 16 or higher is recommended)

Installation & Setup
Extract the project files to your local machine or clone the repository.

Open your terminal and navigate to the root directory of the project.

Install the required Node.js dependencies:

Bash
npm install
Install the necessary Playwright browsers (Chromium, Firefox, WebKit):

Bash
npx playwright install
Running the Tests
Playwright offers several ways to execute the test suite depending on your needs. Run these commands in your terminal:

1. Headless Mode (Default)
Runs the tests in the background without opening a visible browser window. Ideal for CI/CD pipelines.

Bash
npx playwright test
2. Headed Mode
Opens a visible browser window so you can watch the tests execute step-by-step.

Bash
npx playwright test --headed
3. Interactive UI Mode
Opens the Playwright UI interface, which allows you to run specific tests, view the DOM structure, time-travel through steps, and inspect network requests.

Bash
npx playwright test --ui
Scenarios Covered
The current test suite covers the following core functionalities:

Max Adults Selection: Opens the Guests modal, increments the adult count to the maximum allowed limit, and validates both the input value and the disabled state of the increase button.

Pets Filter Options: Navigates to the extended filters and iterates through specific checkbox options (e.g., <1kg, 1–5 kg, >20kg, Other), validating their active selected state in the DOM.

Filters Affect Request: Utilizes Playwright's network interception (waitForRequest) to validate that applying a UI filter (like "Free cancellation") properly formats and updates the backend API request URL parameters.

І так само для файлу package.json. Скопіюй текст від першої до останньої фігурної дужки та збережи у файл:

JSON
{
  "name": "qa-automation-task",
  "version": "1.0.0",
  "description": "UI Automation tests for hotel search",
  "scripts": {
    "test": "playwright test"
  },
  "devDependencies": {
    "@playwright/test": "^1.42.0"
  }
}
