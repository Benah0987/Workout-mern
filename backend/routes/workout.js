const express = require('express')

const router = express.Router()

// get all workouts
router.get('/', (req, res) => {
    res.json({msg: 'Get All Workouts'})
})
// get a single workout
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a Single Workouts'})
})

// create a new Workout
router.post('/', (req, res) => {
    res.json({msg: 'Post a new Workouts'})
})

// delete a workoout
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a Workouts'})
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a Workouts'})
})


module.exports = router
