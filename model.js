const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    userSessionID: { type: String, },
    deviceType: { type: String, },
    adminID: { type: String, },
    eventType: { type: String, },
    identifier: { type: String, },
    pageTitle: { type: String, },
    browserName: { type: String, },
    browserVersion: { type: String, },
    currentURL: { type: String, },
    timestamp: { type: Date, default: Date.now }
});

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;
