// function for the statistics for the climber
export default function calculateTimeStamps(date) {
  const now = new Date();
  const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month.toString().padStart(2, "0")}-${day
      .toString()
      .padStart(2, "0")}`;
  };

  switch (date) {
    case "lastDay":
      return {
        past: formatDate(new Date(now.getTime() - 24 * 60 * 60 * 1000)),
        now: formatDate(tomorrow),
      };
    case "lastWeek":
      return {
        past: formatDate(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)),
        now: formatDate(tomorrow),
      };
    case "lastMonth":
      return {
        past: formatDate(new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)),
        now: formatDate(tomorrow),
      };
    case "lastYear":
      return {
        past: formatDate(new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)),
        now: formatDate(tomorrow),
      };
    default:
      return {
        past: formatDate(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)),
        now: formatDate(tomorrow),
      };
  }
}
