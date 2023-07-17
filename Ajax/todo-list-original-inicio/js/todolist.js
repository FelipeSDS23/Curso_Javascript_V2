import {Task} from "./Model/Task.model.js"
import {createXMLHttpRequest} from "./createXMLHttpRequest.js"
import TaskService from "./Service/Tasks.service.js"
import TaskController from "./Controller/Tasks.controller.js"
import TasksView from "./View/Tasks.View.js"

// const url = "https://jsonplaceholder.typicode.com/todos"
const urlUsers = "http://localhost:3000/users"
const urlTasks = "http://localhost:3000/tasks"

const userId = 2

const taskService = new TaskService()

const ul = document.getElementById("todo-list")

const tasksView = new TasksView(ul)

const taskController = new TaskController(taskService, tasksView)

const itemInput = document.getElementById("item-input")
const todoAddForm = document.getElementById("todo-add")

const lis = ul.getElementsByTagName("li")

// createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, init)
taskService.getTasks(userId, init)

todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault()

    taskController.add(itemInput.value, userId)
    
    itemInput.value = ""
    itemInput.focus()
});

function init(arrInstancesTasks){
    // a partir de um array de objetos literais, crie um array contendo instancias de Tasks. 
    // Essa array deve chamar arrInstancesTasks

    if(arrInstancesTasks.error) return
    
    // const arrInstancesTasks = arrTasks.map(task => {
    //     const { title, completed, createdAt, updatedAt } = task
    //     return new Task(title, completed, createdAt, updatedAt)
    // })

    //ARMAZENAR O DOM EM VARIAVEIS





    function renderTasks() {
        // ul.innerHTML = ""
        // arrInstancesTasks.forEach(taskObj => {
        //     ul.appendChild(generateLiTask(taskObj))
        // });
        tasksView.render(taskService.tasks)
    }

    function addTask(title) {
        // adicione uma nova instancia de Task

        const cb = function({title}){
            arrInstancesTasks.push(new Task(title))
            renderTasks()
        }

        const taskString = JSON.stringify({title, userId })

        createXMLHttpRequest("POST", urlTasks, cb, taskString) 

    }

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(e.target)
        if (!dataAction) return

        let currentLi = e.target
        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                });

                editContainer.style.display = "flex";


            },
            deleteButton: function () {
                arrInstancesTasks.splice(currentLiIndex, 1)
                renderTasks()

            },
            containerEditButton: function () {
                const val = currentLi.querySelector(".editInput").value
                arrInstancesTasks[currentLiIndex].setName(val)
                renderTasks()
            },
            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].getTitle()
            },
            checkButton: function () {

                // DEVE USAR O MÉTODO toggleDone do objeto correto
                arrInstancesTasks[currentLiIndex].toggleDone()
                renderTasks()
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }



    ul.addEventListener("click", clickedUl)

    renderTasks()
}







