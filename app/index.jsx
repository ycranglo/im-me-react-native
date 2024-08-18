import { Text, View,SafeAreaView,StatusBar,Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        alignItems: "center",
      }}
    >
      <View>
        <Image source={require('./../assets/images/me.jpg')}  style={{width: 350, height: 350,borderRadius:12}}/>
      </View>
      <Text style={{ fontSize: 40,paddingTop:5 }}>Hi, am ANGELO</Text>
      <View style={{ gap: 10, alignItems: 'center', paddingBottom:30}}>
        <Text style={{ fontSize: 15 }}>im developer 👍</Text>
      <Text style={{ fontSize: 15 }}>im not good at designing but im teachable 👍</Text>
        <Text style={{ fontSize: 15 }}>i know some tech stock but im not practicing it daily tho</Text>
      </View>
      <Link href='/Profile'>check my works done!( im clickable ehe)</Link>
    </SafeAreaView>
  );
}
