const repository = require("../repository/tasks.repository")

exports.get = async (req, res) => {
    try {
        let tasks = await repository.get()
        res.status(200).send(tasks)
    } catch (e) {
        res.status(500).send({ message: "erro 500", err: e })
    }
}

exports.post = async (req, res) => {
    const { title, userId } = req.body

    const newTask = {
        title,
        completed: false,
        createdAt: Date.now(),
        updatedAt: null,
        userId
    }
    try {
        const data = await repository.post(newTask)
        res.status(201).send(data)
    } catch (e) {
        res.status(500).send({ message: "erro 500", err: e })
    }
}

exports.getById = async (req, res) => {
    try {
        const data = await repository.get(parseInt(req.params.id))
        if(data){
            res.status(200).send(data)
        } else {
            res.status(404).end()
        }
        
    } catch (e) {
        res.status(500).send({ message: "erro 500", err: e })
    }
}

exports.put = async (req, res) => {
    const { title, completed, createdAt, updatedAt, userId } = req.body
    const newTask = {
        title,
        completed,
        createdAt,
        updatedAt,
        id: parseInt(req.params.id),
        userId
    }

    try {
        const data = await repository.put(newTask, req.params.id)
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: "erro 500", err: e })
    }

}

exports.patch = async (req, res) => {
    const { title, completed, userId } = req.body

    const updatedAt = Date.now()

    const taskUpdated = { title, completed, userId, updatedAt }

    for (let prop in taskUpdated) {
        if (typeof taskUpdated[prop] === "undefined") delete taskUpdated[prop]
    }

    try {
        const data = await repository.patch(taskUpdated, parseInt(req.params.id))
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: "erro 500", err: e })
    }
}

exports.delete = async (req, res) => {

    try {
        const data = await repository.delete(parseInt(req.params.id))
        res.status(200).send(data)
    } catch (e) {
        res.status(500).send({ message: "erro 500", err: e })
    }

}