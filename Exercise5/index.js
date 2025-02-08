let tasks = [
    {description:"Task 1", priority:1},
    {description:"Task 2", priority:0},
    {description:"Task 3", priority:1},
];

displayTasks(tasks);

function displayTasks(tasks){
    let taskContainer = document.getElementById("task-container");
    for(let i=0; i<tasks.length; i++){
        let task = document.createElement("div");
        task.className = "task"
        tasks[i].priority == 1 ? task.style.backgroundColor = "red" : task.style.backgroundColor = "grey";
        task.textContent = tasks[i].description;
        taskContainer.appendChild(task);
    }
}

let addButton = document.getElementsByTagName("button")[0];
let showImportantButton = document.getElementsByTagName("button")[1];
let showNotImportantButton = document.getElementsByTagName("button")[2];
let showAllButton = document.getElementsByTagName("button")[3];

function removeTask(){
    let taskContainer = document.getElementById("task-container");
    let taskContainerChildNumber = taskContainer.childElementCount;
    for(let i=0; i<taskContainerChildNumber; i++){
        taskContainer.children[0].remove();
    }
}

addButton.addEventListener("click",function(){
    removeTask();
    let taskDescription = document.getElementById("task-input").value;
    let taskPriority = document.getElementById("priority").value;
    tasks.push({description:taskDescription, priority:taskPriority});
    displayTasks(tasks);
});

showImportantButton.addEventListener("click", function(){
    removeTask();
    let taskContainer = document.getElementById("task-container");
    for(let i=0; i<tasks.length; i++){
        let task = document.createElement("div");
        task.className = "task"
        if(tasks[i].priority == 1) task.style.backgroundColor = "red";
        else continue;
        task.textContent = tasks[i].description;
        taskContainer.appendChild(task);
    }
})

showNotImportantButton.addEventListener("click", function(){
    removeTask();
    let taskContainer = document.getElementById("task-container");
    for(let i=0; i<tasks.length; i++){
        let task = document.createElement("div");
        task.className = "task"
        if(tasks[i].priority == 0) task.style.backgroundColor = "grey";
        else continue;
        task.textContent = tasks[i].description;
        taskContainer.appendChild(task);
    }
})

showAllButton.addEventListener("click", function(){
    removeTask();
    displayTasks(tasks);
});