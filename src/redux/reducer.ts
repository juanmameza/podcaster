import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PodcastEntry } from "../types";

const initialState = [
  {
    podcastList: [],
    selectedPodcast: {},
    selectedEpisode: {},
    isLoading: false,
  },
];

const podcasterSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    loadPodcastList: (state) => {
      return { ...state, isLoading: true };
    },
    loadPodcastListSuccess: (state, action: PayloadAction<PodcastEntry[]>) => {
      return { ...state, podcastList: action.payload, isLoading: false };
    },
    loadPodcastListError: (state) => {
      return { ...state, podcastList: [], isLoading: false };
    },
    selectPodcast: (state, action) => {
      return { ...state, selectedPodcast: action.payload };
    },
    selectEpisode: (state, action) => {
      return { ...state, selectedEpisode: action.payload };
    },
  },
});

export default podcasterSlice.reducer;
