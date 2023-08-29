import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListPage from "./pages/List";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header onClickHome={() => navigate("/")}></Header>
      <ListPage />
    </div>
  );
};

export default App;
