const express = require('express')
require('./db/mongoose.js')
const User = require('./models/users.js')
const Task = require('./models/tasks.js')
const userRouter = require('./router/user.js')
const taskRouter = require('./router/task.js')

const app = express()
const port = process.env.PORT


/************
 * IMAGE UPLOAD 
 ************/
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a word document'))
//         }
//         cb(undefined, true)
//         // cb(new Error('File must be a PDF'))
//         // cb(undefined, true)
//         // cb(undefined,false)
//     }
// })

// // Handle error message returned
// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), (req, res) => {
// // app.post('/upload', errorMiddleware, (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error:error.message})
// })

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled!')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('The site is temporarily under maintenance')
// })

// use middle-ware function to parse the req.body   
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



//
// Without middleware: new request -> Run route handler
//
// With middleware: new request -> do something -> Run route handler
//



app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})

/**************
 * BCRYPT HASING EXAMPLE
 **************/

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch)

// }

// myFunction()

/************
 * TOKEN EXAMPLE
 ************/

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     //Secret is <Thisismynewcourse>
//     // The third argument indicates when the token will expire
//     const token = jwt.sign({ _id: 'abc123' }, 'Thisismynewcourse', { expiresIn: '7 days' })
//     console.log(token)

//     //Verify the token
//     const data = jwt.verify(token, 'Thisismynewcourse')
//     console.log(data)
// }

// myFunction()

/****************
 * TASK DEMONSTRATION
 ****************/
// const main = async () => {
//     // const task = await Task.findById('5e070f513a27eb76f733445b')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5e070e6de0371775cd051d62')
//     await user.populate('task').execPopulate()
//     console.log(user.task)
// }

// main()