import React from "react";
import { PodcastEntry } from "../../types";
import "./PodcastDetail.css";

type Props = {
  podcast: PodcastEntry;
  onDetailClick: () => void;
};

const PodcastDetail: React.FC<Props> = ({ podcast, onDetailClick }) => {
  return (
    <article className="podcastDetailCard" onClick={onDetailClick}>
      <div className="podcastDetailBlock">
        <img src={podcast?.["im:image"][2].label} />
      </div>
      <div className="podcastDetailBlock">
        <h2>{podcast.title?.label}</h2>
        <p> by {podcast['im:artist']?.label}</p>
      </div>
      <div className="podcastDetailBlock">
        <p>{podcast.summary?.label}</p>
      </div>
    </article>
  );
};

export default PodcastDetail;
