import React from "react";
import data from "./data.json";
import Cart from "./components/Cart";

import "./styles.css";

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((d) => {
            console.log(d);
            return <Cart data={d} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
