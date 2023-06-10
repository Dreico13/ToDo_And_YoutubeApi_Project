import { LocalStorage } from "./localstorage.js";

/** @class ToDo will give us the posibility to create new tasks and drag it to other states. */
export class ToDo {
  /**
   * I create a constructor where I initialize a task property
   *
   * @constructor
   */
  constructor() {
    this.#dragTask();
    this.#deleteTask();
    this.saveLocal = new LocalStorage();
  }

  /**
   * Here we create a new task.
   * @return {task} The task created.
   */
  createTask(i) {
    var json = {};
    let cont = i;
    let myTask;
    let idButton = document.getElementById("submit");
    //We save the position of the element h5
    let positionTask = document.getElementById("h5TaskPosition");
    //If the user press the add button this event will activate
    idButton.addEventListener("click", (e) => {
      let task = document.getElementById("task");
      //I create an element div and save it in the container variable
      let container = document.createElement("div");

      //If the task value isn't empty, we will create it
      if (task.value != "") {
        myTask =
          `<h4 class="mt-3 text-left" data-id="task` +
          cont +
          `" id="h5TaskPosition` +
          cont +
          `" draggable="true" style="cursor: move;"><img src="assets/images/estrella.png" style="width: 25px;"> ${task.value}</h4>`;
        container.innerHTML = myTask;
      }

      //I add the html under the <h5> of the html
      positionTask.append(container);

      //We activate the Sortable library for container too, because we need to drag it to another div
      new Sortable(container, {
        group: "shared",
        animation: 150,
        dragClass: "sortable-drag",
      });
      let value = document.getElementById("h5TaskPosition" + cont);
      //We add a new key and new value to json
      json[value.id] = myTask;
      this.saveLocal.saveInStorage(value.id, json);
      //I count the tasks that I have created
      cont++;
    });
  }
  /**
   * We can move the task to other state: this state can be doing or done.
   * @param {string} task We receive the task created by parameter.
   */
  #dragTask() {
    //We can drag the tasks to all of this divs
    let todo = document.getElementById("todo");
    let doing = document.getElementById("doing");
    let done = document.getElementById("done");

    Sortable.create(todo, {
      group: "shared",
      animation: 150,
      ghostClass: "sortable-ghost",
    });

    Sortable.create(doing, {
      group: "shared",
      animation: 150,
      ghostClass: "sortable-ghost",
    });

    Sortable.create(done, {
      group: "shared",
      animation: 150,
      ghostClass: "sortable-ghost",
    });
  }

  #deleteTask() {
    let paperBinElement = document.getElementById("paperBin");

    Sortable.create(paperBinElement, {
      group: "shared",
      animation: 150,
      ghostClass: "sortable-ghost",
    });

    paperBinElement.addEventListener("drop", (ev) => {
      ev.preventDefault();
      //I need to put this if because sometimes the task inherit the div father
      if (ev.target.id != "paperBin") {
        //If the div father is inherit the task must be entered again for it to be deleted
        ev.target.remove();
        //We remove the element from the localStorage too
        this.saveLocal.deleteFromStorage(ev.target.id);
      } 
    });
  }
}
