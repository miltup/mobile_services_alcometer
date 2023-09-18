import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, ScrollView, TextInput, Alert, Switch, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import { LightTheme, DarkTheme } from './styles/Styles.js';

export default function App() {

  const [dark, setDark] = useState(false);
  const currentTheme = dark ? DarkTheme : LightTheme;

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);

  const sexes = ['Male', 'Female'];
  const [sex, setSex] = useState(sexes[0]);

  function calculateAlcoholLevel() {
    
    if (weight == '') {
      Alert.alert(
        'Weight is not typed in'
      )
    } else {
      const litres = bottles * 0.33;
      const grams = litres * 8 * 4.5;
      const burning = weight / 10;
      const gramsleft = grams - (burning * hours);
    
      if (sex == 'Male') {
        const maleresult = gramsleft / (weight * 0.7);
        if (maleresult < 0) {
          setResult(0.00)
        } else {
          setResult(maleresult)
        };
      } else {
        const femaleresult = gramsleft / (weight * 0.6);
        if (femaleresult < 0) {
          setResult(0.00)
        } else {
          setResult(femaleresult)
        };
      }
    }};

  const [result, setResult] = useState(0);

  return (
    <View style={currentTheme.container}>
      <ScrollView contentContainerStyle={currentTheme.container}>
      <View>
        <Text style={currentTheme.text}>Change theme</Text>
        <Switch style={currentTheme.switch}
        onValueChange={ ()=> setDark(!dark)} thumbColor={ dark ? '#f1b9b9' : '#5c0627'}
        value={dark}
        />
      </View>
      <View>
        <Text style={currentTheme.header}>Alcometer</Text>
      </View>
      <View>
        <Text style={currentTheme.text}>Weight:</Text>
        <TextInput 
          keyboardType='number-pad' 
          style={currentTheme.textInput}
          onChangeText={setWeight}
        />
      </View>
      <View style={currentTheme.box}>
        <View style={currentTheme.textRow}>
          <Text style={currentTheme.text}>Bottles:</Text>
          <Text style={currentTheme.text}>Hours:</Text>
        </View>
        <View style={currentTheme.rowStyle}>
          <NumericInput rightButtonBackgroundColor = '#ba4054' leftButtonBackgroundColor = '#ba4054' textColor = '#f1b9b9' onChange={bottles => setBottles(bottles)} />
          <NumericInput rightButtonBackgroundColor = '#ba4054' leftButtonBackgroundColor = '#ba4054' textColor = '#f1b9b9' onChange={hours=> setHours(hours)} />
        </View>
      </View>
      <View>
        <RadioButton.Group value={sex} onValueChange={s => setSex(s)}>
          {sexes.map(s =>
            <View key={s} style={currentTheme.radioButtons} >
              <RadioButton color = '#ba4054' value={s}/>
              <Text style={currentTheme.text}>{s}</Text>
            </View>
          )}
        </RadioButton.Group>
      </View>
      <View>
        <Text style={currentTheme.text}>{result.toFixed(2)}</Text>
      </View>
      <View>
        <Pressable onPress={calculateAlcoholLevel}>
          <Text style={currentTheme.calculate}>Calculate</Text>
        </Pressable>
      </View>
    </ScrollView>
    </View>
  );
}