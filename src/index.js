import { fromEvent } from "rxjs";

fromEvent(
  document.getElementsByClassName("console-button"),
  "click"
).subscribe(() => console.log("clicked"));
