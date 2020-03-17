import { of, Subject } from "rxjs";

export class Todo {
  todos: string[] = [];

  private todosChanged = new Subject<string[]>();

  constructor() {
    this.todosChanged.subscribe({
      next: v => {
        console.log("add");
        console.log(v);
      }
    });
  }

  addToDo(todo: string) {
    this.todos.push(todo);
    this.todosChanged.next(this.todos);
  }

  getToDos() {
    return this.todos;
  }
}
