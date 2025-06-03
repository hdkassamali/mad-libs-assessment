### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a JavaScript library for building user interfaces. You'd use it when you need to create interactive UIs with reusable components that efficiently update when your data changes.

- What is Babel?
  - Babel is a JavaScript compiler that lets you use newer JavaScript features by converting them to code that older browsers can understand.

- What is JSX?
  - JSX is a syntax extension for JavaScript that looks like HTML and makes it easier to write and visualize React components.

- How is a Component created in React?
  - You create a component by defining a function that returns JSX or by extending the React.Component class.

- What are some difference between state and props?
  - Props are passed to components from parents and are read-only, while state is managed within a component and can be updated.

- What does "downward data flow" refer to in React?
  - It means data flows from parent components down to child components through props, making the app more predictable and easier to debug.

- What is a controlled component?
  - A component where form elements like inputs are controlled by React state, so React controls both the displayed value and updates to it.

- What is an uncontrolled component?
  - A component that maintains its own internal state, like traditional HTML form elements that store their own values.

- What is the purpose of the `key` prop when rendering a list of components?
  - Keys help React identify which items have changed, been added, or removed, making updates more efficient.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - Indexes can change if the array order changes, leading to unexpected behavior and performance issues, especially with dynamic lists.

- Describe useEffect. What use cases is it used for in React components?
  - useEffect lets you perform side effects in function components, like data fetching, subscriptions, or manually changing the DOM.

- What does useRef do? Does a change to a ref value cause a rerender of a component?
  - useRef creates a mutable object with a .current property that persists across renders. Changes to refs don't trigger re-renders.

- When would you use a ref? When wouldn't you use one?
  - Use refs for accessing DOM elements directly or storing values that shouldn't trigger rerenders. Don't use them when state or props would be more appropriate.

- What is a custom hook in React? When would you want to write one?
  - A custom hook is a JavaScript function that starts with "use" and can call other hooks. Write one when you want to reuse stateful logic between components.
