import React from "react";
import { View } from "react-native";
import RouteBox from "../sections/dashboard/climbing/RouteBox";

// Routeslist is mapping the routes
export default function RoutesList({ routes, expand, hall_name }) {
  const routesData = Array.isArray(routes) ? routes : routes.data || [];
  return (
    <View>
      {routesData.map((item, index) => (
        <RouteItem
          key={item.id || index}
          item={item}
          expand={expand}
          hall_name={hall_name}
        />
      ))}
    </View>
  );
}

function RouteItem({ item, expand, hall_name }) {
  const [expanded, setExpanded] = React.useState(false);

  const handlePressRoute = () => {
    setExpanded(!expanded);
  };

  return (
    <RouteBox
      color={item.color}
      levelOfDifficulty={item.level_of_difficulty}
      lineNumber={item.line_number}
      routeName={item.route_name}
      Sector={item.sector}
      tilt={item.tilt}
      hallname={hall_name}
      expanded={expanded}
      setExpanded={handlePressRoute}
    />
  );
}
