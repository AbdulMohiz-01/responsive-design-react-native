import { View, Text } from "react-native";
import { Checkbox } from "react-native-paper";
import styles from "../../../style";

const SubjectsInput = ({ state, setState }) => {
    const handleSubjectChange = (subject) => {
      setState({
        ...state,
        subjects: { ...state.subjects, [subject]: !state.subjects[subject] },
      });
    };
  
    return (
      <View style={styles.viewBorder}>
        <Text>Subjects:</Text>
        <View style={styles.checkboxGroup}>
          {Object.keys(state.subjects).map((subject) => (
            <View style={styles.checkboxWrapper} key={subject}>
              <Checkbox.Android
                status={state.subjects[subject] ? "checked" : "unchecked"}
                onPress={() => handleSubjectChange(subject)}
              />
              <Text>{subject}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

export default SubjectsInput;