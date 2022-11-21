import { useReducer } from "react";

export function Task1() {
  const [checked, SetChecked] = useReducer((checked) => !checked, false);
  console.log("Task1");
  return (
    <>
      <h2>Using hook "useReducer" </h2>
      <input type="checkbox" value={checked} onChange={SetChecked} />
      <label>{checked ? "checked" : "unchecked"}</label>
    </>
  );
}

export function Task2() {
  const initialState = { count1: 0, count2: 10 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count1: state.count1 + action.value };
      case "decrement":
        return { ...state, count1: state.count1 - action.value };
      case "increment2":
        return { ...state, count2: state.count2 + action.value };
      case "decrement2":
        return { ...state, count2: state.count2 - action.value };
      case "reset":
        return initialState;
      default:
        throw new Error();
    }
  }

  function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count1}
        <br />
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <br />
        Count: {state.count2}
        <br />
        <button onClick={() => dispatch({ type: "increment2", value: 10 })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 10 })}>
          -
        </button>
      </>
    );
  }

  return (
    <>
      <h2>Using hook "useReducer" </h2>
      <Counter />
    </>
  );
}

export function Task3() {
  const initialState = { theme: "Day" };

  const themereducer = (state, action) => {
    switch (action.type) {
      case "Day":
        return { theme: "Night" };
      case "Night":
        return { theme: "Day" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(themereducer, initialState);
  return (
    <>
      <h2>{state.theme}</h2>
      <button onClick={() => dispatch({ type: state.theme })}>
        Change theme
      </button>
    </>
  );
}
