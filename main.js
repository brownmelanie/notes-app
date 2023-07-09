import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

    const btn = document.querySelector("[data-form-btn]") //lo guardo asi en vez de con la clase porque si se modifica la clase sigue funcionando
    const list = document.querySelector("[data-list]")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input");
        const value = input.value;
        input.value = ''; //se vacia el input visual

        const task = document.createElement("li");
        task.classList.add("card");

        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = value;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);

        //task.innerHTML = content;
        task.appendChild(taskContent);
        task.appendChild(deleteIcon());
        list.appendChild(task);

        tasks.push(value);
        saveTaskLocalStorage();
    };

    const saveTaskLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

    // Cargar las tareas almacenadas en el local storage al cargar la página
    tasks.forEach(task => {
        const taskElement = document.createElement("li");
        taskElement.classList.add("card");

        const taskContent = document.createElement("div");
        const titleTask = document.createElement("span");
        titleTask.classList.add("task");
        titleTask.innerText = task;
        taskContent.appendChild(checkComplete());
        taskContent.appendChild(titleTask);
      
        taskElement.appendChild(taskContent);
        taskElement.appendChild(deleteIcon());
        list.appendChild(taskElement);
    });

    btn.addEventListener("click", createTask);
