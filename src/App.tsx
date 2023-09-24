import type { Component } from "solid-js";
import Button from "./components/Button";

// Call function to generate random number to pass to buttons

const App: Component = () => {
  return (
    <>
      <Button question="hi" />
      <p>or</p>
      <Button question="hello" />
    </>
  );
};

export default App;
