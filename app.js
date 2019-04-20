function onReady() {
    var toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    let id = 0;

    function createNewToDo() {
        const newToDoText = document.getElementById('newToDoText');
        if (!newToDoText.value) { return; }

        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id
        });
        newToDoText.value = '';

        console.log(toDos);
        id++;
        renderTheUI();
    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');

        toDoList.textContent = '';

        toDos.forEach(function (toDo) {

            const newLi = document.createElement('li');
            const checkbox = document.createElement('input');
            const deleteBtn = document.createElement('input');

            deleteBtn.type = "button";
            checkbox.type = "checkbox";

            newLi.textContent = toDo.title;
            deleteBtn.value = "Delete";

            toDoList.appendChild(newLi);
            newLi.appendChild(checkbox);
            newLi.appendChild(deleteBtn);


            deleteBtn.addEventListener('click', function () {
                const filtered = toDos.filter(toDos => toDo.id !== toDos.id);
                console.log(filtered);

                toDos = filtered;
                                
                newLi.textContent = '';

                renderTheUI()
            });


        });
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });

}




window.onload = function () {
    onReady();
};