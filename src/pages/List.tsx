import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPodcastList } from "../redux/reducer";
import { PodcastEntry } from "../types";
import PodcastCard from "../components/Podcast/PodcastCard";
import "./List.css";
import { useNavigate } from "react-router-dom";
import { selectFilteredPodcastList } from "../redux/selectors";
import Filter from "../components/Filter";

const ListPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterStr, setFilterStr] = useState("");

  useEffect(() => {
    dispatch(loadPodcastList());
  }, [dispatch]);

  const podcastList: PodcastEntry[] = useSelector(
    selectFilteredPodcastList(filterStr)
  );

  const handleCardClick = (podcast: PodcastEntry) => {
    navigate(`/podcast/${podcast.id?.attributes?.["im:id"]}`);
  };

  const handleFilterChange = (value: string) => {
    setFilterStr(value);
  };

  return (
    <>
      <Filter
        filterCount={podcastList.length}
        onInputChange={(value) => handleFilterChange(value)}
      />
      <section className="list">
        {podcastList &&
          podcastList.map((podcast: PodcastEntry) => (
            <PodcastCard
              key={podcast?.id?.attributes?.["im:id"]}
              podcast={podcast}
              onCardClick={() => handleCardClick(podcast)}
            />
          ))}
      </section>
    </>
  );
};

export default ListPage;
