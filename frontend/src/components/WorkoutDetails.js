import { useWorkoutContext } from "../Hook/useWorkoutContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();  // Now it's correctly used.

  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
  
    const json = await response.json();
  
    if (response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: { _id: workout._id } });  // Ensure you pass the correct _id
    } else {
      console.error('Failed to delete workout:', json.error);  // Log any errors
    }
  };
  

  return (
    <div className="workout-details">
      <h4>{workout.category}</h4>
      <h4>{workout.title}</h4>
      <p><strong>Load (kg):</strong> {workout.load}</p>
      <p><strong>Reps:</strong> {workout.reps}</p>
      <p><strong>Created on:</strong> {new Date(workout.createdAt).toLocaleDateString()}</p>
      <p><strong>Created at:</strong> {new Date(workout.createdAt).toLocaleTimeString()}</p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
