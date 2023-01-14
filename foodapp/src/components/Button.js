
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = () => {
  return (
      <TouchableOpacity
      style={{
        width:200,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"green"
      }

      }>
        <Text>{title}</Text>

      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
});
export default CustomButton;

