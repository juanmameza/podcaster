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
import PodcastDetail from "../components/Podcast/PodcastDetail";

type Props = {
  podcastView: PodcastViews;
};

const PodcastPage: React.FC<Props> = ({ podcastView }) => {
  const { podcastId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const podcastListLoaded = useSelector(selectPodcastListLoaded);

  useEffect(() => {
    if (!podcastListLoaded) {
      dispatch(loadPodcastList());
    }
    if (podcastId) {
      dispatch(loadEpisodeList(podcastId));
    }
  }, [podcastId, podcastListLoaded]);

  const podcastDetail = useSelector(selectPodcastDetail(podcastId ?? ""));

  const handleEpisodeClick = (episode: any) => {
    navigate("/podcast/" + podcastId + "/episode/" + episode.trackId);
  };

  const handlePodcastDetailClick = () => {
    navigate("/podcast/" + podcastId);
  };

  return (
    <div className="podcastViewContainer">
      <section className="podcastDetailContainer">
        {podcastDetail && (
          <PodcastDetail
            podcast={podcastDetail}
            onDetailClick={handlePodcastDetailClick}
          ></PodcastDetail>
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
