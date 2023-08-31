import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListPage from "./pages/List";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { PodcastViews, Views } from "./types";
import PodcastPage from "./pages/Podcast";
import EpisodePage from "./pages/EpisodeDetail";

type Props = {
  view: Views;
};

const App: React.FC<Props> = ({ view }) => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Header onClickHome={() => navigate("/")}></Header>
      {view === Views.Home && <ListPage />}
      {view === Views.Podcast && (
        <PodcastPage podcastView={PodcastViews.EpisodeList} />
      )}
      {view === Views.Episode && (
        <PodcastPage podcastView={PodcastViews.EpisodeDetail} />
      )}
    </div>
  );
};

export default App;
