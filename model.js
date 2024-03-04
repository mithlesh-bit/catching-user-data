const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    eventType: String,
    identifier: String,
    sessionID: String,
    timestamp: Date,
    pageTitle: String,
    value: String,
    userToken: String
}, { timestamps: true });

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;
