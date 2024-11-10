import express from 'express'

//need to import json data
import cars from './data/supercars.json' assert {type: 'json'}
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/cars', (req, res) => {
    res.json(cars)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})