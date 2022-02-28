import {
  Box,
  View,
  Text,
  Button,
  NativeBaseProvider,
  HStack,
  IconButton,
  Icon,
  StatusBar,
} from "native-base";
import { StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 
function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <StatusBar bg="white" barStyle="black" />
      <Box
        safeAreaTop
        bg="white"
        w="100%"
        style={{
          borderColor: "black",
          borderWidth: 1,
        }}
      />
      <HStack
        bg="white"
        px={2}
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="60px"
        mt={-2}
      >
        <HStack alignItems="center" pb="0">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="black" />
            }
          />
        </HStack>
        <AntDesign name="user" size={24} color="black" />
      </HStack>
      <View>
      
      <Text
        style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            paddingTop: 25,
            paddingBottom: 40,
            backgroundColor: "white",
            paddingLeft: 25,

            }}
            
      >Découvrir nos parcours types</Text>
     
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          backgroundColor: "white",
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
            backgroundColor: "white",
            paddingBottom: 20,
        }}
      >
          <View>
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
            navigation.navigate("Profile");
            }}
        >
          <Text style={styles.buttontext}>Découvrir</Text>
        </Button>
      </View>
</View>
      <View mt={30} ml={7} mr={7}>
        <Text style={styles.parcoursEvenementiel}>Parcours événementiel</Text>
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
      >
        <Text style={styles.buttontext}>Explorer</Text>
      </Button>
        </View> 
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  parcourstitre: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "5%",
    marginBottom: "5%",
    backgroundColor: "white",
  },

  compotitre: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: "5%",
    marginLeft: "10%",
    backgroundColor: "white",
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

export default Home;
