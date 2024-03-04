export default function getColor(color) {
    switch (color.toUpperCase()) { // Um sicherzustellen, dass die Funktion unabhängig von der Eingabe funktioniert
      case 'RED', 'ROT':
        return 'red';
      case 'BLUE', 'BLAU':
        return 'blue';
      case 'GREEN', 'GRÜN':
        return 'green';
      case 'YELLOW', 'GELB':
        return 'yellow';
      case 'BLACK', 'SCHWARZ':
        return 'black';
      case 'WHITE', 'WEISS':
        return 'white';
      case 'ORANGE':
        return 'orange';
      case 'PURPLE', 'LILA':
        return 'purple';
      case 'PINK', 'ROSA':
        return 'pink';
      case 'GRAY', 'GRAU':
        return 'gray';
      default:
        return 'gray'; // Rückgabe eines Standardwerts, falls keine Übereinstimmung gefunden wird
    }
  };