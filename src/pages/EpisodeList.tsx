import { useSelector } from "react-redux";
import { selectEpisodeList, selectLoading } from "../redux/selectors";
import { Episode } from "../types";

type Props = {
  onEpisodeClick: (episode: any) => void;
};

const EpisodeList: React.FC<Props> = ({ onEpisodeClick }) => {
  const episodes = useSelector(selectEpisodeList);
  const isLoading = useSelector(selectLoading);

  const millisToMinutesAndSeconds = (millis: number) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (Number(seconds) < 10 ? "0" : "") + seconds;
  };

  return (
    <section className="episodeListContainer">
      {!isLoading && (
        <table>
          <thead>
            <tr>
              <th>Track name</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {episodes &&
              episodes.map((episode: Episode) => (
                <tr
                  tabIndex={0}
                  onClick={() => onEpisodeClick(episode)}
                  key={episode.trackId}
                >
                  <td>{episode.trackName}</td>
                  <td>{millisToMinutesAndSeconds(episode.trackTimeMillis)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default EpisodeList;
