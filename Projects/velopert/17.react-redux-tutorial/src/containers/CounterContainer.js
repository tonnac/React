import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../modules/counter";

export default function CounterContainer() {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();

  const onIncrease = useCallback(() => dispatch(increase), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

// const mapStateToProps = state => ({
//   number: state.counter.number
// });

// const mapDispatchToProps = dispatch => ({
//   onIncrease: () => {
//     dispatch(increase());
//   },
//   onDecrease: () => {
//     dispatch(decrease());
//   }
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ConterConatainer);

// export default connect(
//   state => ({
//     number: state.counter.number
//   }),
//   { onIncrease: increase, onDecrease: decrease }
// )(CounterContainer);
