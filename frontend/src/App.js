import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import User from "./users/components/User";
import Place from "./places/pages/place";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" />}/>
        <Route path="/" element={<User />} />
        <Route path="/place" element={<Place />} />
      </Routes>
      {/* <Navigate to="/" /> */}
    </BrowserRouter>
  );
};

export default App;
