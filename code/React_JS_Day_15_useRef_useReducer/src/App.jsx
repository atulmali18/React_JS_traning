import React, { useReducer } from "react";


const App = () => {

  // 3
  // handles all logical part by accessing initial state value and dispatched action
  const reducer = (state, action) => {
    // alert(state.count)
    // alert(action.type)



    switch (action.type) {
      case 'INC': {
        return { count: state.count + 5 }

      }

      case 'DEC': {
        return { count: state.count - 5 }
      }

      case 'reset': {
        return { count: 0 }
      }

      default: {
        return state
      }

    }




  }



  //2
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>


      <h1> Initial Count Is {state.count}</h1>

      <button onClick={() => dispatch({ type: 'INC' })} style={{ margin: "10px" }}>Update Count</button>

      <button onClick={() => dispatch({ type: 'DEC' })} style={{ margin: "10px" }}>Reduce Count</button>

      <button onClick={() => dispatch({ type: 'reset' })}>Reset Button</button>

    </div>
  );
};

export default App;