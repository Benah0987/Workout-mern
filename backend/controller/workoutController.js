const Workout = require('../models/Workout');
const mongoose = require('mongoose');

// Controller function to create a new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    try {
        const workout = new Workout({ title, load, reps });
        await workout.save();
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to get a single workout
const singleWorkout = async (req, res) => {
    const { id } = req.params;

    try {
        const workout = await Workout.findById(id);

        if (!workout) {
            return res.status(404).json({ error: "Workout not found" });
        }

        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controller function to delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid workout ID' });
    }

    try {
        // Find the workout by ID and delete it
        const workout = await Workout.findByIdAndDelete(id);

        // If the workout does not exist
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }

        res.status(200).json({ message: 'Workout deleted successfully', workout });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller function to update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid workout ID' });
    }

    try {
        // Find the workout by ID and update it
        const workout = await Workout.findByIdAndUpdate(id, { ...req.body }, { new: true });

        // If the workout does not exist
        if (!workout) {
            return res.status(404).json({ error: 'Workout not found' });
        }

        res.status(200).json({ message: 'Workout updated successfully', workout });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createWorkout,
    getWorkouts,
    singleWorkout,
    deleteWorkout,
    updateWorkout,
};
