function onReady() {
    var toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    let id = 0;

    toDos = JSON.parse( localStorage.getItem('toDos') );
    console.log(toDos);
    

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

            if (toDo.complete == true) {
                checkbox.checked = true;
            } else {
                checkbox.checked = false;
            };


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

                localStorage.setItem('toDos', JSON.stringify(toDos));

                renderTheUI()
            });

            checkbox.addEventListener('change', function () {
                if (this.checked) {
                    toDos[toDo.id].complete = true;
                } else {
                    toDos[toDo.id].complete = false;
                }
                console.log(toDos);
                localStorage.setItem('toDos', JSON.stringify(toDos));
            });


        });
    }

    addToDoForm.addEventListener('submit', event => {
        event.preventDefault();
        createNewToDo();
    });
    renderTheUI();
}




window.onload = function () {
    onReady();
};