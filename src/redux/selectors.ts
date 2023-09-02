import { createSelector } from "@reduxjs/toolkit";
import { Episode, PodcastEntry } from "../types";

const podcastsSelector = (state: { podcasts: any }) => state.podcasts;

const selectPodcastList = createSelector([podcastsSelector], (podcasts) => {
  return podcasts.podcastList;
});
const selectFilteredPodcastList = (filter: string) =>
  createSelector([podcastsSelector], (podcasts) => {
    return podcasts.podcastList.filter(
      (podcast: PodcastEntry) =>
        podcast["im:artist"].label
          ?.toLowerCase()
          .includes(filter.toLowerCase()) ||
        podcast.title.label?.toLowerCase().includes(filter.toLowerCase())
    );
  });
const selectEpisodeList = createSelector([podcastsSelector], (podcasts) => {
  return podcasts.episodeList.results;
});

const selectLoading = createSelector([podcastsSelector], (podcasts) => {
  return podcasts.isLoading;
});

const selectPodcastListLoaded = createSelector(
  [selectPodcastList],
  (podcastList) => podcastList && podcastList.length > 0
);

const selectPodcastDetail = (id: string) =>
  createSelector(
    [selectPodcastList],
    (podcastList) =>
      podcastList &&
      podcastList.length > 0 &&
      podcastList.find(
        (podcast: PodcastEntry) => podcast.id?.attributes?.["im:id"] === id
      )
  );

const selectEpisodeDetail = (id: number) =>
  createSelector(
    [selectEpisodeList],
    (episodeList) =>
      episodeList &&
      episodeList.length > 0 &&
      episodeList.find((episode: Episode) => episode.trackId === id)
  );

export {
  selectPodcastList,
  selectFilteredPodcastList,
  selectPodcastDetail,
  selectPodcastListLoaded,
  selectEpisodeList,
  selectEpisodeDetail,
  selectLoading,
};
