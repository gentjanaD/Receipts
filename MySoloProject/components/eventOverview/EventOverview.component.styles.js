import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    padding: 20,
    marginVertical: 3,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
    opacity: 0.3,
    paddingLeft: 18,
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  text: {
    color: "white",
    fontSize: 19,
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 0.4,
  },

  column: {
    flexDirection: "column",
  },

  positiveExp: {
    backgroundColor: "#ffd7b5",
    marginBottom: 40,
    marginTop: 10,
    opacity: 0.7,
    paddingTop: 9,
    paddingBottom: 9,
    alignItems: "center",
  },
  negativeExp: {
    backgroundColor: "#3b2747",
    marginBottom: 40,
    marginTop: 10,
    opacity: 0.8,
    paddingTop: 9,
    paddingBottom: 9,
    alignItems: "center",
  },
  positiveText: {
    color: "black",
    paddingLeft: 10,
    fontSize: 19,
    fontWeight: "bold",
  },
  negativeText: {
    color: "white",
    paddingLeft: 10,
    fontSize: 19,
    fontWeight: "bold",
  },

  headingText: {
    fontSize: 30,
    color: "white",
    marginLeft: 113,
    marginBottom: 10,
  },
});
