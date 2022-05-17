# Advanced React Notes

## Topics Covered

- Hooks
- Conditional Rendering
- Forms
- Prop Drilling
- Context API/ useContext
- React Router

## Hooks

> Hooks were added to React in version 16.8. <br>
> Hooks allow us to "hook" into React features such as state and lifecycle methods.

Hooks are great because they let you use more of React's features – like managing your component's state, or performing an after effect when certain changes occur in state(s) without writing a class. <br>

### useState Hook

The state of our application is bound to change at some point. This could be the value of a variable, an object, or whatever type of data exists in your component.<br>

> To make it possible to have the changes reflected in the DOM, we have to use a React hook called useState.

- Example:

```JavaScript
import { useState } from "react";

function App() {
  const [name, setName] = useState("Ihechikara");
  const changeName = () => {
    setName("Chikara");
  };

  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
}
export default App;
```

#### Working Of Above Code

```JavaScript
import { useState } from "react";
```

To be able to use this `hook`, we have to import the `useState` hook from React. Also we are using a functional component called `app.`

```JavaScript
const [name, setName] = useState("Ihechikara");
```

After that, we have to create our `state `and give it an initial value (or initial state) which is "Ihechikara". The state variable is called `name`, and `setName` is the function for updating its value.<br>
Above, we used the destructuring assignment to assign an initial name value to the state in useState("Ihechikara").

```JavaScript
return (
    <div>
      <p>My name is {name}</p>
      <button onClick={changeName}> Click me </button>
    </div>
  );
```

Next, the DOM has a paragraph containing the name variable and a button which fires a function when clicked. The `changeName()` function calls the `setName()` function which then changes the value of the name variable to the value passed in to the `setName()` function.

### Rules Of Hooks
