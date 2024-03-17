const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interactionSchema = new Schema({
    adminId: { type: String, required: true },
    pages: [{
        pageName: { type: String, required: true },
        visitors: {
            identifiedVisitors: { type: Number, default: 0 },
            unidentifiedVisitors: { type: Number, default: 0 },
        },
        avgTimeSpent: { type: Number, default: 0 },
    }],
    users: [{
        tokens: [{
            token: { type: String, required: true },
            deviceName: { type: String },
            location: { type: String },
            timeSpent: { type: Number, default: 0 },
            interaction: [{
                interact: { type: String },
                date: { type: Date, default: Date.now },
                browserName: { type: String }, // Added for browser name
                browserVersion: { type: String }, // Added for browser version
            }],
        }],
    }],
}, { timestamps: true });

const Interaction = mongoose.model('Interaction', interactionSchema);

module.exports = Interaction;
