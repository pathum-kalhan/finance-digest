import { Fragment, FC } from "react";

type NewsCardDetailsProps = {
  source: string;
  datetime: string;
  headline: string;
};

export const NewsCardDetails: FC<NewsCardDetailsProps> = (props) => {
  const { source, datetime, headline } = props;
  return (
    <Fragment>
      <div className="flex justify-between my-2 font-normal text-xs uppercase text-opacity-70 text-white">
        <p>{source}</p>
        <p>{datetime}</p>
      </div>
      <p className="font-medium text-xl">{headline}</p>
    </Fragment>
  );
};
