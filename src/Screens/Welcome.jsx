import { Dimensions, Image, ImageBackground, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Color } from '../Components/Common'
const { width } = Dimensions.get('screen')
const { height } = Dimensions.get('screen')


const Welcome = ({navigation}) => {

  const NavigateToLoginAndSignUp = (screen)  =>{
    if (screen == 'SignIn') {
      navigation.navigate('SignIn')
    } else {
      navigation.navigate('SignUp')
    }
  }

  return (
    <ImageBackground
      source={require('../Assets/Background01.png')}
      style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
        <Image source={require('../Assets/MainLogo.png')} style={styles.appLogo} />

      <Pressable style={styles.btn} onPress={() => NavigateToLoginAndSignUp('SignIn')}>
        <Text style={styles.btnTxt}>Sign In</Text>
        </Pressable>
      <Pressable style={styles.btn} onPress={() => NavigateToLoginAndSignUp('SignUp')}>
        <Text style={styles.btnTxt}>Sign Up</Text>
      </Pressable>
    </ImageBackground>
  )
}
export default Welcome
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appLogo: {
    width: width / 2,
    height: height / 4,
  },
  safeArea: {
    flex: 1,
  },
  btn:{
    backgroundColor:Color.btnBGColor,
    width:width/1.5,
    height:height/18,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    elevation:10,
    marginTop:20
  },
  btnTxt:{
    color:'#fff',
    fontWeight:'400',
    fontSize:20
  }

})