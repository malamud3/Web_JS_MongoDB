require('dotenv').config()
const express = require('express')
const app = express()
const expressLayouts= require('express-ejs-layouts')
const mongoose = require('mongoose')
var cors = require('cors')
app.use(cors({
    origin: '*'
}));

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

//GUI
app.set('view engine','ejs')
app.set('views',__dirname + '/views')
app.set('layout','layots/layout')
app.use(expressLayouts)
app.use(express.static('public'))

//DATABASE
mongoose.connect('mongodb+srv://amir:amir@bestsites.mtxy2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser : true, useUnifiedTopology:true })
const db= mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log('Connected to Database'))

app.use(express.json())

const sitesRouter= require('./routes/sites')
app.use('/sites',sitesRouter)
app.listen(process.env.PORT || 3000, ()=> console.log('server Started'))