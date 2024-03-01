import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import HeadText from "../../components/text/HeadText.js";
import ButtonInsert from "../../components/buttons/ButtonInsert.js";
import RouteFilter from "../../components/sections/dashboard/climbing/RouteFilter.js";
import RoutenList from "../../components/lists/RoutenList.js";
import Routes from "../../_mock/routes.js";

export default function HallAllRoutes({ navigation }) {
  const [routes, setRoutes] = useState();
  return (
    <>
      <View>
        <HeadText content="Keep your Routes updated." />

        <RouteFilter setRoutes={setRoutes} />
      </View>

      <View>
        <ButtonInsert
          onPress={() => navigation.navigate("ModifyRoute")}
          name="New Route"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RoutenList routes={Routes} expand={false} />

        <View style={{ marginBottom: 130 }} />
      </ScrollView>
    </>
  );
}
