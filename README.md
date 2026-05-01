# Playwright TodoMVC Test

Automated end-to-end test suite for the [React TodoMVC](https://todomvc.com/examples/react/dist/) app, built with [Playwright](https://playwright.dev/). This project was created as a practice exercise to explore Playwright's core capabilities for UI test automation.

---

## 📌 Project Overview

| Detail | Info |
|---|---|
| **Target App** | [TodoMVC – React](https://todomvc.com/examples/react/dist/) |
| **Test Framework** | Playwright |
| **Language** | JavaScript |
| **Purpose** | Practice & learning – E2E test scripting |

---

## ✅ Test Coverage

The following user flows are covered by the test scripts:

- **Add / Create Todos** — Verifies that new todo items can be entered and saved
- **Edit / Update Todos** — Validates double-click to edit and saving updated text
- **Mark Complete & Active Filtering** — Tests toggling todo completion state and filtering by All / Active / Completed views
- **Clear Completed** — Checks that all completed todos are removed in one action

---

## 🗂️ Project Structure

```
playwright-test/
├── tests/
│   └── todo-demo1.spec.js  # Main test file
├── playwright.config.js    # Playwright configuration
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/archit-417/playwright-test.git
cd playwright-test

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install
```

---

## ▶️ Running the Tests

```bash
# Run all tests (headless)
npx playwright test

# Run tests with browser UI visible
npx playwright test --headed

# Run a specific test file
npx playwright test tests/todo-demo1.spec.js

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 📊 Viewing the Test Report

After a test run, Playwright generates an HTML report automatically:

```bash
npx playwright show-report
```

This opens an interactive report in your browser showing passed/failed tests, screenshots, and trace logs.

---

## 🔍 Additional Notes

- All tests are written using Playwright's recommended `test` and `expect` API
- Locators follow best practices — preferring role-based and accessible selectors
- Each test is independent and does not rely on shared state from other tests
- No external test data files are used; test inputs are defined inline for simplicity at this stage

---

## 📚 References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright Test Runner](https://playwright.dev/docs/test-intro)
- [Playwright Test API](https://playwright.dev/docs/test-api)