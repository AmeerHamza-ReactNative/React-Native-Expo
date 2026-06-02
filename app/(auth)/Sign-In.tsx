import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Link href="/(auth)/Sign-Up">Create Account</Link>
    </View>
  )
}

export default SignIn