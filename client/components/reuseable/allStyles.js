import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
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

  },

  icon: {
  },

  image: {
    resizeMode: "auto",
  },

  head: {
    height: 250,
    justifyContent: "center",
  },

  textinput: {
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 18,
    padding: "3%",
    marginBottom: 20,
  },

  borderBox: {
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    borderWidth: 4,
    borderRadius: 20,
    marginBottom: 20,
    padding: 20,

  },

  borderBoxExtended: {
    backgroundColor: "E9E9E9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "green",
    borderEndWidth: 4,
    borderStartWidth: 4,
    borderTopWidth: 4,
  },

  routeExtension: {
    backgroundColor: "#E9E9E9",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "green",
    borderEndWidth: 4,
    borderStartWidth: 4,
    borderBottomWidth: 4,
  },

  buttonlarge: {
    backgroundColor: "lightgrey",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    marginVertical: 10,
    borderRadius: 12,
  },

  buttonlargetext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },

  buttonsmall: {
    marginBottom: "3%",
  },

  buttonsmalltext: {
    textDecorationLine: "underline",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "right",
    color: "grey",
  }
});

export default styles;
