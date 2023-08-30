import { createSelector } from "@reduxjs/toolkit";
import { PodcastEntry } from "../types";

const podcastsSelector = (state: { podcasts: any }) => state.podcasts;

const selectPodcastList = createSelector([podcastsSelector], (podcasts) => {
  return podcasts.podcastList;
});
const selectEpisodeList = createSelector([podcastsSelector], (podcasts) => {
  return podcasts.episodeList.results;
});

const selectPodcastDetail = (id: string) =>
  createSelector([selectPodcastList], (podcastList) =>
    podcastList.find(
      (podcast: PodcastEntry) => podcast.id?.attributes?.["im:id"] === id
    )
  );


export { selectPodcastList, selectPodcastDetail, selectEpisodeList };
