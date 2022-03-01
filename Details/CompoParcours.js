
import React from "react";
import {
  View,
  Text,
  Input,
  TextInput,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
function CompoParcours() {
  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        marginTop: 40,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Combien de personnes êtes vous
      </Text>
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />

      <Text style={styles.text}>Avez vous des problèmes de mobilité ? </Text>
      <View style={styles.button}>
        <Button
          title="Oui"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Oui"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <Text style={styles.text}>Quels est la durée de votre parcours </Text>
      <View style={styles.button}>
        <Button
          title="Oui"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Oui"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Oui"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Oui"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "70%",
    borderRadius: 10,
  },

  button: {
    marginTop: 20,
    width: "70%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },

  text: {
    marginTop: 45,
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
  },
});
export default CompoParcours;
