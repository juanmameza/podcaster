import React from "react";
import { selectEpisodeDetail, selectLoading } from "../redux/selectors";
import { useSelector } from "react-redux";
import "./EpisodeDetail.css";

type Props = {
  episodeId?: string;
};

const EpisodeDetail: React.FC<Props> = ({ episodeId }) => {
  const episode = useSelector(selectEpisodeDetail(Number(episodeId)));
  const isLoading = useSelector(selectLoading);

  const parseHtml = (htmlString: string) => {
    const theObj = { __html: htmlString };
    return theObj;
  };

  return (
    <div className="episodeDetailContainer">
      {!isLoading && (
        <div className="episodeDetailCard">
          <h4 className="episodeDetailTitle">{episode?.trackName}</h4>
          <div dangerouslySetInnerHTML={parseHtml(episode?.description)} />
          <audio src={episode?.episodeUrl} controls autoPlay />
        </div>
      )}
    </div>
  );
};

export default EpisodeDetail;
