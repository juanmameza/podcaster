export type PodcastEntry = {
  [key: string]: any;
};

export type PodcastResponse = {
  feed: {
    author?: any;
    entry: PodcastEntry[];
  };
};

export enum Views {
  Home = 'home',
  Podcast = 'podcast',
  Episode = 'episode'
}

export enum PodcastViews {
  EpisodeList = 'episode-list',
  EpisodeDetail = 'episode-detail'
}