export default function getColor(color) {
  switch (color.toUpperCase()) {
    case "RED":
      return "red";
    case "BLUE":
      return "blue";
    case "GREEN":
      return "green";
    case "YELLOW":
      return "yellow";
    case "BLACK":
      return "black";
    case "WHITE":
      return "white";
    case "ORANGE":
      return "orange";
    case "PURPLE":
      return "purple";
    case "PINK":
      return "pink";
    case "GRAY":
      return "gray";
    default:
      return "gray";
  }
}
