import { ToDo } from "./todo.js";
import { LocalStorage } from "./localstorage.js";
import { Daltonism } from "./daltonismFunction.js";


window.addEventListener("load", () => {
  let main = new Main();
});

/** @class The principal class of my project. */
export class Main {
  /**
   * This is the main js file.
   *
   * @author Andrei Nicolae
   *
   */

  constructor() {
    //With that code we get the quantity of the keys that are saved in the localstorage
    (this.keys = Object.keys(localStorage)), (this.i = this.keys.length);
    console.log(this.i);
    this.todo = new ToDo();
    this.todo.createTask(this.i);
    this.localStore = new LocalStorage();
    this.localStore.getOfTheStorage();
    this.daltonism = new Daltonism();
  }
}
