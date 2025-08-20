import ReactDOM from "react-dom/client";
import { Header } from "./Component/Header";
import { Bodly } from "./Component/Bodly";

/**
 * WireFrame ))))
 * Header
 *  - Logo
 * - Nav Item
 *  Body
 *  - Search Bar
 *  -Restaurant Container
 *    - Restaurant Card
 *     -Name
 *     - Cuisines
 *     - Rating
 *  Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */
// const styleCard ={
//   backgroundColor: "teal",
// }

{/* <input type="text" placeholder="Search..." />; */}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Bodly />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
