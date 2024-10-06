import { StyleSheet, Text, View, Image, StatusBar, KeyboardAvoidingView, Dimensions, ScrollView, Pressable, TextInput } from 'react-native'
import { Color } from '../Components/Common'
const { height, width } = Dimensions.get('screen')



const SignUp = ({navigation}) => {

    const NavigateToSignIn = () =>{
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.container}>
            <Image source={require('../Assets/Background01.png')} style={styles.background} />
            <StatusBar translucent barStyle={'light-content'} backgroundColor={'transparent'} />
            <View style={styles.innerContainer}>
                <View style={styles.firstInnerContainer}>
                    <Image source={require('../Assets/Logo5.png')} style={styles.logo} />
                    <Text style={styles.slogan}>Bringing People Closer Every Day.</Text>
                </View>
                <View style={styles.secondInnerContainer}>
                    <ScrollView>
                        <View style={styles.headingView}>
                            <Text style={styles.headingTxt}>Connected</Text>
                            <Text style={styles.createAccountTxt}>Create a new Connected account</Text>
                        </View>
                        <View style={styles.formView}>
                            <View style={styles.textFieldOuterView}>
                                <Text style={styles.textFieldTxt}>Name</Text>
                                <View style={styles.textFieldInnerView}>
                                    <TextInput
                                    placeholder='Enter your name..'
                                    style={styles.textField}
                                    placeholderTextColor={Color.fontColorOne}
                                    />
                                </View>
                            </View>
                            <View style={styles.textFieldOuterView}>
                                <Text style={styles.textFieldTxt}>Email</Text>
                                <View style={styles.textFieldInnerView}>
                                    <TextInput
                                    placeholder='Enter your email..'
                                    style={styles.textField}
                                    placeholderTextColor={Color.fontColorOne}
                                    />
                                </View>
                            </View>
                            <View style={styles.textFieldOuterView}>
                                <Text style={styles.textFieldTxt}>Phone</Text>
                                <View style={styles.textFieldInnerView}>
                                    <TextInput
                                    placeholder='Enter your phone..'
                                    style={styles.textField}
                                    placeholderTextColor={Color.fontColorOne}
                                    />
                                </View>
                            </View>
                            <View style={styles.textFieldOuterView}>
                                <Text style={styles.textFieldTxt}>Password</Text>
                                <View style={styles.textFieldInnerView}>
                                    <TextInput
                                    placeholder='Enter your password..'
                                    style={styles.textField}
                                    placeholderTextColor={Color.fontColorOne}
                                    />
                                </View>
                            </View>
                            <View style={styles.textFieldOuterView}>
                                <Text style={styles.textFieldTxt}>Confirm Password</Text>
                                <View style={styles.textFieldInnerView}>
                                    <TextInput
                                    placeholder='Enter your confirm password..'
                                    style={styles.textField}
                                    placeholderTextColor={Color.fontColorOne}
                                    />
                                </View>
                            </View>
                            <Pressable style={styles.signUpBtn}>
                                <Text style={styles.signUpBtnTxt}>Sign Up</Text>
                            </Pressable>
                        </View>
                        <View style={styles.alreadyHaveAccountView}>
                                <Text style={styles.alreadyHaveAccountTxt}>Already have an Connected account?</Text>
                                <Pressable style={styles.loginhereBtn} onPress={()=> NavigateToSignIn()}>
                                    <Text style={styles.loginHereBtnTxt}>Sign In</Text>
                                </Pressable>
                            </View>
                    </ScrollView>
                </View>
            </View>

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
        left: 0
    },
    keyboardAvoiding: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
    },
    firstInnerContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    secondInnerContainer: {
        flex: 6,
        backgroundColor: Color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    logo: {
        height: height / 8,
        width: width / 2,
        resizeMode: 'contain'
    },
    slogan: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
    },
    headingView:{
        alignItems:'center',
        padding:10
    },
    headingTxt:{
        fontSize:22,
        fontWeight:'500',
        color:Color.textColor,
    },
    createAccountTxt:{
        fontSize:17,
        fontWeight:'400',
        color:Color.textColor,
        padding:5
    },
    alreadyHaveAccountView:{
        flexDirection:'row',
        alignSelf:'center'
    },
    alreadyHaveAccountTxt:{
        fontSize:14,
        fontWeight:'400',
        color:Color.fontColorGrey,
    },
    loginhereBtn:{
        paddingLeft:5
    },
    loginHereBtnTxt:{
        fontSize:14,
        fontWeight:'400',
        color:Color.btnBGColor,
    },
    formView:{
        marginHorizontal:30
    },
    textFieldOuterView:{
        paddingVertical:5
    },
    textFieldTxt:{
        color: Color.textColor,
        fontWeight: '400',
        fontSize: 14,
        paddingLeft: 10,
    },
    textFieldInnerView:{
        borderWidth: 0.2,
        borderRadius:30,
        backgroundColor:Color.textFieldBGColor,
        marginVertical:5,
        height: height / 20,
        borderColor:Color.borderColor
    },
    textField:{
        paddingHorizontal:20,
        color: Color.textColor
    },
    signUpBtn:{
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
    signUpBtnTxt:{
        color:Color.white,
        fontSize:17,
        fontWeight:'700'        
    }
})