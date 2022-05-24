const cors = require('cors')
const express = require('express')

const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Teste para treinar docker com nodejs!')
})

app.listen(PORT, () => {
  console.log(`Server listen in port ${PORT}!`)
})
