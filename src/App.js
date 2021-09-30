import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dropdawn from "./Components/Dropdawn/Dropdawn";
import MainPage from "./Components/MainPage/MainPage"
// import api from "./Pages/api.json"

function App() {


  return (
    <BrowserRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/dropdawn" component={Dropdawn} />
      {/* <Route path="/fakeapi" component={api}/> */}
    </BrowserRouter>
  );
}
export default App;
