export type PodcastEntry = {
  "im:name": EntryData;
  "im:image": EntryData[];
  summary: EntryData;
  "im:price"?: EntryData;
  "im:contentType"?: EntryData;
  rights?: EntryData;
  title: EntryData;
  link: EntryData;
  id: EntryData;
  "im:artist": EntryData;
  category?: EntryData;
  "im:releaseDate": EntryData;
};

export type EntryData = {
  label?: string;
  attributes?: {
    [key: string]: string;
  };
};

export type PodcastResponse = {
  feed: {
    author?: any;
    entry: PodcastEntry[];
  };
};

export enum Views {
  Home = "home",
  Podcast = "podcast",
  Episode = "episode",
}

export enum PodcastViews {
  EpisodeList = "episode-list",
  EpisodeDetail = "episode-detail",
}
