### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI when the underlying data changes. React is commonly used for building single-page applications where you need a fast and dynamic user interface. It's particularly popular for its virtual DOM, which optimizes rendering performance.

- What is Babel?

Babel is a JavaScript compiler that allows developers to write code using the latest ECMAScript features (ES6+), and then transforms that code into backward-compatible versions of JavaScript that can run in older browsers. It's often used in conjunction with React to transpile JSX (React's syntax extension) and ES6 code into plain JavaScript.

- What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It looks similar to XML/HTML but ultimately gets transpiled into JavaScript. JSX makes it easier to write and understand React components by allowing you to write HTML-like code within JavaScript.

- How is a Component created in React?

A React component can be created by defining a JavaScript function or class that returns a React element.

- What are some difference between state and props?

Props are read-only and cannot be modified by the component that receives them. State is local to the component and can be modified using setState.

- What does "downward data flow" refer to in React?

"Downward data flow" in React refers to the practice of passing data from parent components to child components through props. Data flows unidirectionally, making the application more predictable and easier to understand. Child components receive data from their parent components and do not directly modify the parent's state.

- What is a controlled component?

A controlled component in React is a component where the form elements (like input, textarea, select) are controlled by the component's state. Changes to the input elements trigger a state change, and the values are controlled by the component's state.

- What is an uncontrolled component?

An uncontrolled component is a component where the form elements are not controlled by React state. Instead, the form elements hold their own state, and React is not involved in managing their state. Refs are often used to interact with and retrieve values from uncontrolled components.

- What is the purpose of the `key` prop when rendering a list of components?

The key prop is used to uniquely identify elements in a list. It helps React identify which items have changed, been added, or been removed. Having a stable identity for each element allows React to efficiently update the DOM during re-rendering.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

Using an array index as a key prop can lead to issues when items are added or removed from the list. If the order of items changes, the indexes may not accurately represent the identity of each item. This can result in inefficient updates and potential bugs.

- Describe useEffect.  What use cases is it used for in React components?

useEffect is a hook in React that allows you to perform side effects in functional components. It is used for operations that are not part of the component rendering but are related, such as data fetching, subscriptions, or manually changing the DOM. useEffect runs after the render is committed to the screen.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

useRef creates a mutable object with a current property that can hold a mutable value. It is often used to persist values across renders without causing a re-render when the value changes. A change to a ref value does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?

Use a ref when you need to persist values across renders without triggering a re-render. Don't use a ref when managing state or props is sufficient for your use case.

- What is a custom hook in React? When would you want to write one?

A custom hook in React is a JavaScript function that starts with the word "use" and can call other hooks. It allows you to extract and reuse logic from functional components. You might want to write a custom hook when you find yourself duplicating code across multiple components or when you want to share stateful logic between components. Custom hooks can encapsulate complex behavior and enhance the reusability of your code.
