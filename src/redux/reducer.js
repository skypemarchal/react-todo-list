import { ADD_TASK, GET_TASKS, DELETE_TASK } from "./actions";

const initialState = [];
function reducer(state = initialState, action)
  {
    switch(action.type)
    {
      case GET_TASKS:
        //initialState = action.payload;
        return action.payload;

      case DELETE_TASK:
        var current = [...state]
        current.splice(action.payload, 1)
        return current;

      case "completeItem":
          const i = action.payload;
          current = [...state];
          current[i].done = !current[i].done;
        return current;

        case "reset":
            return [];

      default:
        return state;
    }
  }

  export default reducer;