import { useState } from "react";
import {
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import { NameInput, EmailInput, GenderInput, CountryInput, SubjectsInput, SkillsInput, AddressInput, SubmitButton } from "./components/App/form";
import styles from "./style";


const App = () => {
  const { width, height } = useWindowDimensions();

  const [state, setState] = useState({
    selectedGender: "",
    selectedCountry: "",
    skills: [],
    address: "",
    subjects: {
      phy: false,
      chem: false,
      bio: false,
    },
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={width > height ? styles.row : styles.column}>
          <EmailInput state={state} setState={setState} />
          <NameInput state={state} setState={setState} />
        </View>
        <View style={width > height ? styles.row : styles.column}>
          <GenderInput state={state} setState={setState} />
          <CountryInput state={state} setState={setState} />
        </View>
        <View style={width > height ? styles.row : styles.column}>
          <SubjectsInput state={state} setState={setState} />
          <SkillsInput state={state} setState={setState} />
        </View>
        <View style={width > height ? styles.row : styles.column}>
          <AddressInput state={state} setState={setState} />
          <SubmitButton />
        </View>
      </View>
    </ScrollView>
  );
};

export default App;

