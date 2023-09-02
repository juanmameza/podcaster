import PodcastService from "./PodcastService";

describe("the podcast service", () => {
  const mockGetItem = jest.fn();
  const mockSetItem = jest.fn();
  const mockRemoveItem = jest.fn();
  Object.defineProperty(global, "localStorage", {
    value: {
      getItem: (...args: string[]) => mockGetItem(...args),
      setItem: (...args: string[]) => mockSetItem(...args),
      removeItem: (...args: string[]) => mockRemoveItem(...args),
    },
  });

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date("2023-08-30"));
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("should save the podcast list to localStorage if none saved", async () => {
    const podcastList = [
      {
        title: "someTitle",
        artist: "someArtist",
      },
      {
        title: "anotherTitle",
        artist: "anotherArtist",
      },
    ];

    mockGetItem.mockReturnValue(null);
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ feed: { entry: podcastList } }),
      }),
    ) as jest.Mock;

    const podcastService = new PodcastService();

    await podcastService.fetchPodcastList();

    expect(mockSetItem).toHaveBeenCalledWith(
      "podcastListTimestamp",
      new Date("2023-08-30").getTime().toString(),
    );
    expect(mockSetItem).toHaveBeenCalledWith(
      "podcastList",
      JSON.stringify(podcastList),
    );
  });
  test("should save the podcast list to localStorage if 24h have passed from last saved", async () => {
    const A_DAY_BEFORE_CURRENT = new Date("2023-08-20");
    const podcastList = [
      {
        title: "someTitle",
        artist: "someArtist",
      },
      {
        title: "anotherTitle",
        artist: "anotherArtist",
      },
    ];

    mockGetItem.mockReturnValue(A_DAY_BEFORE_CURRENT.getTime().toString());
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ feed: { entry: podcastList } }),
      }),
    ) as jest.Mock;

    const podcastService = new PodcastService();

    await podcastService.fetchPodcastList();

    expect(mockSetItem).toHaveBeenCalledWith(
      "podcastListTimestamp",
      new Date("2023-08-30").getTime().toString(),
    );
    expect(mockSetItem).toHaveBeenCalledWith(
      "podcastList",
      JSON.stringify(podcastList),
    );
  });
  test("should get the podcast list from localStorage if 24h have not passed from last saved", async () => {
    const SAME_DAY_AS_CURRENT = new Date("2023-08-30");
    const podcastList = [
      {
        title: "someTitle",
        artist: "someArtist",
      },
      {
        title: "anotherTitle",
        artist: "anotherArtist",
      },
    ];

    mockGetItem.mockReturnValue(SAME_DAY_AS_CURRENT.getTime().toString());
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ feed: { entry: podcastList } }),
      }),
    ) as jest.Mock;

    const podcastService = new PodcastService();

    await podcastService.fetchPodcastList();

    expect(mockSetItem).not.toHaveBeenCalled();
    expect(mockGetItem).toHaveBeenCalledWith("podcastList");
  });

  it("should fetch the podcast list from localStorage", () => {});
  it("should save the podcast list to localStorage", () => {});
  it("should save the podcast list to localStorage", () => {});
});
