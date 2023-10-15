import { Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "../../../style";

const CountryInput = ({ state, setState }) => {
    return (
      <View style={styles.viewBorder}>
        <Text>Country:</Text>
        <Picker
          style={styles.picker}
          selectedValue={state.selectedCountry}
          onValueChange={(itemValue) =>
            setState({ ...state, selectedCountry: itemValue })
          }
        >
          <Picker.Item label="Pakistan" value="Pakistan" />
          <Picker.Item label="India" value="India" />
          <Picker.Item label="Nepal" value="Nepal" />
          <Picker.Item label="Bangladesh" value="Bangladesh" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
    );
  };

export default CountryInput;