import { createContext, useReducer } from "react";

// Create the context
export const WorkoutContext = createContext();

// Reducer to handle different workout actions
export const workoutReducer = (state, action) => {
  switch(action.type) {
    case 'SET_WORKOUT':
      return {
        workouts: action.payload
      };

    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts]
      };

    default:
      return state;
  }
};

// Context provider to wrap your application and pass down state and dispatch
export const WorkoutContextProvider = ({ children }) => {
  // Initialize the state using the reducer
  const [state, dispatch] = useReducer(workoutReducer, { workouts: null });

  return (
    // Make sure to use WorkoutContext.Provider here
    <WorkoutContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  );
};
