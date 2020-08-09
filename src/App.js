import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Header } from "./components";

function App() {
  return (
    <>
      <Header />
      <div className="uk-container">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </>
  );
}

export default App;
