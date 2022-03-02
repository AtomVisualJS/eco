import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import HeaderBar from "../Views/HeaderBar";

function Hebergement() {
  return (
    <View>
      <ImageBackground
        source={require("../assets/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
          
        <View
          style={{
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <View
            style={{
            marginTop: -100,
              borderColor: "black",
              borderWidth: 0.1,
              width: 319,
              height: 114,
              borderRadius: 13,
              marginTop: 0,
              flexDirection: "row",
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.15,
            }}
          >
            <Image
              source={require("../assets/hebergement/la_corniche.png")}
              style={{
                width: 150,
                height: 100,
                marginTop: 7,
                marginLeft: 10,
                borderRadius: 13,
              }}
            />
            <View>
              <Text
                style={{
                  marginTop: 25,
                  marginLeft: 15,
                  fontSize:14,
                  fontWeight: "bold",
                }}
              >
                Hotel La Corniche
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  marginLeft: 30,
                  fontSize: 12,
                }}
              >
                Indice de pollution
              </Text>
              
            </View>
          </View>
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.1,
              width: 319,
              height: 114,
              borderRadius: 13,
              marginTop: 30,
              flexDirection: "row",
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.15,
            }}
          >
           <Image
              source={require("../assets/hebergement/chambre_hotes.png")}
              style={{
                width: 150,
                height: 100,
                marginTop: 7,
                marginLeft: 10,
                borderRadius: 13,
              }}
            />
            <View>
              <Text
                style={{
                  marginTop: 25,
                  marginLeft: 25,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Bus
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  marginLeft: 30,
                  fontSize: 12,
                }}
              >
                Indice de pollution
              </Text>
              
            </View>
          </View>
          <View
            style={{
              borderColor: "black",
              borderWidth: 0.1,
              width: 319,
              height: 150,
              borderRadius: 13,
              marginTop: 30,
              flexDirection: "row",
              backgroundColor: "white",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.15,
            }}
          >
            <Image
              source={require("../assets/hebergement/Okko_Hotel.png")}
              style={{
                width: 150,
                height: 100,
                marginTop: 7,
                marginLeft: 10,
                borderRadius: 13,
              }}
            />
            <View>
              <Text
                style={{
                  marginTop: 10,
                  marginLeft: 25,
                  fontSize: 16,
                  fontWeight: "bold",
                }}
              >
                Bateau
              </Text>
              <Text
                style={{
                  marginTop: 0,
                  marginLeft: 10,
                  fontSize: 9,
                  width: 150,
                }}
              >
                Cet hôtel moderne est situé sur la place de 
la liberté, lieu stratégique pour découvrir 
tout Toulon. 
{"\n"}</Text>
              

            </View>
          </View>
         
        </View>
      </ImageBackground>
    </View>
  );
}
export default Hebergement;
