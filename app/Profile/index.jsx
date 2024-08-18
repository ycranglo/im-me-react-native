import { Linking ,StyleSheet,StatusBar, Text, View ,Image, ScrollView} from 'react-native'
import React from 'react'

const index = () => {
  return (
    <ScrollView  style={{
        flex: 1,
    paddingTop: StatusBar.currentHeight,
        paddingBottom:50
      }}>
    <View style={{alignItems:'center',gap:10}}>
     <Text style={{ fontSize: 40 }}>youre interested huh 🤓</Text>
     <Text style={{ fontSize: 20 }}>so here are some fine a5 wangyu beef works of mine, enjoy</Text>
     <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://gelssante.vercel.app/')}>
  click here im so lazy to do it hehe
     </Text>
      <Text style={{ fontSize: 20 }}>so instead i will show you my gf( not officials)</Text>
    </View>
    <View style={{
     alignItems: 'center',
     gap: 15,
     paddingTop:10
      }}>
      <View>
       <Image source={require('../../assets/images/jho.jpg')}  style={{width: 350, height: 350,borderRadius:12}}/>
     </View>
      <View>
       <Image source={require('../../assets/images/rei.jpg')}  style={{width: 350, height: 350,borderRadius:12}}/>
     </View>
      <View>
       <Image source={require('../../assets/images/nats.jpg')}  style={{width: 350, height: 350,borderRadius:12}}/>
     </View>
      <View>
       <Image source={require('../../assets/images/gominsi.jpg')}  style={{width: 350, height: 350,borderRadius:12}}/>
     </View>
      <View>
       <Image source={require('../../assets/images/suni.jpg')}  style={{width: 350, height: 350,borderRadius:12}}/>
     </View>
     <View>
       <Image source={require('../../assets/images/colet.jpg')}  style={{width: 350, height: 350,borderRadius:12}}/>
      </View>
    </View>
  
  </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})