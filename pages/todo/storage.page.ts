import { type Page } from "@playwright/test";

export class StoragePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkNumberOfTodosInLocalStorage(expected: number) {
    return await this.page.waitForFunction((e) => {
      return JSON.parse(localStorage["react-todos"]).length === e;
    }, expected);
  }

  async checkNumberOfCompletedTodosInLocalStorage(expected: number) {
    return await this.page.waitForFunction((e) => {
      return JSON.parse(localStorage["react-todos"]).filter((todo: any) => todo.completed).length === e;
    }, expected);
  }

  async checkTodosInLocalStorage(title: string) {
    return await this.page.waitForFunction((t) => {
      return JSON.parse(localStorage["react-todos"])
        .map((todo: any) => todo.title)
        .includes(t);
    }, title);
  }
}
