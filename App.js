import { createRoot } from "react-dom/client";

const Heading = (<h1>React Jsx element</h1>);
const root = createRoot(document.getElementById("root"));
root.render(<Heading />);
// Jsx when used, the function and the javascript that is used is put after data sanitization only
// React element is a java script object which is when rendered is called the HTML element
// Parcel transpiles jsx into js [behind the scenes babel does that for the parcel]

const Parent = () => {
  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <div className="child">
        <h2>Child Component</h2>
        <div className="grandchild">
          <h3>Grandchild Component</h3>
        </div>
      </div>
    </div>
  );
};
const root1 = createRoot(document.getElementById("root1"));
root1.render(<Parent />);
