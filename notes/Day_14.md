# Day 14 - Context API

---

## **Props Drilling**

* Props drilling occurs when you **pass data from parent to child through multiple nested components**.
* It can lead to **unnecessary passing of data**, making the code harder to maintain.

---

## **Context API**

* Context API is used to **share state globally** across components **without props drilling**.
* It allows a component to **consume data directly** from a provider, no matter how deep it is in the component tree.

---

### **1️⃣ Create the Context**

```javascript
// ThemeContext.js
import React, { createContext, useState } from "react";

// 1. Create Context
export const ThemeContext = createContext();

// 2. Create Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

* `ThemeContext` → The context object to share state.
* `ThemeProvider` → Component wrapping children and providing state and functions.

---

### **2️⃣ Wrap your App with Provider**

```javascript
// App.js
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Navbar from "./Navbar";
import Content from "./Content";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}

export default App;
```

* Wrap your app (or part of it) with the provider to **make context accessible** to all children.

---

### **3️⃣ Consume Context in a Component**

```javascript
// Navbar.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "10px 20px",
        backgroundColor: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>My App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
```

* `useContext(ThemeContext)` allows **direct access to context values**.
* No need to pass props manually through intermediate components.

---

### **4️⃣ Another Component using Context**

```javascript
// Content.js
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "light" ? "#fff" : "#555",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>This is some content in {theme} mode.</p>
    </div>
  );
};

export default Content;
```

* Any child component can **consume context values directly** using `useContext`.

---

### ✅ **Key Points**

1. Context API **avoids props drilling** by providing global state access.
2. `ThemeContext.js` defines the context and provider.
3. `useContext` hook is used to **read values from context** in any child component.
4. Any updates to the context (like toggling theme) will **re-render all components consuming it**.

