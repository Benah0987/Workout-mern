import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutContext = () => {

    const context = useContext(WorkoutContext)

    if(!context){
        throw Error("useWorkoutContext to be used inside WorkoutsContextProvider")
    }

    return context
}