import React from "react";
import MyInfo from "./Pages/MyInfo";
import {Route, Routes} from "react-router-dom";
import UpdateInfo from "./Pages/UpdateInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyInfo />} />
      <Route path="/update" element={<UpdateInfo />} />
    </Routes>
  );
}

export default App;
