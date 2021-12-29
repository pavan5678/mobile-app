import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';

const OnboardingScreens = () => {
  const [index, setIndex] = useState(0);
  const getImage = name => {
    switch (name) {
      case 'img1':
        return require('../Images/Onboarding_image/Onboarding_image_1.png');
      case 'img2':
        return require('../Images/Onboarding_image_2/Onboarding_image_2.png');
      case 'img3':
        return require('../Images/Onboarding_image_3/onboarding_image_3.png');

      default:
        return require('../Images/Onboarding_image/Onboarding_image_1.png');
    }
  };
  const screens = [
    {
      title: 'One Place',
      title2: 'for',
      strong: 'Everything',
      desc: "Use LA8R for all your transactions and pay at the end of the month with no extra cost or covert to EMI'S and earn rewards for shopping with your favourite merchants ",
      caption: 'credit limit depends on users credit profile',
      imgC: true,
      img: 'img1',
      btnText: 'Next',
    },
    {
      title: 'Experience a new',
      title2: 'way to',
      strong: 'Shop',
      desc: 'Gauranteed cashback for every purchase done through LA8R & get more rewards if paid using LA8R pay',
      img: 'img2',
      btnText: 'Next',
    },

    {
      title: 'Pay at Checkout',
      title2: 'or get',
      strong: 'Instant Cash Loan',
      desc: 'You can use your LA8R to pay directly to the merchants or you can withdrawas cash to your bank account',
      img: 'img3',
      btnText: "Let's go",
    },
  ];
  const changePage = () => {
    setIndex(index + 1);
  };
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={getImage(screens[index].img)} />
      <View style={styles.view1}>
        <Text style={styles.text1}>
          {screens[index].title} {'\n'}
          {screens[index].title2}{' '}
          <Text style={styles.txtcl}>{screens[index].strong}</Text>
        </Text>
        <Text style={styles.text2}>{screens[index].desc}</Text>
        <Text style={styles.text3}>{screens[index].caption}</Text>
      </View>
      <Pressable
        onPress={() => {
          index < 2 && changePage();
        }}
        style={styles.btn}>
        <Text style={styles.txtclr2}>{screens[index].btnText}</Text>
      </Pressable>
    </View>
  );
};

export default OnboardingScreens;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  img1: {
    width: 248,
    height: 348.9,
    marginHorizontal: 71,
    marginTop: 40,
    marginBottom: 28.1,
    resizeMode: 'contain',
  },
  view1: {
    width: 390,
    height: 209,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 8,
    paddingVertical: 4,
    paddingLeft: 24,
    paddingRight: 11,
  },
  text1: {
    height: 69,
    flexGrow: 0,
    fontFamily: 'BasierCircle',
    fontSize: 28,
    fontWeight: '900',
    color: '#000000',
  },
  txtcl: {
    color: '#2c64e3',
  },
  text2: {
    marginTop: 16,
    height: 80,
    flexGrow: 0,
    fontFamily: 'BasierCircle',
    fontSize: 14,
    fontWeight: '500',
    color: '#252525',
  },
  text3: {
    width: 199,
    height: 20,
    flexGrow: 0,
    fontFamily: 'BasierCircle',
    fontSize: 10,
    fontWeight: '500',
    color: '#000000',
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
  txtclr2: {
    color: '#ffffff',
  },
});
