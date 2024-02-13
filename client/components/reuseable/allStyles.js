import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sectiondiv: {
    paddingBottom: "6%",
  },

  expandedArea: {
    // Stil für den erweiterten Bereich
  },

  sidespace: {
    marginHorizontal: "4%",
  },

  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },

  h2: {
    fontSize: 24,
    fontWeight: "semibold",
  },

  h3: {
    fontSize: 19,
    fontWeight: "bold",
  },

  text: {
    fontSize: 17,
    fontWeight: "medium",
  },

  numberbig: {
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: -10,
  },

  icon: {
    marginLeft: 6,
    marginVertical: -2,
  },

  image: {
    resizeMode: "auto",
  },

  head: {
    height: 250,
    justifyContent: "center",
    // backgroundColor: "grey",
  },

  textinput: {
    borderColor: "grey",
    borderWidth: 3,
    padding: 10,
    borderRadius: 18,
    margin: 3,
  },

  borderBox: {
    padding: 23,
    backgroundColor: "lightgrey",
    borderColor: "green",
    borderWidth: 4,
    borderRadius: 20,
  },

  borderBoxExtended: {
    padding: 23,
    backgroundColor: "lightgrey",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "green",
    borderEndWidth: 4,
    borderStartWidth: 4,
    borderTopWidth: 4,
  },

  routeExtension: {
    padding: 23,
    backgroundColor: "lightgrey",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "green",
    borderEndWidth: 4,
    borderStartWidth: 4,
    borderBottomWidth: 4,
  },

  buttontext: {
    textDecorationLine: "underline",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "right",
  },

  buttontextsmall: {
    textDecorationLine: "underline",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "right",
    color: "grey",
  },
});

export default styles;
