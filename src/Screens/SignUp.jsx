import { StyleSheet, Text, View, Image, StatusBar, KeyboardAvoidingView, Dimensions } from 'react-native'
import { Color } from '../Components/Common'
const { height, width } = Dimensions.get('screen')



const SignUp = () => {

    return (
        <View style={styles.container}>
            <Image source={require('../Assets/Background01.png')} style={styles.background} />
            <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            >
                <View style={styles.innerContainer}>
                    <View style={styles.firstInnerContainer}>
                        <Image source={require('../Assets/Logo5.png')} style={styles.logo} />
                        <Text style={styles.slogan}>Bringing People Closer Every Day.</Text>
                    </View>
                    <View style={styles.secondInnerContainer}>

                    </View>
                </View>
            </KeyboardAvoidingView>

        </View>
    )
}
export default SignUp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    },
    background: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left:0
    },
    keyboardAvoiding: {
        flex: 1,
    },
    innerContainer: {
        flex:1,
    },
    firstInnerContainer: {
        flex: 2,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    secondInnerContainer: {
        flex: 4,
        backgroundColor: Color.white
    },
    logo: {
        height: height / 5,
        width: width / 2,
        resizeMode: 'contain'
    },
    slogan: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
    },
})