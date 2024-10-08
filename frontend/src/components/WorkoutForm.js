import { useState } from "react"
import { useWorkoutContext } from "../Hook/useWorkoutContext";

const WorkoutForm = () => {
    const { dispatch } = useWorkoutContext();  
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout = { title, load, reps }

        const response = await fetch("/api/workouts", {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('new workout added', json)
            dispatch({type: 'CREATE_WORKOUT', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add New Workout</h3>

            <label>Exercise Title</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
            />

            <label>Load (kg)</label>
            <input
                type="number"
                onChange={(e) => setLoad(e.target.value)}
                value={load}
                required
            />

            <label>Reps</label>
            <input
                type="number"  // Correct the input type
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                required
            />
            <button type="submit">Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;
