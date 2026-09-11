# Hotel Search Platform - Automated UI Tests

This project contains automated UI test cases for the hotel booking platform's frontend, focusing on guest selection limits, filter interactions, and API request interception. The automation framework is built using **Playwright** and **JavaScript/Node.js**.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:
- [Node.js](https://nodejs.org/) (version 16 or higher is recommended)

## Installation & Setup

1. Extract the project files to your local machine or clone the repository.
2. Open your terminal and navigate to the root directory of the project.
3. Install the required Node.js dependencies:
   ```bash
   npm install
4. Install the necessary Playwright browsers (Chromium, Firefox, WebKit):
   ```bash
   npx playwright install

## Running the Tests

Playwright offers several ways to execute the test suite depending on your needs. Run these commands in your terminal:

1. Headless Mode (Default)
  Runs the tests in the background without opening a visible browser window. Ideal for CI/CD pipelines.
  ```bash
  npx playwright test
  ```
2. Headed Mode
  Opens a visible browser window so you can watch the tests execute step-by-step.
  ```bash
  npx playwright test --headed
  ```
3. Interactive UI Mode
  Opens the Playwright UI interface, which allows you to run specific tests, view the DOM structure, time-travel through steps, and inspect network requests.
  ```bash
  npx playwright test --ui
  ```


