import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPodcastList } from "../redux/reducer";
import { PodcastEntry } from "../types";
import PodcastCard from "../components/Podcast/PodcastCard";
import './List.css'
import { useNavigate } from "react-router-dom";

const ListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPodcastList());
  }, []);

  const podcastList = useSelector(({ podcasts }) => {
    return podcasts.podcastList;
  });

  const handleCardClick = (podcast: PodcastEntry) => {
    navigate(`/podcast/${podcast.id?.attributes?.['im:id']}`);
  }

  return (
    <section className="list">
      {podcastList &&
        podcastList.map((podcast: PodcastEntry) => (
          <PodcastCard key={podcast?.id?.attributes?.["im:id"]} podcast={podcast} onCardClick={()=>handleCardClick(podcast)}/>
        ))}
    </section>
  );
};

export default ListPage;
