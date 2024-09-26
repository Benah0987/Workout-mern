const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong> Load (kg): </strong>{workout.load}</p>
            <p><strong> Reps: </strong>{workout.reps}</p>
            <p><strong>Created on:</strong> {new Date(workout.createdAt).toLocaleDateString()}</p> 
            <p><strong>Created at:</strong> {new Date(workout.createdAt).toLocaleTimeString()}</p> 

        </div>
    )
}

export default WorkoutDetails