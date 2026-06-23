import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
const Subscriptions = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.main,{marginTop:insets.top,paddingBottom:insets.bottom}]}>
      <Text>Subscriptions</Text>
    </SafeAreaView>
  )
}

export default Subscriptions
const styles = StyleSheet.create({
  main:{
    flex:1
  }
})