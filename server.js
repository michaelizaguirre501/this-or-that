//set up environment
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()


//Connect to Mongo
let db,
    dbConnectionStr = process.env.MONGO_DB,
    dbName = 'this-or-that'

MongoClient.connect(dbConnectionStr, {
        useUnifiedTopology: true
    })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })
//Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

//API
app.locals.counter = 0
app.get('/', (request, response) => {
    db.collection('questions').find().toArray()
        .then(data => {
            response.render('index.ejs', {
                info: data
            })
        })
        .catch(error => console.error(error))
})




//Server Listen
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


// Set up alert / modal to have user enter name, post that data as a new player object in the players collection 
// have the questions show up one at a time, on click show the next question and update the player in the player collection with that choice 
// add admin page with form for me to add new question objects
// whole lotta css 