
export class Daltonism {

    constructor() {
        this.#changeColors();
    }

    #changeColors() {
        let  option = document.getElementById('daltonismSelect');

        option.addEventListener('change', () => {
            switch (option.value) {
                case 'Protanopia':
                    //Elementos en amarillo ToDoList
                    let arrayToDoList1 = document.getElementsByClassName('toDoList');
                    for(let i=0; i < arrayToDoList1.length;i++) {
                        arrayToDoList1[i].style.backgroundColor = 'rgb(236, 211, 015)';
                    }

                    //Elementos en blanco
                    let arrayCreate1 = document.getElementsByClassName('create');
                    for(let i=0; i < arrayCreate1.length;i++) {
                        arrayCreate1[i].style.backgroundColor = 'rgb(255, 250, 250)';
                    }

                    //Yes Button of the modal saveInLocalStorage
                    document.getElementById('yesSave').style.backgroundColor = 'rgb(202, 181, 000)';

                    //No Button of the modal saveInLocalStorage
                    document.getElementById('noSave').style.backgroundColor = 'rgb(120, 108, 030)';

                    //Close Button of the modal About
                    document.getElementById('closeButton').style.backgroundColor = 'rgb(155, 152, 153)';
                    break;
                case 'Deutanopia':
                    //Elementos en amarillo ToDoList
                    let arrayToDoList2 = document.getElementsByClassName('toDoList');
                    for(let i=0; i < arrayToDoList2.length;i++) {
                        arrayToDoList2[i].style.backgroundColor = 'rgb(255, 199, 080)';
                    }

                    //Elementos en blanco
                    let arrayCreate2 = document.getElementsByClassName('create');
                    for(let i=0; i < arrayCreate2.length;i++) {
                        arrayCreate2[i].style.backgroundColor = 'rgb(255, 232, 239)';
                    }

                    //Yes Button of the modal saveInLocalStorage
                    document.getElementById('yesSave').style.backgroundColor = 'rgb(224, 172, 046)';
                    //No Button of the modal saveInLocalStorage
                    document.getElementById('noSave').style.backgroundColor = 'rgb(136, 105, 000)';
                    //Close Button of the modal About
                    document.getElementById('closeButton').style.backgroundColor = 'rgb(166, 148, 154)';
                    break;
                case 'Tritanoptia':
                    //Elementos en amarillo ToDoList
                    let arrayToDoList3 = document.getElementsByClassName('toDoList');
                    for(let i=0; i < arrayToDoList3.length;i++) {
                        arrayToDoList3[i].style.backgroundColor = 'rgb(255, 190, 202)';
                    }

                    //Elementos en blanco
                    let arrayCreate3 = document.getElementsByClassName('create');
                    for(let i=0; i < arrayCreate3.length;i++) {
                        arrayCreate3[i].style.backgroundColor = 'rgb(244, 240, 255)';
                    }

                    //Yes Button of the modal saveInLocalStorage
                    document.getElementById('yesSave').style.backgroundColor = 'rgb(130, 190, 205)';
                    //No Button of the modal saveInLocalStorage
                    document.getElementById('noSave').style.backgroundColor = 'rgb(204, 022, 000)';
                    //Close Button of the modal About
                    document.getElementById('closeButton').style.backgroundColor = 'rgb(154, 151, 163)';
                    break;
                default:
                    //Elementos en amarillo ToDoList
                    let arrayToDoList4 = document.getElementsByClassName('toDoList');
                    for(let i=0; i < arrayToDoList4.length;i++) {
                        arrayToDoList4[i].style.backgroundColor = 'rgb(255, 204, 000)';
                    }
                    
                    //Elementos en blanco
                    let arrayCreate4 = document.getElementsByClassName('create');
                    for(let i=0; i < arrayCreate4.length;i++) {
                        arrayCreate4[i].style.backgroundColor = 'rgb(255, 255, 255)';
                    }

                    //Yes Button of the modal saveInLocalStorage
                    document.getElementById('yesSave').style.backgroundColor = 'rgb(102 204 000)';
                    //No Button of the modal saveInLocalStorage
                    document.getElementById('noSave').style.backgroundColor = 'rgb(204, 000, 000)';
                    //Close Button of the modal About
                    document.getElementById('closeButton').style.backgroundColor = 'rgb(153, 153, 153)';
            }
        });
        
    }
}