import React, { createContext, useEffect, useState } from "react";
import News from "./components/News";
import "./app.css";
import ButtonAppBar from "./components/nav"

function App() {
  return (
    <>
      <ButtonAppBar />

      <News />
    </>

  );
}

export default App;
