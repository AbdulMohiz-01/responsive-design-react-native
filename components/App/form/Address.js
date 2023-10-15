import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../../style";

const AddressInput = ({ state, setState }) => {
  return (
    <View style={styles.viewBorder}>
      <Text>Address:</Text>
      <TextInput
        mode="outlined"
        label="Address"
        multiline
        numberOfLines={2}
        value={state.address}
        onChangeText={(val) => setState({ ...state, address: val })}
        style={styles.input}
      />
    </View>
  );
};

export default AddressInput;
