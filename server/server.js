const express = require('express')
const app = express()
app.use(express.json())
const port = 8080

const todos = [
  {
    id: 0,
    todo: "Drip Coffee",
    isCompleted: true,
  },
  {
    id: 1,
    todo: "Study Angular",
    isCompleted: false,
  },
  {
    id: 1,
    todo: "Study NGRX",
    isCompleted: false,
  }
]

app.get('/todos', (req, res) => {
  res.send(JSON.stringify(todos))
})

app.post('/todos', (req, res) => {
  todos.push(JSON.parse(JSON.stringify(req.body)))
  res.send(JSON.stringify(todos))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})