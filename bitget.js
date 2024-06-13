const express = require('express')
const task = require('./routes/apiRoutes.js')

const PORT = 7000

const app = express()
app.use(express.json())

app.use('/task', task);

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})