const express = require('express')
const app = express()
app.use(express.json())
app.use(function(req, res, next){
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})
const port = 8080

const todos = [
  {
    id: 0,
    title: "Drip Coffee",
    isCompleted: true,
  },
  {
    id: 1,
    title: "Study Angular",
    isCompleted: false,
  },
  {
    id: 1,
    title: "Study NGRX",
    isCompleted: false,
  }
]

app.get('/todos', (req, res) => {
  res.send(JSON.stringify(todos))
})

app.post('/todos', (req, res) => {
  const id = todos[todos.length - 1] + 1;
  todos.push({id, title: JSON.parse(JSON.stringify(req.body)).title, isCompleted: false})
  res.send(JSON.stringify(todos))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})