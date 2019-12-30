const express = require('express')
require('./db/mongoose.js')
const User = require('./models/users.js')
const Task = require('./models/tasks.js')
const userRouter = require('./router/user.js')
const taskRouter = require('./router/task.js')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app