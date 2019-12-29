const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth.js')
const Task = require('../models/tasks.js')

router.post('/tasks', auth, async (req, res) => {
    try {
        // const task = new Task(req.body)
        const task = new Task({
            ...req.body,
            owner: req.user._id
        })
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

router.get('/tasks', auth, async (req, res) => {
    const match = {}
    const sort = {}
    if (req.query.completed) {
        match.completed = req.query.completed === 'true'
    }
    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1

    }
    try {
        // const tasks = await Task.find({})
        await req.user.populate({
            path: 'task',
            match: match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort: sort
            }
        }).execPopulate()
        if (!req.user.task) {
            res.status(404).send()
        }
        res.status(200).send(req.user.task)
    } catch (error) {
        res.status(500).send('Error', error)
    }

    // Task.find({}).then((tasks) => {
    //     if (!tasks) {
    //         res.status(404).send()
    //     } else {
    //         res.status(200).send(tasks)
    //     }
    // }).catch((error) => {
    //     res.status(500).send('Error', error)
    // })
})

router.get('/tasks/:id', auth, async (req, res) => {

    try {
        // const task = await Task.findById(req.params.id)
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            res.status(404).send()
        }
        res.status(200).send(task)
    } catch (error) {
        res.status(500).send('Error', error)
    }

    // Task.findById(req.params.id).then((task) => {
    //     if (!task) {
    //         res.status(404).send()
    //     } else {
    //         res.status(200).send(task)
    //     }
    // }).catch((error) => {
    //     res.status(500).send('Error', error)
    // })
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })
    if (!isValidOperation) {
        res.status(400).send({ Error: 'Invalid update' })
    }
    try {
        // Fix the update method to allow for potential middleware
        // const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        // const task = await Task.findById(req.params.id)

        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => {
            task[update] = req.body[update]
        })

        await task.save()

        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        console.log("Failed update for task")
        console.log(error)
        res.status(500).send(error)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        // const task = await Task.findByIdAndDelete(req.params.id)
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if (!task) {
            res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router