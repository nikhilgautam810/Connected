import { Dimensions, Image, StatusBar, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, Platform, Pressable, ScrollView } from 'react-native'
import { Color } from '../Components/Common'
import { useState } from 'react'
import VectorIcons from '../Components/VectorIcons'
const { height, width } = Dimensions.get('screen')


const SignIn = ({navigation}) => {

    const [showPassword, setShowPassword] = useState('false')

    const NavigateToSignUp = () =>{
        navigation.navigate('SignUp')
    }

    const changePasswordVisibility = () =>{
        setShowPassword(prevState => !prevState);
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.background}
                source={require('../Assets/Background01.png')}
                resizeMode="cover"
            />
            <KeyboardAvoidingView
                style={styles.keyboardAvoiding}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
            >
                <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
                <View style={styles.innerContainer}>
                    <View style={styles.firstInnerContainer}>
                        <Image source={require('../Assets/Logo5.png')} style={styles.logo} />
                        <Text style={styles.slogan}>Bringing People Closer Every Day.</Text>
                    </View>
                    <View style={styles.secondInnerContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={styles.heading}>
                            <Text style={styles.signInTxt}>Connected</Text>
                            <Text style={styles.signInTxtSmall}>Sign In to Continue</Text>
                        </View>
                        <View style={styles.textFieldOuterView}>
                            <Text style={styles.textFieldTxt}>Email</Text>
                            <View style={styles.textFieldInner}>
                                <TextInput
                                    placeholder='Enter your email..'
                                    style={styles.textField}
                                    placeholderTextColor={Color.fontColorGrey}
                                />
                            </View>

                        </View>
                        <View style={styles.textFieldOuterView}>
                            <Text style={styles.textFieldTxt}>Password</Text>
                            <View style={styles.textFieldInner}>

                                <TextInput
                                    placeholder='Enter your password..'
                                    style={styles.textField}
                                    placeholderTextColor={Color.fontColorGrey}
                                    secureTextEntry={!showPassword}
                                />
                                <Pressable style={styles.eyeBtn} onPress={()=>changePasswordVisibility()}>
                                    {
                                        showPassword ? (<VectorIcons type="Ionicons" name="eye-off" size={20} color="#0079FF" />)
                                         : (<VectorIcons type="Ionicons" name="eye" size={20} color="#0079FF" /> )
                                    }
                                </Pressable>
                            </View>
                        </View>
                        <Pressable style={styles.forgetPasswordBtn}>
                            <Text style={styles.forgetPasswordBtnTxt}>Forget Password?</Text>
                        </Pressable>
                        <Pressable style={styles.signInBtn}>
                            <Text style={styles.signInBtnTxt}>Sign In</Text>
                        </Pressable>
                        <View style={styles.dontHaveAccount}>
                                <Text style={styles.dontHaveAccountTxt}>Don't have an account </Text>
                            <Pressable style={styles.dontHaveAccountBtn} onPress={()=>NavigateToSignUp()}>
                                    <Text style={styles.dontHaveAccountBtnTxt}>Create a new account?</Text>
                            </Pressable>
                        </View>
                        </ScrollView>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}
export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
    },
    background: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    },
    keyboardAvoiding: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    firstInnerContainer: {
        flex: 2,  // Adjusted to take 2 parts of the container
        justifyContent: 'center',
        alignItems: 'center',
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
    secondInnerContainer: {
        flex: 2,  // Adjusted to take 3 parts of the container
        backgroundColor: '#fff',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 10,
        padding: 20,
    },
    heading: {
        alignItems: 'center',
    },
    signInTxt: {
        color: Color.textColor,
        fontWeight: '700',
        fontSize: 25,
    },
    signInTxtSmall: {
        color: Color.textColor,
        fontWeight: '400',
        fontSize: 12,
        paddingTop: 5,
    },
    textFieldOuterView: {
        marginTop: 20,
        marginHorizontal: 20
    },
    textFieldTxt: {
        color: Color.textColor,
        fontWeight: '400',
        fontSize: 14,
        paddingLeft: 10,
    },
    textFieldInner: {
        backgroundColor: Color.textFieldBGColor,
        borderRadius: 20,
        height: height / 20,
        justifyContent: 'center',
        marginTop: 5

    },
    textField: {
        paddingHorizontal: 20,
        color: Color.textColor
    },
    forgetPasswordBtn: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    forgetPasswordBtnTxt: {
        color: Color.fontColorGrey,
        fontWeight: '500',
        fontSize: 12,
        paddingRight: 10

    },
    signInBtn:{
        borderWidth:0.2,
        height: height/20,
        width:width/2,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        marginVertical:20,
        backgroundColor:Color.btnBGColor,
        borderColor:Color.borderColor,
        elevation:10
    },
    signInBtnTxt:{
        color:Color.white,
        fontSize:17,
        fontWeight:'700'
    },
    dontHaveAccount:{
        alignSelf:'center',
        marginTop:20,
        flexDirection:'row'
    },
    dontHaveAccountTxt:{
        fontSize:13,
        fontWeight:'400',
        color:Color.fontColorGrey
    },
    dontHaveAccountBtnTxt:{
        fontSize: 13,
        fontWeight: '400',
        color: Color.btnBGColor
    },
    eyeBtn:{
        position:'absolute',
        right:12
    }
})
