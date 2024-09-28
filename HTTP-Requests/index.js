import express from 'express';
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})
app.get('/register', (req, res) => {
    res.sendStatus(201);
})
app.put('/user/malcolm', (req, res) => {
    res.sendStatus(200);
})
app.patch('/user/malcolm', (req, res) => {
    res.sendStatus(200);
})
app.delete('/user/malcolm', (req, res) => {
    res.sendStatus(201);
})
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
})