import React, { useState } from "react";
import { View } from "react-native";
import RouteBox from "../sections/dashboard/climbing/RouteBox";

export default function RoutenList({ routes, expand }) {
  const [expandedRoute, setExpandedRoute] = useState(null);

  const handlePressRoute = (routeId) => {
    setExpandedRoute(expandedRoute === routeId ? null : routeId);
  };

  // Verwenden Sie den Null-Prüfung-Operator (?.) und den Nullish-Coalescing-Operator (??),
  // um sicherzustellen, dass "routes" ein Array ist oder einen leeren Array als Fallback-Wert verwendet
  const routeArray = routes?.length ? routes : [];

  return (
    <View>
      {routeArray.map((item, index) => {
        const isExpanded = expandedRoute === item.id; // Angenommen, jedes item hat eine eindeutige ID
        const conditionalProps = expand
          ? {
              expanded: isExpanded,
              setExpanded: () => handlePressRoute(item.id), // Verwende item.id anstelle von index
            }
          : {};

        return (
          <RouteBox
            key={item.id || index} // Verwende item.id als Schlüssel, fallback zu index
            {...conditionalProps}
            color={item.color}
            levelOfDificulty={item.level_of_difficulty} // CamelCase-Umwandlung
            lineNumber={item.line_number}
            routeName={item.route_name}
            Sector={item.sector} // Kleinbuchstaben, um Konsistenz mit anderen Props zu wahren
            tilt={item.tilt} // Kleinbuchstaben
          />
        );
      })}
    </View>
  );
}
