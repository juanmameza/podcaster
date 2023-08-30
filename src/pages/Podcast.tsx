import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectEpisodeList,
  selectLoading,
  selectPodcastDetail,
  selectPodcastListLoaded,
} from "../redux/selectors";
import "./Podcast.css";
import { loadEpisodeList, loadPodcastList } from "../redux/reducer";

const PodcastPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const podcastListLoaded = useSelector(selectPodcastListLoaded);

  useEffect(() => {
    if (!podcastListLoaded) {
      dispatch(loadPodcastList());
    }
    if (id) dispatch(loadEpisodeList(id));
  }, [id, podcastListLoaded]);

  const podcastDetail = useSelector(selectPodcastDetail(id ?? ""));
  const episodes = useSelector(selectEpisodeList);
  const isLoading = useSelector(selectLoading);

  const millisToMinutesAndSeconds = (millis: number) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
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
      <section className="episodeListContainer">
        {!isLoading && (
          <table>
            <tr>
              <th>Track name</th>
              <th>Duration</th>
            </tr>
            {episodes &&
              episodes.map((episode: any) => (
                <tr>
                  <td>{episode.trackName}</td>
                  <td>{millisToMinutesAndSeconds(episode.trackTimeMillis)}</td>
                </tr>
              ))}
          </table>
        )}
      </section>
    </div>
  );
};

export default PodcastPage;
