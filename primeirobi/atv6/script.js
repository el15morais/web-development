const taskInput = document.getElementById("task-input")
const buttonAdd = document.getElementById("button")
const list = document.getElementById("lista-tasks")

buttonAdd.addEventListener("click", function (event){
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
        taskInput.value = "";
    }
});

list.addEventListener("click", function (event){
    if(event.target.tagName === "LI") {
        event.target.remove();
    }
});