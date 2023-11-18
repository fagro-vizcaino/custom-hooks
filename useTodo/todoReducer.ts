import { Todos } from "./components/TodoList";

export const TodoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload.data);
    case DELETE_TODO:
      console.log("reducing delete todo", action.payload.data.id);

      return state.filter((c) => c.id !== action.payload.data.id);
    case TOGGLE_TODO:
      return state.map((c) => {
        if (c.id == action.payload.data.id) {
          return { ...c, done: !c.done };
        }
        return c;
      });
    default:
      return initialState;
  }
};

const initialState: Todos[] = [
  {
    id: 1,
    description: "collect soul stone",
    done: false,
  },
];
const ADD_TODO = "ADD_TODO";
export interface SetDataAction {
  type: typeof ADD_TODO;
  payload: {
    // Define your payload properties here
    data: Todos;
    // ... other properties
  };
}
const DELETE_TODO = "DELETE_TODO";
export interface DeleteDataAction {
  type: typeof DELETE_TODO;
  payload: {
    // Define your payload properties here
    data: { id: number };
    // ... other properties
  };
}

const TOGGLE_TODO = "TOGGLE_TODO";
export interface ToggleDataAction {
  type: typeof TOGGLE_TODO;
  payload: {
    // Define your payload properties here
    data: { id: number };
    // ... other properties
  };
}

type Action = SetDataAction | DeleteDataAction | ToggleDataAction;
