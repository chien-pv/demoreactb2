import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ListPost from "./components/list_post";
import SideBar from "./components/sidebar";

function App() {
  return (
    <div className="App">
      <ListPost />
      <SideBar />
    </div>
  );
}

export default App;
