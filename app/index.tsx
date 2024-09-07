import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {
  getIMCRanking,
  getRankingBackgroundColor,
  translateIMCRankingToPortuguese,
} from "./imc.service";

export default function Index() {
  const [weight, setWeight] = useState<string>();
  const [height, setHeight] = useState<string>();

  const [ranking, setRanking] = useState<string>();

  return (
    <View
      style={{
        ...styles.rootContainer,
        backgroundColor: getRankingBackgroundColor(ranking),
      }}
    >
      <View
        style={{
          marginBottom: 20,
          gap: 10,
        }}
      >
        <Text>Você está na categoria:</Text>
        <Text>{ranking?.toUpperCase()}</Text>
      </View>

      <View style={styles.textInput}>
        <TextInput
          placeholder="Coloque seu peso (kg)"
          onChangeText={(value) => setWeight(value)}
          value={weight?.toString()}
        />
      </View>
      <View style={styles.textInput}>
        <TextInput
          placeholder="Coloque sua altura (cm)"
          onChangeText={(value) => setHeight(value)}
          value={height?.toString()}
        />
      </View>

      <View style={{ gap: 10 }}>
        <View style={styles.calculateButton}>
          <Button
            title="Calcular"
            onPress={() =>
              setRanking(
                translateIMCRankingToPortuguese(getIMCRanking(weight, height))
              )
            }
          />
        </View>
        <View style={styles.calculateButton}>
          <Button
            title="Resetar"
            onPress={() => {
              setHeight(undefined);
              setWeight(undefined);
              setRanking(undefined);
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 0,
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  calculateButton: {
    width: 200,
  },
});
