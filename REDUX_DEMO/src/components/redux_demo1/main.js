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
      <View style={{flex: 1,alignSelf: 'center', justifyContent: 'center'}}>
        <TextInput
          placeholder="phone number"
          keyboardType="number-pad"
          onChangeText={phoneNumber => this.setState({phoneNumber})}
        />
        <TouchableOpacity
          onPress={this.props.setLoginNumber(this.state.phoneNumber)}>
          <Text>login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLoginNumber: phoneNumber => {
      dispatch(setLoginNumber(phoneNumber));
    },
  };
}

export default connect(null, mapDispatchToProps)(tes);
