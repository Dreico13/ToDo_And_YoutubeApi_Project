/** @class LocalStorage where we will be able to save the new tasks and delete it from the local storage */
export class LocalStorage {
  constructor() {
    this.keyLocal = [];
  }
  /**
   * In this method we save the tasks created in a local storage
   * @param {JSON} task the parameter that we receive to save in localstorage
   */
  saveInStorage(key, value) {
    let saveInStorage = document.getElementById("yesSave");
    saveInStorage.addEventListener('click', () => {
      localStorage.setItem(key, JSON.stringify(value));
    });
    
    //let prueba = localStorage.getItem(tarea);
    //console.log(prueba);
  }

  //No implemented
  getOfTheStorage() {
    /*var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    console.log(values);*/
  }

  deleteFromStorage(key) {
    localStorage.removeItem(key);
  }
}
