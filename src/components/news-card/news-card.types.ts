export type UnixTimestamp = number;

export type NewsItem = {
  image: string;
  source: string;
  datetime: UnixTimestamp;
  headline: string;
  url: string;
  id: number;
};
