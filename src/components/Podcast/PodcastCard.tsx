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
      <img src={podcast?.["im:image"][0].label} />
      <h5>{podcast?.["im:name"]?.label}</h5>
      <p>{podcast?.["im:artist"]?.label}</p>
    </article>
  );
};

export default PodcastCard;
