import { PayloadAction, createAction, createSlice } from "@reduxjs/toolkit";
import { PodcastEntry } from "../types";

const initialState = {
  podcastList: [],
  episodeList: [],
  selectedPodcast: '', 
  selectedEpisode: {},
  isLoading: false,
};

const podcasterSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {
    loadPodcastList: (state) => {
      return { ...state, isLoading: true };
    },
    loadPodcastListSuccess: (
      state,
      action
    ) => {
      return { ...state, podcastList: action.payload, isLoading: false };
    },
    loadPodcastListError: (state) => {
      return { ...state, podcastList: [], isLoading: false };
    },
    loadEpisodeList: (state, action: {type: string, payload: string})=>{
      return {...state, isLoading: true, selectedPodcast: action.payload}
    },
    loadEpisodeListSuccess: (state, {payload})=>{
      return {...state, episodeList: payload, isLoading: false}
    },
  },
});

export const {
  loadPodcastList,
  loadPodcastListSuccess,
  loadPodcastListError,
  loadEpisodeList,
  loadEpisodeListSuccess,
} = podcasterSlice.actions;

export default podcasterSlice.reducer;
