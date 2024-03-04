export default function getColor(color) {
    switch (color.toUpperCase()) { // Um sicherzustellen, dass die Funktion unabhängig von der Eingabe funktioniert
      case 'ROT':
        return 'red';
      case 'BLAU':
        return 'blue';
      case 'GRÜN':
        return 'green';
      case 'GELB':
        return 'yellow';
      case 'SCHWARZ':
        return 'black';
      case 'WEISS':
        return 'white';
      case 'ORANGE':
        return 'orange';
      case 'LILA':
        return 'purple';
      case 'ROSA':
        return 'pink';
      case 'GRAU':
        return 'gray';
      default:
        return 'gray'; // Rückgabe eines Standardwerts, falls keine Übereinstimmung gefunden wird
    }
  };