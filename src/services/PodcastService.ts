import CONSTANTS from "../config/constants";
import { Episode, PodcastEntry } from "../types";

const MILLISECONDS_IN_A_DAY = 24 * 60 * 60 * 1000;

class PodcastService {
  private fetchPodcastListFromServer = async () => {
    const response = await fetch(CONSTANTS.PodcastListURL);
    const responseJSON = await response.json();
    this.savePodcastListToLocalStorage(responseJSON.feed.entry);
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

  private savePodcastListToLocalStorage = (podcastList: PodcastEntry[]) => {
    const timestamp = Date.now();
    localStorage.setItem("podcastListTimestamp", timestamp.toString());
    localStorage.setItem("podcastList", JSON.stringify(podcastList));
  };

  private saveEpisodeListToLocalStorage = (
    podcastId: string,
    episodeList: Episode[]
  ) => {
    try {
      const episodeKey = `episodeList-${podcastId}`;
      const episodeValue = {
        timestamp: Date.now().toString(),
        episodeList,
      };
      localStorage.setItem(episodeKey, JSON.stringify(episodeValue));
    } catch (error) {
      console.error(error);
    }
  };

  private fetchEpisodeListFromServer = async (id: string) => {
    const episodeListURL = CONSTANTS.EpisodeURL.replace("[id]", id);
    const URL = `${CONSTANTS.AllOriginsURL}${encodeURIComponent(
      episodeListURL
    )}`;

    const episodeListResponse = await fetch(URL);
    const episodeListJson = await episodeListResponse.json();

    const episodeList = JSON.parse(episodeListJson.contents);
    this.saveEpisodeListToLocalStorage(id, episodeList);
    return episodeList;
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

  public fetchEpisodeList = async (podcastId: string) => {
    try {
      const episodeKey = `episodeList-${podcastId}`;
      const episodeListEntry = localStorage.getItem(episodeKey);
      if (episodeListEntry) {
        const { timestamp, episodeList } = JSON.parse(episodeListEntry);
        if (Number(timestamp) + MILLISECONDS_IN_A_DAY > Date.now()) {
          return episodeList;
        } else {
          return await this.fetchEpisodeListFromServer(podcastId);
        }
      } else {
        return await this.fetchEpisodeListFromServer(podcastId);
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export default PodcastService;
