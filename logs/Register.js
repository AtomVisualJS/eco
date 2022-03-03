
import { View, Text, Button, Image, ImageBackground, TextInput } from "react-native";

function Register () {
    

    return (
        <View>
            <Text>Inscription</Text>
            <View>
            <TextInput
                placeholder="Name"
                
            />
            <TextInput
                placeholder="Email"
                
            />
            <TextInput
                placeholder="Password"
               
            />
            <TextInput
                placeholder="Confirm Password"
                
            />
            <Button
                title="S'Inscrire"
                name="S'inscrire"
                onPress={() => {
                    alert("Register");
                }}
            />
</View>
            <View>
                
                
               
            </View>
        </View>
    )

}


export default Register
