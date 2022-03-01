import { View, Text, ImageBackground } from "react-native";

import HeaderBar from "../Views/HeaderBar";

export default function Profile() {
  return (
    <View>
      <ImageBackground source={require("../assets/bg.png")} style={{ width: "100%", height: "100%"}}>
      <HeaderBar />
      <View
        style={{
          marginTop: 100,
        }}
      >
        <Text
        
        >Profile</Text>
      </View>
      </ImageBackground>
    </View>
  );
}
