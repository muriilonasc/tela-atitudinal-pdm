import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import user from './assets/userr.png'
import netuno from './assets/neptune4.png'
import plutao from './assets/pluto++.png'


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.textHeader} >Lets Explore</Text>
        <Image source={user}/>
      </View>
      <View style={styles.header2}>
      <Text style={styles.cardTextsub}>The mily my fallery</Text>
      </View>
      <View style={styles.most}>
        <Text style={styles.mostText}>Most Popular → </Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.card}>
        <View style={styles.cardHead}>
          <View/>
          <Image source={plutao}/>
        </View>
        <View>
          <Text style={styles.cardText}>Pluto</Text>
          <Text style={styles.cardTextsub}>The minor planet</Text>
          <View/>
        </View>
      </View>
      <View style={styles.card2}>
      <View style={styles.cardHead}>
          <View/>
          <Image source={netuno}/>
          </View>
          <View>
          <Text style={styles.cardText}>Neptune</Text>
          <Text style={styles.cardTextsub}>Light </Text>
        </View>
      </View>
      </ScrollView>
      <View style={styles.yuumayFooter}>
        <Text style={styles.youmayText}>you may also like  → </Text>
      </View>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
      <View style={styles.footerCard}></View>
      <View style={styles.footerCard2}></View>
      <View style={styles.footerCard3}></View>
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181638',
    alignItems: 'center',
    paddingHorizontal: 20,
    
  },
  header: {
    width:"100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 60
  },
  header2: {
    width:"100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  most: {
    width:"100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    

  },
  mostText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700"
  },
  yuumayFooter:{
    width:"100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",

  },
  youmayText:{
    color: "#fff",
    fontSize: 20,
    fontWeight: "700"
  },

  textHeader : {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900"
    
  },
  cardTextsub: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500"

  },
  textcards : {
    width: "100%",
    color: "#fff",
    fontSize: 22,
  },
  card : {
    width:"40%",
    height:290,
    backgroundColor: "#F8A52A",
    borderRadius: 30,
    marginBottom: 20,
    padding: 20,
    marginLeft: 10

  },
  card2:{
    width:"40%",
    height:290,
    backgroundColor: "#6F6FF5",
    borderRadius: 30,
    marginBottom: 20,
    padding: 20,
    marginLeft: 10,
    
  },
  cardHead : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700"
  },
  footerCard: {
    width: 130,
    height: 160,
    backgroundColor: "#6FF5BC",
    borderRadius: 20,
  }, 
  footerCard2: {
    width: 130,
    height: 160,
    backgroundColor: "#8F8C7F",
    borderRadius: 20,
  },  
  footerCard3: {
    width: 130,
    height: 160,
    backgroundColor: "#EF7B25",
    borderRadius: 20,
  },   

});
 