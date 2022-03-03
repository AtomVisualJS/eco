import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  TouchableOpacity,
} from "react-native";
import { ImageBackground } from "react-native";

function Home({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            paddingTop: 25,
            paddingBottom: 40,
            paddingLeft: 25,
          }}
        >
          Découvrir nos parcours types
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            marginTop: -20,
            paddingBottom: 20,
          }}
        >
          <View 
          style={styles.buttontopbox}
          >
            <Image
              source={require("../assets/home/nature.png")}
              style={{
                marginLeft: 5,
                marginTop: 0,
                marginRight: 5,
              }}
            />
            <Text>Nature et sportifs </Text>
          </View>


          <View style={styles.buttontopbox}>
            <Image
              source={require("../assets/home/nature.png")}
              style={{
                marginLeft: 5,
                marginTop: 0,
                marginRight: 5,
              }}
            />
            <Text>Culturel </Text>
          </View>
        </View>
        <View
          style={{
            paddingBottom: 20,
          }}
        >
          <View
            style={{
              paddingBottom: 20,
            }}
          >
            <Text style={styles.compotitre}>Composez votre parcours</Text>

            <Image
              source={require("../assets/map.png")}
              alt="Alternate Text"
              style={{
                width: "100%",
                height: 300,
                marginTop: -50,
              }}
            />
            <TouchableOpacity
              style={styles.buttonmiddlebox}
              onPress={() => {
                navigation.navigate("Composez votre Parcours");
              }}
            >
              <Text style={styles.buttontext}>Découvrir</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View mt={2} ml={7} mr={7}
          style={{
            marginTop: 2,
            marginLeft: 20,
            marginRight: 7,
            
          }}
        >
          <Text style={styles.parcoursEvenementiel}>Parcours mystère</Text>
          <Text>
            {'\n'}
            Partagez des moments inoubliables avec votre famille tout en
            découvrant la ville de Toulon. à la clé ? Des cadeaux locaux et
            éco-responsables !
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonmiddlebox2}
          onPress={() => {
            navigation.navigate("Parcours événementiel");
          }}
        >
          <Text style={styles.buttontext}>Explorer</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  parcourstitre: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "5%",
    marginBottom: "5%",
  },

  compotitre: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "5%",
    marginLeft: "10%",
  },

  parcoursEvenementiel: {
    fontSize: 20,
    fontWeight: "bold",
  },

  buttontopbox: {
    backgroundColor: "rgba(249, 252, 252, 1)",
    width: 177,
    height: "46px",
    padding: 3,
    marginBottom: 3,
    alignItems: "center",
    borderRadius: 16,
    borderColor: "grey",
    borderWidth: 0.1,
    height: 50,
    borderColor: "black",
    flexDirection: "row",
  },

  buttonmiddlebox: {
    width:100,
    height:35,
    marginLeft:242,
    marginTop:-20,
    borderRadius:10,
    borderColor: "grey",
    borderWidth: 0.1,
    backgroundColor: "rgba(249, 252, 252, 1)",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonmiddlebox2: {
    width:100,
    height:35,
    marginLeft:242,
    marginTop:20,
    borderRadius:10,
    borderColor: "grey",
    borderWidth: 0.1,
    backgroundColor: "rgba(249, 252, 252, 1)",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  buttontext: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
