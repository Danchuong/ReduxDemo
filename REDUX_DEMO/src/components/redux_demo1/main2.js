import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {setLoginNumber} from './redux/Actions';

class tes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };
    this.funcAlert = this.funcAlert.bind(this);
  }

  funcAlert() {
    alert(this.props.number);
  }

  render() {
    return (
      <View style={{flex: 1, alignSelf: 'center', justifyContent: 'center'}}>
        <Text>{this.props.phoneNumber}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    phoneNumber: state.phoneNumber,
  };
}

export default connect(mapStateToProps, null)(tes);
