const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
]

export const formatDate = (dateString) => {
    if (dateString === "present") return "present";
    const date = new Date(dateString);
    return `${months[date.getMonth()]} ${date.getFullYear().toString().substring(2)}`;
}