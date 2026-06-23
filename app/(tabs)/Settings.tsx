import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
const Settings = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.main,{marginTop:insets.top,paddingBottom:insets.bottom}]}>
      <Text>Settings</Text>
    </SafeAreaView>
  )
} 

export default Settings

const styles = StyleSheet.create({
  main:{
    flex:1,
  }
})