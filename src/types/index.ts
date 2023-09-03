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

export type EpisodeWrapper = {
  wrapperType: string;
  kind: string;
  artistId: number;
  collectionId: number;
  trackId: number;
  artistName: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName: string;
  trackCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  collectionHdPrice: number;
  releaseDate: Date;
  collectionExplicitness: string;
  trackExplicitness: string;
  trackCount: number;
  trackTimeMillis: number;
  country: string;
  currency: string;
  primaryGenreName: string;
  contentAdvisoryRating: string;
  artworkUrl600: string;
  genreIds: string[];
  genres: string[];
};

export type Episode = {
  previewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  genres: { name: string; id: string }[];
  episodeGuid: string;
  description: string;
  trackId: number;
  trackName: string;
  releaseDate: string;
  artistIds: number[];
  shortDescription: string;
  episodeUrl: string;
  country: string;
  artworkUrl600: string;
  artworkUrl160: string;
  episodeFileExtension: string;
  episodeContentType: string;
  artworkUrl60: string;
  artistViewUrl: string;
  contentAdvisoryRating: string;
  trackViewUrl: string;
  trackTimeMillis: number;
  kind: string;
  wrapperType: string;
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
