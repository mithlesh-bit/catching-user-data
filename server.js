const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Admin = require('./model')
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
    try {
        const { userSessionID, deviceType, adminID, eventType, identifier, pageTitle, browserName, browserVersion, currentURL } = req.body;
        const timestamp = new Date(); // You might already have this from the client or want to use the server time

        const newInteraction = new Admin({
            userSessionID, deviceType, adminID, eventType, identifier, pageTitle, browserName, browserVersion, currentURL, timestamp
        });

        await newInteraction.save();
        res.status(201).send({ message: "Interaction logged successfully." });
    } catch (error) {
        console.error('Error saving interaction:', error);
        res.status(500).send({ message: "Error logging interaction." });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
