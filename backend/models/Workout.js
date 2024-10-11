const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true }); // This adds createdAt and updatedAt automatically

module.exports = mongoose.model('Workout', workoutSchema);
