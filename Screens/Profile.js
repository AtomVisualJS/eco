import { Text, Button, Image, View, ImageBackground, TextInput } from "react-native";




function Profile( { navigation } ) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/bgplan.png")}
        style={{ width: "100%", height: "100%" }}
      >
        
        
          <Text>Profile</Text>
          <View
          style={{
            marginTop: 500,
            backgroundColor:"white",
            alignItems: "center",
          }}
        >
          <Image 
            source={require("../assets/logo.png")}
            style={{
              width: 200,
              height: 100,
              marginTop: 10,
            }}
            />
          <View>
            <TextInput 
              placeholder="email"
              />
            <TextInput
              placeholder="password"
              />
          </View>
          <View
            style={{
              borderColor: "black",
              borderWidth: 1,
              width: "33%",
              marginLeft: "33%",
              borderRadius: 16,
              
              
              
            }}
          >
          <Button
            
            title="S'Inscrire"
            onPress={() => {
              navigation.navigate("S'Inscrire");
            }}
          >

          
            
          </Button>
          </View>
          <Button
            title="Connexion"
            onPress={() => {
              alert("Connexion");
            }}
          >
            
          </Button>

         


        </View>
        <View>

        </View>
      </ImageBackground>
    </View>
  );
}


export default Profile


