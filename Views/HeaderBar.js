import { View, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function HeaderBar() {
  return (
    <View style={styles.headerbox}>
      <View style={styles.headercontent}>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="home"
            size={30}
            style={styles.homeicon}
          ></MaterialCommunityIcons>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="account-circle"
            color="black"
            size={30}
            style={styles.usericon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HeaderBar;

const styles = StyleSheet.create({
  headerbox: {
    backgroundColor: "rgba(249, 252, 252, 1)",
    height: 90,
  },

  headercontent: {
    marginTop: 50,
    flexDirection: "row",
  },

  homeicon: {
    marginLeft: "17%",
  },

  usericon: {
    marginLeft: "77%",
  },
});
