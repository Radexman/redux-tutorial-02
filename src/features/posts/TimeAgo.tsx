import { parseISO } from "date-fns/parseISO";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

type TimeAgoPropTypes = {
  timestamp: string;
};

const TimeAgo = ({ timestamp }: TimeAgoPropTypes) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = timePeriod + " ago";
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  );
};

export default TimeAgo;
