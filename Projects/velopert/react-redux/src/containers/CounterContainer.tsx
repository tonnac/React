import React from "react";
import Counter from "../Components/Counter";
import { CounterParam } from "../Components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../Modules/counter";
import { bindActionCreators } from "redux";

function CounterContainer(labell: CounterParam) {
  const { number, onIncrease, onDecrease } = labell;
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
}

function mapStateToProps(state: any) {
  return { number: state.counter.number };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onIncrease: () => {
      dispatch(increase());
    },
    onDecrease: () => {
      dispatch(decrease());
    }
  };
}

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

export default connect(
  (state: any) => ({
    number: state.counter.number
  }),
  (dispatch: any) =>
    bindActionCreators(
      {
        increase,
        decrease
      },
      dispatch
    )
)(CounterContainer);
