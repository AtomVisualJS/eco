import React from 'react'
import { View, Text, Image } from 'react-native'

import HeaderBar from '../Views/HeaderBar'


function Transport () {
return (
<View>
    <HeaderBar  />
<View
style={{
    marginTop: 150,
    alignItems: 'center',
}}
>
    <View
    style={{
        borderColor: "black",
        borderWidth: 0.1,
        width: 319,
        height: 114,
        borderRadius: 13,
        marginTop:0,
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
        <Image  source={require("../assets/transport/velo.png")}
        style={{
            width: 150,
            height: "100%",
            marginTop: 10,
            marginLeft: 10,
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
        
        >Vélo</Text>
        <Text
        style={{
            marginTop: 0,
            marginLeft: 30,
            fontSize: 12,
        }}
        >
            Indice de pollution
        </Text>
        <Image source={require("../assets/transport/feuilles/0F.png")} 
        style={{
            width: "100%",
            marginTop: 10,
            marginLeft: 20,
        }}
        />
        </View>
    </View>
    <View
    style={{
        borderColor: "black",
        borderWidth: 0.1,
        width: 319,
        height: 114,
        borderRadius: 13,
        marginTop:30,
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
        <Image  source={require("../assets/transport/bus.png")}
        style={{
            width: 200,
            height: "100%",
            marginTop: 10,
            marginLeft: -38,
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
        
        >Bus</Text>
        <Text
        style={{
            marginTop: 0,
            marginLeft: 30,
            fontSize: 12,
        }}
        >
            Indice de pollution
        </Text>
        <Image source={require("../assets/transport/feuilles/2F.png")} 
        style={{
            width: "95%",
            marginTop: 10,
            marginLeft: 20,
        }}
        />
        </View>
    </View>
    <View
    style={{
        borderColor: "black",
        borderWidth: 0.1,
        width: 319,
        height: 114,
        borderRadius: 13,
        marginTop:30,
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
        <Image  source={require("../assets/transport/bateau.png")}
        style={{
            width: 180,
            height: "100%",
            marginTop: 5,
            marginLeft: -18,
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
        
        >Bateau</Text>
        <Text
        style={{
            marginTop: 0,
            marginLeft: 30,
            fontSize: 12,
        }}
        >
            Indice de pollution
        </Text>
        <Image source={require("../assets/transport/feuilles/3F.png")} 
        style={{
            width: "95%",
            marginTop: 10,
            marginLeft: 20,
        }}
        />
        </View>
    </View>
    <View
    style={{
        borderColor: "black",
        borderWidth: 0.1,
        width: 319,
        height: 114,
        borderRadius: 13,
        marginTop:30,
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
        <Image  source={require("../assets/transport/taxi.png")}
        style={{
            width: 180,
            height: "100%",
            marginTop: 10,
            marginLeft: -20,
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
        
        >Taxi</Text>
        <Text
        style={{
            marginTop: 0,
            marginLeft: 30,
            fontSize: 12,
        }}
        >
            Indice de pollution
        </Text>
        <Image source={require("../assets/transport/feuilles/4F.png")} 
        style={{
            width: "95%",
            marginTop: 10,
            marginLeft: 20,
        }}
        />
      
        </View>
    </View>
  

</View>
</View>
)
}
export default Transport
