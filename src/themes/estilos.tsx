import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "flex-end",
  },
  resultado: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
  },
  resultadoPequeno: {
    color: "rgba(255,255,255,0.5)",
    textAlign: "right",
    fontSize: 30,
  },
  fila: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
  },
});
