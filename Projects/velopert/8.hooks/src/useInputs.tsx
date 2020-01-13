import { useReducer } from "react";

// const [state, dispatch] = useReducer(reducer, initialState, init);

type State = {
  name: string;
  nickName: string;
};

function reducer(state: State, action: EventTarget & HTMLInputElement): State {
  return { ...state, [action.className]: action.value };
}

export default function useInputs(
  initialForm: State
): [State, (e: React.ChangeEvent<HTMLInputElement>) => void] {
  const [state, dispatch] = useReducer(reducer, initialForm);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(e.target);
  }
  return [state, onChange];
}
