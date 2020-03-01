import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {plusToCounter, minusToCounter} from './redux/Actions';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title={'plus'}
          onPress={() => this.props.plusToCounter()}></Button>
        <Button
          title={'minus'}
          onPress={() => this.props.minusToCounter()}></Button>
        <Text style={{fontSize: 20}}>{this.props.count}</Text>
      </View>
    );
  }
}

// This function provides a means of sending actions so that data in the Redux store
// can be modified. In this example, calling this.props.addToCounter() will now dispatch
// (send) an action so that the reducer can update the Redux state.
function mapDispatchToProps(dispatch) {
  return {
    plusToCounter: () => dispatch(plusToCounter()),
    minusToCounter: () => dispatch(minusToCounter()),
  };
}

// This function provides access to data in the Redux state in the React component
// In this example, the value of this.props.count will now always have the same value
// As the count value in the Redux state
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
