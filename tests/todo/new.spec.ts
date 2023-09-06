import { test } from "../../global.fixture";

test.beforeEach(async ({ todo }) => {
  await todo.goto();
});

test.describe("New @todo", () => {
  test("should allow me to add todo items", async ({ todo, storage }) => {
    // Create 1st todo.
    await todo.createTodo(todo.todoItems[0]);

    // Make sure the list only has one todo item.
    await todo.haveTitle(todo.todoItems[0]);

    // Create 2nd todo.
    await todo.createTodo(todo.todoItems[1]);

    // Make sure the list now has two todo items.
    await todo.haveTitle([todo.todoItems[0], todo.todoItems[1]]);

    await storage.checkNumberOfTodosInLocalStorage(2);
  });

  test("should clear text input field when an item is added", async ({ todo, storage }) => {
    // Create one todo item.
    await todo.createTodo(todo.todoItems[0]);

    // Check that input is empty.
    await todo.isEmpty();

    await storage.checkNumberOfTodosInLocalStorage(1);
  });

  test("should append new items to the bottom of the list", async ({ todo, storage }) => {
    // Create 3 items.
    await todo.createDefaultTodos();

    // Check test using different methods.
    await todo.haveCount(3);

    // Check all items in one call.
    await todo.haveTitle(todo.todoItems);

    await storage.checkNumberOfTodosInLocalStorage(3);
  });
});
