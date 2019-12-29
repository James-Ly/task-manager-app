// CRUD stands for create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
// console.log(id.id)
// console.log(id.toHexString().length)

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    /************
     * CREATE DATA
     ************/

    // INSERT ONE METHOD
    // db.collection('users').insertOne({
    //     name: 'James',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     // result.ops an array of objects
    //     console.log(result.ops)
    // })

    // INSERT MANY
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28,
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert documents")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'This is the first task',
    //         completed: true
    //     },
    //     {
    //         description: 'This is the second task',
    //         completed: false
    //     },
    //     {
    //         description: 'This is the third task',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result.ops)
    // })

    /************
     * QUERY DATA
     ************/

    // db.collection('users').findOne({ name: 'Jen', age: 1 }, (error, result) => {
    // db.collection('users').findOne({ _id: new ObjectID("5e049a7956e7a926a69ae176") }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({}, { sort: { _id: -1 } }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(result)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, results) => {
    //     console.log(results)
    // })

    /************
     * UPDATING DATA
     ************/

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5e04aa9928d1853cff254d18')
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // })

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('5e04aa9928d1853cff254d18')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    /************
     * DELETE DATA
     ************/

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})