# Final Task
Tests for login functionality of https://www.saucedemo.com

**Parallel Execution**: Tests run in parallel across multiple browser instances  
**Data Provider**: Tests are parametrized using data providers for all use cases  
**Logging**: Built-in logging from WebDriverIO framework  
**Page Object Pattern**: Clean separation of page logic and test logic  
**XPath Locators**: All elements located using XPath  
**Multi-Browser Support**: Tests run on Chrome and Firefox

## Configuration
- **Browsers**: Chrome and Firefox
- **Parallel Execution**: Maximum 2 instances
- **Logging**: Info level logging
- **Base URL**: https://www.saucedemo.com
- **Timeout**: 60 seconds per test

Setup project:
```bash
npm install
```

Run all tests: 
```bash
npm run wdio
```

## Task description
Launch URL: https://www.saucedemo.com/

### UC-1 Test Login form with empty credentials:

- Type any credentials into "Username" and "Password" fields.
- Clear the inputs.
- Hit the "Login" button.
- Check the error messages: "Username is required".

### UC-2 Test Login form with credentials by passing Username:

- Type any credentials in username.
- Enter password.
- Clear the "Password" input.
- Hit the "Login" button.
- Check the error messages: "Password is required".

### UC-3 Test Login form with credentials by passing Username & Password:

- Type credentials in username which are under Accepted username are sections.
- Enter password as secret sauce.
- Click on Login and validate the title “Swag Labs” in the dashboard.
---
Provide parallel execution, add logging for tests and use Data Provider to parametrize tests. Make sure that all tasks are supported by these 3 conditions: UC-1; UC-2; UC-3.

Please, add task description as README.md into your solution!

To perform the task use the various of additional options:

**Test Automation tool**: WebDriverIO;
**Browsers**: 1) Firefox; 2) Chrome;
**Locators**: XPath;
**Patterns**: Page Object;
**Assertions**: Use from the selected framework;
[Optional]
**Loggers**: Use from the selected framework.