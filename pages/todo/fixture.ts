import { TodoPage } from "./todo.page";
import { StoragePage } from "./storage.page";

export interface TodoTestOptions {
  todo: TodoPage;
  storage: StoragePage;
}

export const TodoTest = {
  todo: async ({ page }, use) => {
    await use(new TodoPage(page));
  },
  storage: async ({ page }, use) => {
    await use(new StoragePage(page));
  },
};
