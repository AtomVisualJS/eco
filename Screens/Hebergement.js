import { View, Text, StyleSheet, Button, TextInput } from "react-native";

function Hebergement() {
  return (
    <View
      style={{
        marginTop: 110,
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
      ></TextInput>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.containernav}>
          <Text>Pour les enfants</Text>
        </View>
        <View style={styles.containernav}>
          <Text>Hôtel des Arts</Text>
        </View>
        <View style={styles.containernav}>
          <Text>Musée </Text>
        </View>
      </View>
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Populaires
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <View style={styles.box}>
          <View>
            <Text>Hôtel des Arts</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View>
            <Text>Hôtel des Arts</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View>
            <Text>Hôtel des Arts</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 40,
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Activités
        </Text>
        <View style={styles.listbox}>
          <Text>Hôtel des Arts</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    width: "40%",
    marginLeft: 20,
    marginBottom: 20,
    paddingLeft: 10,
  },

  containernav: {
    borderWidth: 1,
    borderColor: "black",
    width: "33%",
    height: 33,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },

  box: {
    borderWidth: 1,
    borderColor: "black",
    width: "33%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 100,
    marginTop: 20,
    marginLeft: 20,
    alignItems: "center",
  },

  listbox: {
    borderWidth: 1,
    borderColor: "black",
    width: "80%",
    alignItems: "center",
    marginLeft: "10%",
    marginTop: 20,
    borderRadius: 10,
    height: 120,
  },
});

export default Hebergement;
