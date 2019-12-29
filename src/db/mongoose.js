const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})


'thisismynewcourse'
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const newtask = new Task({
//     description: 'Do the laundry',
//     completed: true,
// })

// newtask.save().then(() => {
//     console.log(newtask)
// }).catch((error) => {
//     console.log('Error', error)
// })