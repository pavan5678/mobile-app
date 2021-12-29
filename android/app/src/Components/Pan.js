import React from 'react';
import {StyleSheet, Text, View, Image, TextInput ,Pressable } from 'react-native';

const Pan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          style={styles.img}
          source={require('../Images/Nav_left/Nav_left.png')}
        />
      </View>
      <Text style={styles.text1}>
        Enter your 
        <Text style={styles.txtcl}> Permanent{'\n'}Account Number (PAN)</Text>
      </Text>
      <TextInput style ={styles.input} 
        placeholder="PAN" />
        <Pressable
        style={styles.btnpan}>
        <Text style={styles.txtclr2}>Proceed</Text>
      </Pressable>
    </View>
  );
};

export default Pan;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor:"#f3f4f5"
  },
  txtcl: {
    color: '#2c64e3',
  },
  view1: {
    width: 390,
    height: 48,
    marginTop: 8,
    marginBottom: 16,
    paddingVertical: 12,
    paddingLeft: 16,
    marginTop: 18,
  },
  img: {
    width: 24,
    color: '#ffffff',
    height: 24,
  },
  text1: {
    width: 308,
    height: 69,
    fontFamily: 'BasierCircle',
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'left',
    marginVertical : 8,
    marginLeft: 24,

  },
  input :{
    width: 342,
    height: 48,
    gap: 16,
    padding: 16,
    borderRadius: 8,
    marginHorizontal:24,
    marginVertical :8,
    color:"#e3e5e5",
    backgroundColor:"#ffffff"
  },
  btnpan: {
    marginVertical :8,
    width: 340,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    borderRadius: 12,
    backgroundColor: '#2c64ff',
    shadowColor: '#2c64ff',
    shadowOffset: {width: 4, height: 4},
    // position: 'absolute',
    // bottom: 29,
  },
  txtclr2: {
    color: '#ffffff',
  },
});
