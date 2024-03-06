export default function getColor(color) {
  // Convert the input color to uppercase to make the switch case-insensitive.
  switch (color.toUpperCase()) {
    // If the color matches one of the cases, return the corresponding color in lowercase.
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
