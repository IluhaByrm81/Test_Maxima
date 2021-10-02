import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";
import Dropdawn from "./Components/Dropdawn/Dropdawn";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/dropdawn" component={Dropdawn} />
    </BrowserRouter>
  );
}
export default App;
