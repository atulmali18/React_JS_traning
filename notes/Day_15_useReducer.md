# Day 15 - Advanced Hooks: `useReducer()` & `useRef()`




## useRef()

---

## Control Components and unControl Components

# Control Components : 

# Control unComponents :


## **useReducer()**

`useReducer` is a React hook used for **state management**, especially when the state logic is complex or involves multiple sub-values. It is an alternative to `useState`.

**Syntax:**

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

* `reducer`: A function that receives the current state and an action, and returns the new state.
* `initialState`: Initial state value.
* `state`: Current state.
* `dispatch`: Function to send actions to the reducer.

---

### **Example 1: Simple Counter**

```javascript
import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
```

✅ **Explanation:**

* `dispatch` sends an action to the reducer.
* Reducer updates the state based on the action type.

---

### **Example 2: Todo List with useReducer**

```javascript
import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
```

---

If you want, I can continue this **Day 15 note** and add **`useRef()` with examples** in the same Markdown so it’s ready for your daily study.

Do you want me to do that?
