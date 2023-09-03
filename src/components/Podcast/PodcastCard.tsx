import React from "react";
import { PodcastEntry } from "../../types";
import "./PodcastCard.css";

type Props = {
  podcast: PodcastEntry;
  onCardClick: () => void;
};

const PodcastCard: React.FC<Props> = ({ podcast, onCardClick }) => {
  return (
    <article className="podcastCard" onClick={onCardClick}>
      <div className="podcastCardBox">
        <img src={podcast?.["im:image"][2].label} alt="" />
        <h5>{podcast?.["im:name"]?.label}</h5>
        <p>{"Author: " + podcast?.["im:artist"]?.label}</p>
      </div>
    </article>
  );
};

export default PodcastCard;
