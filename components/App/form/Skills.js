import { Checkbox } from "react-native-paper";
import { Text, View } from "react-native";
import styles from "../../../style";

const SkillsInput = ({ state, setState }) => {
    const skillOptions = ["Java", "JavaScript", "C#", "C++"];
  
    return (
      <View style={styles.viewBorder}>
        <Text>Skills:</Text>
        <View style={styles.checkboxGroup}>
          {skillOptions.map((skill) => (
            <View style={styles.checkboxWrapper} key={skill}>
              <Checkbox.Android
                status={state.skills.includes(skill) ? "checked" : "unchecked"}
                onPress={() => {
                  const newSkills = state.skills.includes(skill)
                    ? state.skills.filter((s) => s !== skill)
                    : [...state.skills, skill];
                  setState({ ...state, skills: newSkills });
                }}
              />
              <Text>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  export default SkillsInput;