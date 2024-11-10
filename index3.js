import express from 'express'

const app = express()
const Port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

/*
CRUD
*/
// app.get('/crud', (req, res) => {
//     res.send('Hello World!');
// });
// app.post("/crud", (req, res) => {
//     res.send('Create using post method');
// });

// app.put("/crud", (req, res) => {
//     res.send('update using put method');
// });
// app.delete("/crud", (req, res) => {
//     res.send('delete using delete method')
// });

// app.route().get().put().delete().post();

app.route('/crud')
    .get((req,res) => {
        res.send('Welcome! The API is ready for action!')
    })
    .post((req,res) => {
        res.send('creation complete, all set!')
    })
    .put((req,res) => {
        res.send('The update is complete!')
    })
    .delete((req,res) => {
        res.send('Gone!without a trace!')
    })

app.listen(Port, () => {
    console.log(`Example app listening on port http://localhost:${Port}`)
})