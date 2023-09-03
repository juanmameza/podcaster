import { useSelector } from "react-redux";
import { selectEpisodeList, selectLoading } from "../redux/selectors";
import { Episode } from "../types";
import "./EpisodeList.css";

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
        <table className="episodeListTable">
          <thead>
            <tr className="episodeListTableRow">
              <th className="episodeListTableRowCell">Track name</th>
              <th className="episodeListTableRowCellSmall">Date</th>
              <th className="episodeListTableRowCellSmall">Duration</th>
            </tr>
          </thead>
          <tbody className="episodeListTableBody">
            {episodes &&
              episodes.map((episode: Episode) => (
                <tr
                  className="episodeListTableRow"
                  tabIndex={0}
                  onClick={() => onEpisodeClick(episode)}
                  key={episode.trackId}
                >
                  <td className="episodeListTableRowCell scrollableCell">
                    {episode.trackName}
                  </td>
                  <td className="episodeListTableRowCellSmall">
                    {new Date(episode.releaseDate).toLocaleDateString()}
                  </td>
                  <td className="episodeListTableRowCellSmall">
                    {millisToMinutesAndSeconds(episode.trackTimeMillis)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default EpisodeList;
