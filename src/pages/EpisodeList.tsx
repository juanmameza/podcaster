import { useSelector } from "react-redux";
import { selectEpisodeList, selectLoading } from "../redux/selectors";

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
          <tr>
            <th>Track name</th>
            <th>Duration</th>
          </tr>
          {episodes &&
            episodes.map((episode: any) => (
              <tr tabIndex={0} onClick={() => onEpisodeClick(episode)} key={episode.id}>
                <td>{episode.trackName}</td>
                <td>{millisToMinutesAndSeconds(episode.trackTimeMillis)}</td>
              </tr>
            ))}
        </table>
      )}
    </section>
  );
};

export default EpisodeList;
