export default function calculateTimeStamps() {
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - (24 * 60 * 60 * 1000));
    const oneWeekAgo = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
    const oneMonthAgo = new Date(now.getTime() - (30 * 24 * 60 * 60 * 1000)); // Vereinfachte Annahme
    const oneYearAgo = new Date(now.getTime() - (365 * 24 * 60 * 60 * 1000)); // Vereinfachte Annahme

    // Hilfsfunktion zur Formatierung des Datums
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Monate beginnen bei 0
        const day = date.getDate();
        // Führende Nullen hinzufügen und formatieren
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    };

    return {
        now: formatDate(now),
        oneDayAgo: formatDate(oneDayAgo),
        oneWeekAgo: formatDate(oneWeekAgo),
        oneMonthAgo: formatDate(oneMonthAgo),
        oneYearAgo: formatDate(oneYearAgo),
    };
}
