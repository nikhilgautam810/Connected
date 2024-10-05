import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import SignIn from '../Screens/SignIn'
import Welcome from '../Screens/Welcome'
import SignUp from '../Screens/SignUp'


const Navigation = () => {
    const stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <stack.Navigator screenOptions={{ headerShown: false }}>
                <stack.Screen name='Welcome' component={Welcome} />
                <stack.Screen name='SignIn' component={SignIn} />
                <stack.Screen name='SignUp' component={SignUp} />
            </stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation