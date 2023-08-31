import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectPodcastDetail,
  selectPodcastListLoaded,
} from "../redux/selectors";
import "./Podcast.css";
import { loadEpisodeList, loadPodcastList } from "../redux/reducer";
import EpisodeList from "./EpisodeList";
import { PodcastViews } from "../types";
import EpisodeDetail from "./EpisodeDetail";

type Props = {
  podcastView: PodcastViews;
};

const PodcastPage: React.FC<Props> = ({ podcastView }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const podcastListLoaded = useSelector(selectPodcastListLoaded);

  useEffect(() => {
    if (!podcastListLoaded) {
      dispatch(loadPodcastList());
    }
    if (id) dispatch(loadEpisodeList(id));
  }, [id, podcastListLoaded]);

  const podcastDetail = useSelector(selectPodcastDetail(id ?? ""));

  const handleEpisodeClick = (episode: any) => {
    navigate("/podcast/" + id + "/episode/" + episode.trackId);
  };

  return (
    <div className="podcastViewContainer">
      <section className="podcastDetailContainer">
        {podcastDetail && (
          <article className="podcastDetailCard">
            <img src={podcastDetail?.["im:image"][2].label} />
            <h2>{podcastDetail.id?.attributes?.["im:id"]}</h2>
            <p>{podcastDetail.summary?.label}</p>
          </article>
        )}
      </section>
      {podcastView === PodcastViews.EpisodeList && (
        <EpisodeList
          onEpisodeClick={(episode) => handleEpisodeClick(episode)}
        />
      )}
      {podcastView === PodcastViews.EpisodeDetail && <EpisodeDetail />}
    </div>
  );
};

export default PodcastPage;
