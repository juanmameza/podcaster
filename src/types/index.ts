export type PodcastEntry = {
  [key: string]: any
};

export type PodcastResponse = {
  author?: any;
  entry: PodcastEntry[];
};
