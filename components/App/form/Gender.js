import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import styles from "../../../style";

const GenderInput = ({ state, setState }) => {
    return (
      <View style={styles.viewBorder}>
        <Text>Gender:</Text>
        <View style={styles.radioGroup}>
          <RadioButton.Group
            onValueChange={(newValue) =>
              setState({ ...state, selectedGender: newValue })
            }
            value={state.selectedGender}
          >
            <View style={styles.radiowrapper}>
              <View style={styles.radioButton}>
                <RadioButton value="male" />
                <Text>Male</Text>
              </View>
              <View style={styles.radioButton}>
                <RadioButton value="female" />
                <Text>Female</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>
      </View>
    );
  };

export default GenderInput;