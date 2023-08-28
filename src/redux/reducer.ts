import { createSlice } from "@reduxjs/toolkit";
import { PodcastEntry } from "../types";

const initialState = [
  {
    podcastList: [],
    selectedPodcast: {},
    selectedEpisode: {},
  },
];

const podcasterSlice = createSlice({
  name: "podcasts",
  initialState,
  reducers: {},
});

export default podcasterSlice.reducer;
