import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
  },

  h2: {
    fontSize: 24,
    fontWeight: "bold",
  },

  h3: {
    fontSize: 19,
    fontWeight: "bold",
  },

  text: {
    fontSize: 17,
    fontWeight: "medium",
  },

  head: {
    height: 130,
    justifyContent: "center",
    marginTop: 20,
  },

  textinput: {
    borderColor: "#B9B9B9",
    borderWidth: 3,
    borderRadius: 16,
    padding: 9,
    marginBottom: 20,
  },

  borderBox: {
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    borderWidth: 4,
    borderRadius: 20,
    marginBottom: 20,
    paddingLeft: 20,
    paddingVertical: 15,
  },

  borderBoxExtended: {
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 20,
    paddingVertical: 15,
  },

  routeExtension: {
    backgroundColor: "lightgrey",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "lightgrey",
    borderEndWidth: 4,
    borderStartWidth: 4,
    borderBottomWidth: 4,
    height: 188,
    marginBottom: 20,
  },

  buttonlarge: {
    backgroundColor: "lightgrey",
    paddingVertical: 9,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    justifyContent: "center",
  },

  buttonlargetext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonmedium: {
    backgroundColor: "lightgrey",
    paddingVertical: 9,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 12,
    justifyContent: "center",
    flex: 1, // Sorgt dafür, dass der Button flexibel ist
    marginHorizontal: 5, // Gibt etwas Abstand zwischen den Buttons
  },

  buttonsmall: {
    marginBottom: "3%",
  },

  buttonsmalltext: {
    textDecorationLine: "underline",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "right",
    color: "#339C54",
  },

  selectedButton: {
    backgroundColor: "#484848",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    height: 300,
  },
  box: {
    width: 50, // von 60 auf 50 reduziert, um die Box kleiner zu machen
    height: 50, // von 60 auf 50 reduziert, um die Box kleiner zu machen
    justifyContent: "center",
    alignItems: "center",
    margin: 3,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10, // Runde Ecken hinzugefügt
  },
});

export default styles;
