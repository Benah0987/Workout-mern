const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    load: {
        type: Number,
        required: true,
    },
    reps: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Workout', workoutSchema);
