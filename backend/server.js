require('dotenv').config()

const express = require('express');
const workoutRoutes = require('./routes/workout')

// express app
const app = express();

// middleware global
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

// routes
app.use('/api/workouts',workoutRoutes)

// listen for request 
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000', process.env.PORT);
});

process.env