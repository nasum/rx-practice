import { of, Subject } from "rxjs";

class Todo {
  todos: string[] = [];

  private todosChanged = new Subject<string[]>();

  constructor() {
    this.todosChanged.subscribe({
      next: (v: string[]) => {
        console.log("add");
        console.log(v);
      }
    });
  }

  on(method: (args: string[]) => void) {
    this.todosChanged.subscribe({
      next: (v: string[]) => {
        method(v);
      }
    });
  }

  addToDo(todo: string) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos);
  }
}

export const todoModel = new Todo();
