import { expect, type Locator, type Page } from "@playwright/test";

export class TodoPage {
  readonly page: Page;
  readonly todoItems: string[];
  readonly todoComponent: Locator;
  readonly todoTitle: Locator;
  readonly todoCount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.todoItems = ["buy some cheese", "feed the cat", "book a doctors appointment"];
    this.todoComponent = page.getByPlaceholder("What needs to be done?");
    this.todoTitle = page.getByTestId("todo-title");
    this.todoCount = page.getByTestId("todo-count");
  }

  async goto() {
    await this.page.goto("/todomvc");
  }

  async createDefaultTodos() {
    for (const item of this.todoItems) {
      await this.createTodo(item);
    }
  }

  async createTodo(item: string) {
    await this.todoComponent.fill(item);
    await this.todoComponent.press("Enter");
  }

  async isEmpty() {
    await expect(this.todoComponent).toBeEmpty();
  }

  async haveTitle(item: string | string[]) {
    await expect(this.todoTitle).toHaveText(item);
  }

  async haveCount(count: number) {
    await expect(this.page.getByText(`${count} items left`)).toBeVisible();
    await expect(this.todoCount).toHaveText(`${count} items left`);
  }
}
