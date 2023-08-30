import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPodcastList } from "../redux/reducer";
import { PodcastEntry } from "../types";

const ListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPodcastList());
  }, []);

  const podcastList = useSelector(({ podcasts }) => {
    return podcasts.podcastList;
  });

  return (
    <>
      {podcastList &&
        podcastList.map((podcast: PodcastEntry) => (
          <div key={podcast?.id?.attributes?.["im:id"]}>
            {podcast?.title?.label}
          </div>
        ))}
    </>
  );
};

export default ListPage;
