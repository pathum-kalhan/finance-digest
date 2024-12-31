import { UnixTimestamp } from "@/components/news-card/news-card.types";

export default function formatUnixTimestamp(timestamp: UnixTimestamp): string {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
