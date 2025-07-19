const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From, React"
);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const paret = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "I am an h1 tag"),
    React.createElement("h2", { id: "child2" }, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "I am an h1 tag"),
    React.createElement("h2", { id: "child2" }, "I am an h2 tag"),
  ]),
]);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(paret);
