import React from 'react';
import { AppRegistry, StyleSheet, TextInput, Text, View, ScrollView } from 'react-native';
import * as firebase from "firebase";

export default class App extends React.Component {

    render() {
      return (
        // Try setting `flexDirection` to `column`.
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 50, height: 50, backgroundColor: 'powderblue'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
            <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
          </View>
        </View>
      );
    }
  };

  // AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);
