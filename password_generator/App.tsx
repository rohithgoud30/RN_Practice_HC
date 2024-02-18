import React, {useState} from 'react';
import {Formik} from 'formik';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import * as Yup from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [numbers, setNumbers] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (specialCharacters) {
      characterList += specialChars;
    }

    const passwordString = createPassword(characterList, passwordLength);

    setPassword(passwordString);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSpecialCharacters(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text
            style={[
              styles.title,
              isDarkMode ? styles.whiteText : styles.blackText,
            ]}>
            Password Generator
          </Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => {
              console.log(values);
              generatePasswordString(+values.passwordLength);
            }}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              isValid,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text
                      style={[
                        isDarkMode ? styles.whiteText : styles.blackText,
                        styles.heading,
                      ]}>
                      Password Length
                    </Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                  </View>

                  <TextInput
                    style={[
                      isDarkMode ? styles.whiteText : styles.blackText,
                      styles.inputStyle,
                    ]}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    keyboardType="numeric"
                    placeholder="Ex. 8"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text
                    style={[
                      isDarkMode ? styles.whiteText : styles.blackText,
                      styles.heading,
                    ]}>
                    Include LowerCase
                  </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setLowerCase(!lowerCase)}
                    fillColor="#29AB87"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text
                    style={[
                      isDarkMode ? styles.whiteText : styles.blackText,
                      styles.heading,
                    ]}>
                    Include upperCase
                  </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setUpperCase(!upperCase)}
                    fillColor="#FED85D"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text
                    style={[
                      isDarkMode ? styles.whiteText : styles.blackText,
                      styles.heading,
                    ]}>
                    Include Numbers
                  </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text
                    style={[
                      isDarkMode ? styles.whiteText : styles.blackText,
                      styles.heading,
                    ]}>
                    Include Symbols
                  </Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={specialCharacters}
                    onPress={() => setSpecialCharacters(!specialCharacters)}
                    fillColor="#FC80A5"
                  />
                </View>

                <View style={styles.formActions}>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                    style={styles.primaryBtn}>
                    <Text
                      style={[
                        isDarkMode ? styles.whiteText : styles.blackText,
                        styles.primaryBtnTxt,
                      ]}>
                      Generate Password
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      handleReset();
                      resetPasswordState();
                    }}
                    style={styles.secondaryBtn}>
                    <Text
                      style={[
                        isDarkMode ? styles.whiteText : styles.blackText,
                        styles.secondaryBtnTxt,
                      ]}>
                      Reset
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {isPasswordGenerated && (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>
              {password}
            </Text>
          </View>
        )}
      </SafeAreaView>
    </ScrollView>
  );
};
export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  heading: {
    fontSize: 15,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
    color: 'black',
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
});
