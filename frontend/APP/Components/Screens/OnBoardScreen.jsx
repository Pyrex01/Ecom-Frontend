import React from 'react';
import {Platform,Text, StyleSheet, View, Image} from 'react-native';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import COLORS from '../../Configs/Colors/Colors';
import { PrimaryButton } from '../Sub Components/Button';

const OnBoardScreen = ({}) => {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height:600}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            
            height: Platform.OS=='android'?500:500,
            top: -150,
          }}
          source={require('../../assets/image.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 42, marginTop:-270, fontWeight:'bold', textAlign: 'center'}}>
            Shopping Bazaar
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 20,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We help you to find the best 
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          title="Get Started"
/>
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    top:-10,
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;