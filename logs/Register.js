import {
  Text,
  Button,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";


function Register({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/bgplan.png")}
        style={{ width: "100%", height: "100%" }}
      >
        
        <View
          style={{
            marginTop: 200,
            backgroundColor: "white",
            alignItems: "center",
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{
              width: 200,
              height: 100,
              marginTop: 20,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 25,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 5,
                marginBottom: 15,
                
              }}
            >
              Bievenue  ! 
            </Text>
            <View style={styles.controller}>
            <TextInput style={styles.input} placeholder="Nom et Prénom" />
            <TextInput style={styles.input} placeholder="Adresse Email" />
            <TextInput style={styles.input} placeholder="Numéro de Téléphone" />
            <TextInput style={styles.input} placeholder="Identifiant" />
            <TextInput style={styles.input} placeholder="Mot de passe" />
            <TextInput style={styles.input} placeholder="Confirmer Mot de passe" />
            </View>
          </View>
          
           

            <TouchableOpacity
              style={styles.button2}
              
            >
              <Text style={styles.buttonText}
              
              >S'inscrire</Text>
            </TouchableOpacity>

            </View>
          
          
        
        <View></View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  controller: {
    marginTop: 10,
  },
  input: {
    marginBottom: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },

  button : {
    backgroundColor: "green",
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 30,
    padding: 10,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  button2 : {
    backgroundColor: "black",
    marginTop: 5,
    marginBottom: 35,
    borderRadius: 30,
    padding: 10,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
  },

});


export default Register;
