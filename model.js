const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    deviceType: String,
    adminID: String,
    browserName: String,
    browserVersion: String,
    currentURL: String,
    eventType: String,
    identifier: String,
    sessionID: String,
    timestamp: Date,
    pageTitle: String,
    value: String, // Optional, only for 'input' events
    userToken: String,
    deviceType: String // Add this line to include device type information
}, { timestamps: true });

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;
