const express = require('express');
const { createWorkout, getWorkouts, singleWorkout } = require('../controller/workoutController');

const router = express.Router();

// Get all workouts
router.get('/', getWorkouts);

// Get a single workout
router.get('/:id', singleWorkout);

// Create a new workout
router.post('/', createWorkout);

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({ msg: 'Delete a Workout' });
});

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({ msg: 'Update a Workout' });
});

module.exports = router;
