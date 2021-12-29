import React from 'react';
import {StyleSheet, Text, View ,Image ,Pressable} from 'react-native';

const KycMandatory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
          <Image style={styles.img} source={require('../Images/Nav_left/Nav_left.png')} />
      </View>
      <Image style={styles.img2} source={require('../Images/KYC_image/KYC_image.png')} />
      <View style={styles.view3}>
      <Text style={styles.text1}>
          KYC is manadatory {'\n'}for <Text style={styles.txtcl}>security reasons</Text>
        </Text>
        <Text style={styles.text2}>
         According to RBI, KYC is compulsory for availing any form of credit product in India
        </Text>

      </View>
      <Pressable
        style={styles.btn}>
        <Text style={styles.txtclr2}>Next</Text>
      </Pressable>
     
    </View>
  );
};

export default KycMandatory;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#0f1010',
  },
  view1: {
    width: 390,
    height: 48,
    marginTop: 8,
    marginBottom: 16,
    paddingVertical :12,
    paddingLeft :16,
    marginTop:18,
  },
  img:{
    width: 24,
    color : "#ffffff",
    height: 24,
  },
  img2 :{
    width: 356,
    height: 277,
    marginLeft:16,
    marginLeft :20,
    marginRight:14,
    marginTop:16,
    objectFit: "contain",
  },
  btn: {
    width: 340,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    borderRadius: 12,
    backgroundColor: '#2c64ff',
    shadowColor: '#2c64ff',
    shadowOffset: {width: 4, height: 4},
    position: 'absolute',
    bottom: 29,
  },
  view3:{
    width: 340,
    height: 133,
    marginTop:51,
    marginHorizontal:25,
    justifyContent:"flex-start",
    alignItems: "flex-start",
    gap: 8,
  },
  text1: {
    height: 69,
    flexGrow: 0,
    fontFamily: 'BasierCircle',
    fontSize: 28,
    fontWeight: '900',
    color :"#ffffff"
  },
  txtcl: {
    color: '#2c64e3',
  },
  text2 :{
      marginTop : 16,
      height:80,
      flexGrow: 0,
      fontFamily: 'BasierCircle',
      fontSize: 14,
      fontWeight: '500',
      color: '#ffffff'

  },
  text3 : {
    width: 199,
    height: 20,
    flexGrow: 0,
    fontFamily: 'BasierCircle',
    fontSize: 10,
    fontWeight: '500',
    color :"#000000"
  },
  txtclr2: {
    color: '#ffffff',
  },
});