const express = require('express');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my personal over own Smarty Pant!! with auto restart')
});

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01751235467'},
    {id: 2, name: 'Shabnor', email: 'shabnor@gmail.com', phone: '01751235467'},
    {id: 3, name: 'Shuchorita', email: 'shuchorita@gmail.com', phone: '01751235467'},
    {id: 4, name: 'Suchonda', email: 'suchonda@gmail.com', phone: '01751235467'},
    {id: 5, name: 'Srabonti', email: 'srabonti@gmail.com', phone: '01751235467'},
    {id: 6, name: 'Sabila', email: 'sabila@gmail.com', phone: '01751235467'},
    {id: 7, name: 'Sohana', email: 'sohana@gmail.com', phone: '01751235467'}
]

// app.get('/users', (req, res) => {
//     res.send(users)
// })

 // filter by search query parameter
app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users);
    }
    res.send(users)
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges'])
});

app.get('/fruits/mango/fazle', (req, res) => {
    res.send('sour soud fazle flavor')
})

app.listen(port, () => {
    console.log('Listening to port', port)
})