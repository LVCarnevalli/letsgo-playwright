import { test as base } from "@playwright/test";
import { TodoTest, TodoTestOptions } from "./pages/todo/fixture";

interface TestOptions extends TodoTestOptions {}

export const test = base.extend<TestOptions>({
  ...TodoTest,
});
