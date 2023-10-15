import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "../../../style";

const SubmitButton = () => {
  const handlePress = () => {
    Alert.alert("Successful");
  };

  return (
    <View style={styles.viewBorder}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={handlePress}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubmitButton;
