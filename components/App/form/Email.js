import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";
import styles from "../../../style";

const EmailInput = ({ state, setState }) => {
    return (
      <View style={styles.viewBorder}>
        <Text>Email:</Text>
        <TextInput
          mode="outlined"
          placeholder="Max 30 chars"
          style={styles.input}
          maxLength={30}
          value={state.email}
          onChangeText={(val) => setState({ ...state, email: val })}
        />
      </View>
    );
  };

export default EmailInput;