export default function calculateTimeStamps() {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    const oneWeekAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
    const oneMonthAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000)); // Vereinfachte Annahme
    const oneYearAgo = new Date(now.getTime() - (365 * 24 * 60 * 60 * 1000)); // Vereinfachte Annahme

    return {
        now: now.toISOString(),
        oneDayAgo: oneDayAgo.toISOString(),
        oneWeekAgo: oneWeekAgo.toISOString(),
        oneMonthAgo: oneMonthAgo.toISOString(),
        oneYearAgo: oneYearAgo.toISOString(),
    };
}
