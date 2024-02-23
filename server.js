const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allows all origins
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Welcome to my API!' });
});

app.post('/api', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data received successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
