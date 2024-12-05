import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo = (todo) => {
    this.todos.push({ id: Date.now(), text: todo });
  };

  removeTodo = (id) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };
}

const store = new TodoStore();
export default store;
