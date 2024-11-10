import express from 'express'
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.send(`<h1>Group 6:</h1>
                <h2>Harshita Kashyap, Harshpreet Kaur</h2>`)
})

app.listen(port,() => {
    console.log(`Example app listening on port http://localhost:${port}`)
})