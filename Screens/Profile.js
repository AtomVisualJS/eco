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


function Profile({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/bgplan.png")}
        style={{ width: "100%", height: "100%" }}
      >
        
        <View
          style={{
            marginTop: 240,
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
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                marginTop: 5,
                marginBottom: 15,
              }}
            >L’application qui rend vos 
            {'\n'}
            vacances écologiques !
            </Text>
            <View style={styles.controller}>
            <TextInput style={styles.input} placeholder="Adresse email ✉️" />
            <TextInput style={styles.input} placeholder="Mot de passe" />
            <TouchableOpacity
            style={
              {
                marginTop: -10,
                marginBottom: 10,
              }
            }
              ><Text
                style={{
                  fontSize: 12,
                }}
              
              >
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>
            </View>
          </View>
          
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Connexion</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={styles.button2
              }
              
            >
              <Text style={styles.buttonText}>S'inscrire</Text>
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
    marginBottom: 30,
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


export default Profile;
