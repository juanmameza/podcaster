import CONSTANTS from "../config/constants";
import { PodcastEntry } from "../types";

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

class PodcastService {
  private fetchPodcastListFromServer = async () => {
    const response = await fetch(CONSTANTS.PodcastListURL);
    const responseJSON = await response.json();
    this.savePodcastListToLocalStorage(responseJSON.feed.entry, Date.now());
    return responseJSON.feed.entry;
  };

  private fetchPodcastListFromLocalStorage = () => {
    try {
      const podcastList = localStorage.getItem("podcastList");
      return Promise.resolve(podcastList ? JSON.parse(podcastList) : []);
    } catch (error) {
      console.error(error);
    }
  };

  private savePodcastListToLocalStorage = (
    podcastList: PodcastEntry[],
    timestamp: number
  ) => {
    localStorage.setItem("podcastListTimestamp", timestamp.toString());
    localStorage.setItem("podcastList", JSON.stringify(podcastList));
  };

  public fetchPodcastList = async () => {
    const currentTimestamp = Date.now();
    const lastTimestamp = localStorage.getItem("podcastListTimestamp");
    if (
      lastTimestamp !== null &&
      Number(lastTimestamp) + MILLISECONDS_IN_A_DAY > currentTimestamp
    ) {
      return this.fetchPodcastListFromLocalStorage();
    } else {
      return await this.fetchPodcastListFromServer();
    }
  };

  public fetchEpisodeList = async (id: string) => {
    const episodeListURL = CONSTANTS.EpisodeURL.replace("[id]", id);
    const URL = `${CONSTANTS.AllOriginsURL}${encodeURIComponent(
      episodeListURL
    )}`;

    const episodeListResponse = await fetch(URL);
    const episodeList = await episodeListResponse.json();

    return JSON.parse(episodeList.contents);
  };
}

export default PodcastService;
