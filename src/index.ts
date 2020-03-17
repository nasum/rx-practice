import { fromEvent } from "rxjs";
import { Todo } from "./Todo";

const todo = new Todo();

fromEvent(
  document.getElementsByClassName("add-button"),
  "click"
).subscribe(() => todo.addToDo("hoge"));

fromEvent(
  document.getElementsByClassName("show-button"),
  "click"
).subscribe(() => alert(todo.getToDos()));
