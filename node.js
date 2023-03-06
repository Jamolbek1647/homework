const express = require('express')
const fs = require('fs')
const app = express()
var cors = require('cors')
const { json } = require('express')
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended: false, limit:'50mb'}))

const productRouter = express.Router();
productRouter.post('/create', function(req, res){
    const {firstname, lastname, age} = req.body
    const persons = [];
    persons.push({firstname, lastname, age});
    fs.writeFileSync('person_list.json', JSON.stringify(persons));
    console.log(firstname, lastname, age);
    res.status(200)
    res.setHeader('Content-Type', 'application/json')
    res.send({message: `${firstname}, ${lastname} bazaga saqlandi`})
})

// const productRouter = express.Router();
// productRouter.post('/create', function(req, res){
//     const {firstName, lastName} = req.body;
//     console.log();
// })

app.use('/persons', productRouter)
app.get('/', function(req, res){
    console.log(req.body);
    res.send('PERSON API')
})

const port = 3000;
app.listen(port, ()=> {
    console.log(`Dastur ${port} da ishga tushdi`);
})