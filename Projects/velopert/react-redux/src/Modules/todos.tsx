const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE = "todos/TOGGLE";
const REMOVE = "todos/REMOVE";

export function name(input: any) {
  return { type: CHANGE_INPUT, input };
}

let id = 3;
export function insert(text: string) {
  return {
    type: INSERT,
    todo: {
      id: id++,
      text,
      done: false
    }
  };
}

export function toggle(id: number) {
  return {
    type: TOGGLE,
    id
  };
}

export function remove(id: number) {
  return {
    type: REMOVE,
    id
  };
}

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false
    }
  ]
};

function todos(state = initialState, action: any) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo)
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
}

export default todos;
