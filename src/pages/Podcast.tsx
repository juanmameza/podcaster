import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectEpisodeList, selectPodcastDetail } from "../redux/selectors";
import "./Podcast.css";
import { loadEpisodeList } from "../redux/reducer";

const PodcastPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(loadEpisodeList(id));
  }, [id]);

  const podcastDetail = useSelector(selectPodcastDetail(id ?? ""));
  const episodes = useSelector(selectEpisodeList);

  const millisToMinutesAndSeconds = (millis: number) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (Number(seconds) < 10 ? '0' : '') + seconds;
  }
  

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
      </section>
    </div>
  );
};

export default PodcastPage;
