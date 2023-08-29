export type PodcastEntry = {
  [key: string]: any;
};

export type PodcastResponse = {
  feed: {
    author?: any;
    entry: PodcastEntry[];
  };
};
