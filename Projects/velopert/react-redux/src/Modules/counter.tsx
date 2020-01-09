const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export interface state {
  number: number;
}

function increase() {
  return { type: INCREASE };
}
function decrease() {
  return { type: DECREASE };
}

export { increase, decrease };

const initialState: state = {
  number: 0
};

function counter(state = initialState, action: any) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter;
