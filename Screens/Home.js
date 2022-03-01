import { Box, View, Text, Button, NativeBaseProvider } from "native-base";
import { StyleSheet, Image } from "react-native";
import { ImageBackground } from "react-native";

function Home({ navigation }) {
  return (
    <NativeBaseProvider>
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

              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
              marginTop: -20,
              paddingBottom: 20,
            }}
          >
            <Box
              bg="white"
              w="177px"
              h="46px"
              p="3"
              mb="3"
              borderRadius="16px"
              shadow="6"
              style={{
                borderColor: "black",
                flexDirection: "row",
              }}
            >
              <Text>Nature et sportifs </Text>
            </Box>
            <Box
              bg="white"
              w="177px"
              p="3"
              mb="3"
              ml="4"
              borderRadius="16px"
              shadow="6"
              style={{
                borderColor: "black",
              }}
            >
              <Text>Culturel </Text>
            </Box>
          </View>
          <View
            style={{
              paddingBottom: 20,
            }}
          >
            <View
              style={{
                borderBottomColor: "#ddd",
                borderBottomWidth: 1,
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
              <Button
                w="100px"
                h="35px"
                ml="242px"
                mt="-20px"
                br="10px"
                bg="white"
                shadow="6"
                onPress={() => {
                  navigation.navigate("Composez votre Parcours");
                }}
              >
                <Text style={styles.buttontext}>Découvrir</Text>
              </Button>
            </View>
          </View>
          <View mt={2} ml={7} mr={7}>
            <Text style={styles.parcoursEvenementiel}>
              Parcours événementiel
            </Text>
            <Text>
              Partagez des moments inoubliables avec votre famille tout en
              découvrant la ville de Toulon. à la clé ? Des cadeaux locaux et
              éco-responsables !
            </Text>
          </View>
          <Button
            w="100px"
            h="35px"
            ml="242px"
            mt="20px"
            br="10px"
            bg="white"
            shadow="6"
            onPress={() => {
              navigation.navigate("Parcours événementiel");
            }}
          >
            <Text style={styles.buttontext}>Explorer</Text>
          </Button>
        </ImageBackground>
      </View>
    </NativeBaseProvider>
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

  buttontext: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
