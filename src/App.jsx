import React from "react";
import Index from "./Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter basename="/Google-Map-With-Range">
        <Routes>
          <Route path="/" element={<Index />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
