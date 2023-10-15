import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    row: {
      flex: 1,
      flexDirection: "row",
      paddingHorizontal: 10,
    },
    width: {
      width: "50%",
      padding: 5,
    },
    column: {
      flex: 1,
      flexDirection: "column",
      paddingHorizontal: 10,
    },
    input: {
      margin: 0,
      padding: 0,
      backgroundColor: "transparent",
      borderWidth: 0,
      borderColor: "black",
      height: 20,
      borderRadius: 0,
    },
    radioGroup: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 5,
    },
    radioButton: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 10,
    },
    radiowrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 10,
    },
    picker: {
      marginTop: 5,
      borderWidth: 2,
    },
    checkboxGroup: {
      flexDirection: "row",
    },
    checkboxWrapper: {
      flexDirection: "row",
      alignItems: "center",
      marginRight: 10,
    },
    submitButton: {
      backgroundColor: "gray",
      padding: 5,
      paddingHorizontal: 30,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "black",
    },
    viewBorder: {
      borderWidth: 1,
      borderColor: "skyblue",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 10,
      paddingBottom: 10,
    },
  });

  
export default styles;