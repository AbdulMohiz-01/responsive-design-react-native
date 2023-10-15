import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../../style";

const NameInput = ({ state, setState }) => {
    return (
      <View style={styles.viewBorder}>
        <Text>Name:</Text>
        <TextInput
          mode="outlined"
          placeholder="Max 30 chars"
          style={styles.input}
          maxLength={30}
          value={state.name}
          onChangeText={(val) => setState({ ...state, name: val })}
        />
      </View>
    );
  };

export default NameInput;