

import React from "react";
import { HStack, IconButton, Icon, Box, StatusBar, NativeBaseProvider } from "native-base";
import { Image } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function HeaderBar({ navigation }) {
  return (
    <NativeBaseProvider>
      <StatusBar bg="white" barStyle="black" />
      <Box safeAreaTop bg="white" w="100%" />
      <HStack
        bg="white"
        px={2}
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="60px"
        mt={-2}>
        <HStack alignItems="center" pb="0">


          <Image source={require("../assets/logo.png")} 
            style={{
                width: 100,
                height: "100%",
                marginTop: 10,
            }}
            alt="logo"
          />
        </HStack>
        <AntDesign name="user" size={24} color="black" />
        
      </HStack>
      </NativeBaseProvider>
    
  );
}

export default HeaderBar;