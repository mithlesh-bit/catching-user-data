const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Interaction = require('./model')
const app = express();
const port = 6000;

// MongoDB connection URI
const dbURI = 'mongodb+srv://mithlesh:1234@cluster0.tnbojkw.mongodb.net/click-up';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error('MongoDB Connection Error:', err));

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
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

app.post('/api', async (req, res) => {
    console.log("is called");
    try {
        const interaction = new Interaction(req.body);
        await interaction.save();
        console.log("is saved");

        res.status(201).json({ message: "Interaction logged successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to log interaction", error: error.message });
    }
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
