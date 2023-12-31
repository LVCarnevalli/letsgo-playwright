import { test as base } from "@playwright/test";
import { TodoTest, TodoTestOptions } from "./tests/pages/fixture";

/**
 * Read test fixtures.
 * https://playwright.dev/docs/test-fixtures
 */
interface TestOptions extends TodoTestOptions {}

export const test = base.extend<TestOptions>({
  ...TodoTest,
});
