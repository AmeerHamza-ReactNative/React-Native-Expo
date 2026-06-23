import { theme } from '@/theme/theme'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView, useSafeAreaInsets, } from 'react-native-safe-area-context'
const index = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.main,{marginTop:insets.top,paddingBottom:insets.bottom}]}>
      <Text style={styles.text}>First App</Text>
      <Link href ="/OnBoarding" style={{margin:theme.spacing[4],borderRadius:10,backgroundColor:theme.colors.primary,padding:theme.spacing[4],color:'white'}}>Go To Onboarding</Link>
      <Link href ="/(auth)/Sign-In" style={{margin:theme.spacing[4],borderRadius:10,backgroundColor:theme.colors.primary,padding:theme.spacing[4],color:'white'}}>Go To Sign In</Link>
      <Link href ="/(auth)/Sign-Up" style={{margin:theme.spacing[4],borderRadius:10,backgroundColor:theme.colors.primary,padding:theme.spacing[4],color:'white'}}>Go To Sign Up</Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link href={{
        pathname : "/subscriptions/[id]",
        params : { id : "claude"}
      }}>Claude Max Subscription</Link>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:theme.colors.background
  },
  text:{
    fontSize:18,
    fontWeight:"bold",
    color:theme.colors.success
  }
})