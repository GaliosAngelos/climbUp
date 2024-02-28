import React, { useState } from "react";
import { View } from "react-native";
import RouteBox from "../sections/dashboard/climbing/RouteBox";

export default function RoutenList({ routes }) {
  const [expandedRoute, setExpandedRoute] = useState(null);

  const handlePressRoute = (routeId) => {
    setExpandedRoute(expandedRoute === routeId ? null : routeId);
  };

  return (
    <View>
      {routes &&
        routes.map(
          (
            item,
            index // Überprüfen, ob 'routes' definiert ist
          ) => (
            <RouteBox
              key={index}
              expanded={expandedRoute === index}
              setExpanded={() => handlePressRoute(index)}
              color={item.color}
              levelOfDificulty={item.level_of_difficulty}
              lineNumber={item.line_number}
              routeName={item.route_name}
              Sector={item.sector}
              Tilt={item.tilt}
            />
          )
        )}
    </View>
  );
}
