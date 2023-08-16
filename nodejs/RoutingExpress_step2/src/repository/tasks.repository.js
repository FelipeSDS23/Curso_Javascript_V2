const tasks = require("../../data/tasks.json")

exports.get = async (id) => {
    if(!isNaN(id)){
        return tasks.find(task => task.id === parseInt(id))
    }
    return tasks
}

exports.post = async (data) => {

    const newData = {
        ...data,
        id: tasks[tasks.length - 1].id + 1
    }
    tasks.push(newData)
    return newData
}

exports.put = async (data, id) => {
    const taskIndex = tasks.findIndex(task => task.id === parseInt(id))
    if(taskIndex < 0){
        return null
    }
    tasks.splice(taskIndex, 1, data)
    return tasks[taskIndex]
}

exports.patch = async (taskUpdated, id) => {
    const taskById = tasks.find(task => task.id === id)
    const taskIndex = tasks.findIndex(task => task.id === id)
    if(taskIndex < 0){
        return null
    }
    const newTask = { ...taskById, ...taskUpdated }
    tasks.splice(taskIndex, 1, newTask)
    return tasks[taskIndex]
}

exports.delete = async (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id)
    const deletedTask = tasks.splice(taskIndex, 1)
    return deletedTask
}