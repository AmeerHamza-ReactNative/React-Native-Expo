import { theme } from '@/theme/theme';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
const Insights = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.main,{marginTop:insets.top,paddingBottom:insets.bottom}]}>
      <Text>Insights</Text>
    </SafeAreaView>
  )
}

export default Insights

const styles = StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:theme.colors.background
  }
})