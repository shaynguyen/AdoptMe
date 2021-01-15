import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", animal: "cat", breed: "Mixed" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
