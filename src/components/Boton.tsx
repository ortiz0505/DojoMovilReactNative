import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface BotonProps {
  texto: string;
  color: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

const Boton = ({ texto, color, ancho, accion }: BotonProps) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          height: 80,
          width: ancho ? 180 : 80,
          backgroundColor: color,
          borderRadius: 100,
          justifyContent: "center",
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            color: color === "#9b9b9b" ? "black" : "white",
            textAlign: "center",
            fontSize: 30,
          }}
        >
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Boton;
