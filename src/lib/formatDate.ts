import { UnixTimestamp } from "@/components/news-card/news-card.types";

export default function formatUnixTimestamp(timestamp: UnixTimestamp): string {
  const date = new Date(timestamp * 1000);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [month, day, year] = formattedDate.replace(",", "").split(" ");
  return `${day} ${month} ${year}`;
}
