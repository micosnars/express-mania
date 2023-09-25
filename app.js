// const http = require('http');

// buat import package express
const express = require('express');

//buat baca db boongan kita perlu pake fs
const fs = require('fs');

// buat instance express
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/users', (req, res) => {
    fs.readFile('./db/fake_database.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(JSON.parse(data));
        }
    });
});

app.get('/about', (req, res) => {
    console.log(__dirname);
    res.sendFile('./public/about.html', { root: __dirname });
});

// get by id
app.get('/users/:id/', (req, res) => {
    console.log(req.params);
    
    //destructuring an object
    const { id } = req.params;

    fs.readFile('./db/fake_database.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        } else {
            const users = JSON.parse(data);
            console.log(users);

            const user = users.find((user) => user.id === Number(id));
            res.send(user);
        }
    });
    // console.log(id , name, 'id dan nama');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
});