function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    addToDoForm.addEventListener('submit', () => {
        event.preventDefault();

        // get the text
        let title = newToDoText.value;

        // create a new li
        let newLi = document.createElement('li');


        // create a new input
        let checkbox = document.createElement('input');


        let deleteBtn = document.createElement('button');


        // set the input's type to checkbox
        checkbox.type = "checkbox";


        // set the title
        newLi.textContent = title;


        // attach the checkbox to the li
        newLi.appendChild(checkbox);

        newLi.appendChild(deleteBtn);

        deleteBtn.innerHTML = "Delete";
        deleteBtn.classList.add('removeBtn');

        // attach the li to the ul
        toDoList.appendChild(newLi);

        //empty the input
        newToDoText.value = '';

        deleteBtn.onclick = function () {
            deleteBtn.parentElement.remove();
        }
    });
}



window.onload = function () {
    onReady();
};