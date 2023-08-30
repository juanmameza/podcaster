import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListPage from "./pages/List";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { Views } from "./types";
import PodcastPage from "./pages/Podcast";
import EpisodePage from "./pages/Episode";

type Props = {
  view: Views;
}

const App: React.FC<Props> = ({view}) => {
  const navigate = useNavigate();


  return (
    <div className="App">
      <Header onClickHome={() => navigate("/")}></Header>
      {view === Views.Home && <ListPage />}
      {view === Views.Episode && <EpisodePage />}
      {view === Views.Podcast && <PodcastPage />}
    </div>
  );
};

export default App;
