import { StatusBar } from 'react-native';
const { StyleSheet } = require("react-native");

const LightTheme = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
        flexGrow: 1,
        backgroundColor: '#f1b9b9',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      text: {
        color: '#5c0627',
        fontSize: 20,
      },
      switch: {
        alignSelf: 'center',
      },
      header: { 
        color: '#5c0627',
        fontSize: 24,
        fontWeight: 'bold',
      },
      textInput: {
        width: 100,
        borderWidth: 1,
        borderColor: '#f09898',
        backgroundColor: '#ba4054',
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        color: '#5c0627',
      },
      box:{
        justifyContent: 'center'
      },
      textRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
      },
      numInput: {
        rightButtonBackgroundColor: '#f09898',
        leftButtonBackgroundColor: '#f09898',
        textColor: '#5c0627',
      },
      rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ba4054',
      },
      radioButtons: {
        flexDirection: 'row', 
        alignItems: 'center',
      },
      calculate: {
        backgroundColor: '#ba4054',
        padding: 5,
        width: 100,
        borderWidth: 1,
        borderColor: '#f09898',
        borderRadius: 20,
        textAlign: 'center',
        color: '#f1b9b9',
      },
});

const DarkTheme = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight + 5,
        flexGrow: 1,
        backgroundColor: '#5c0627',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      text: {
        color: '#f1b9b9',
        fontSize: 20,
      },
      scrollView: {
        marginHorizontal: 20,
      },
      switch: {
        alignSelf: 'center',
      },
      header: { 
        color: '#f1b9b9',
        fontSize: 24,
        fontWeight: 'bold',
      },
      textInput: {
        width: 100,
        borderWidth: 1,
        borderColor: '#f09898',
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        color: '#f1b9b9',
        backgroundColor: '#ba4054',
      },
      box:{
        justifyContent: 'center'
      },
      textRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5,
      },
      numInput: {
        rightButtonBackgroundColor: '#f09898',
        leftButtonBackgroundColor: '#f09898',
        textColor: '#5c0627',
      },
      rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#ba4054',
        color: '#f1b9b9',
      },
      radioButtons: {
        flexDirection: 'row', 
        alignItems: 'center'
      },
      calculate: {
        backgroundColor: '#ba4054',
        padding: 5,
        width: 100,
        borderWidth: 1,
        borderColor: '#f09898',
        borderRadius: 20,
        textAlign: 'center',
        color: '#f1b9b9',
      },
});
  
export {LightTheme, DarkTheme};
