import React from "react";

import "./App.css";
import BlogBody from "./view/BlogBody";
import Header from "./view/Header";
import Home from "./view/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <BlogBody />
    </div>
  );
}

export default App;
