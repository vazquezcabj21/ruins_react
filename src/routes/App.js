
import "./App.css";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Planes from "./Planes";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route exact path = "/" element = {<Home/>}></Route>
          <Route path = "/plans" element = {<Planes/>}></Route>
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
