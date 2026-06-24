import { theme } from '@/theme/theme'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView, useSafeAreaInsets, } from 'react-native-safe-area-context'
const index = () => {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[styles.main,{marginTop:insets.top,paddingBottom:insets.bottom}]}>
      <Text style={styles.text}>Home</Text>
      <Link href ="/OnBoarding" style={styles.linktext}>Go To Onboarding</Link>
      <Link href ="/(auth)/Sign-In" style={styles.linktext}>Go To Sign In</Link>
      <Link href ="/(auth)/Sign-Up" style={styles.linktext}>Go To Sign Up</Link>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  main:{
    flex:1,
    padding:theme.spacing[5],
    backgroundColor:theme.colors.background
  },
  linktext:{
    marginTop:theme.spacing[4],
    borderRadius:10,
    backgroundColor:theme.colors.primary,
    padding:theme.spacing[4],
    color:'white',
    fontFamily:'sans-bold',
  },
  text:{
    fontFamily:'sans-extrabold',
    color:theme.colors.primary,
    fontSize:theme.spacing[5],
  }
})

{/* <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link href={{
        pathname : "/subscriptions/[id]",
        params : { id : "claude"}
      }}>Claude Max Subscription</Link> */}