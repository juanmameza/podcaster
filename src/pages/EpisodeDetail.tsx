import React from "react";
import { Episode } from "../types";
import { selectEpisodeDetail, selectLoading } from "../redux/selectors";
import { useSelector } from "react-redux";

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
    <div>
      {!isLoading && (
        <>
          <h4>{episode?.trackName}</h4>
          <div dangerouslySetInnerHTML={parseHtml(episode?.description)} />
          <audio src={episode?.episodeUrl} controls autoPlay />
        </>
      )}
    </div>
  );
};

export default EpisodeDetail;
