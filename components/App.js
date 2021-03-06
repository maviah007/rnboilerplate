// @flow

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

type Props = {
  receiver: string,
};

type State = {
  value: number,
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.receiver}
          {this.state.value}
        </Text>
      </View>
    );
  }
}
