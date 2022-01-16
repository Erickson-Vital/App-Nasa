import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import axios from 'axios'


export default function Home() {
  const [planetas, setPlanetas] = useState([])

  useEffect(() => {
    axios.get("Sua API KEY").then((response) => {
      setPlanetas(response.data)
    });

  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: planetas?.url }} resizeMode="cover" style={styles.image}>
        <Text style={styles.textTitle}>{planetas?.title}</Text>
        <Text style={styles.textSub}>{planetas?.copyright}</Text>

        <Image style={styles.imageLogo} source={{ uri: planetas?.url }} />

        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.textDate}><Text style={{fontWeight: 'bold'}}>Data: </Text>{planetas?.date}</Text>
          <Text style={styles.textDesc}><Text style={{fontWeight: 'bold', fontSize: 16}}>Descrição: </Text>{planetas?.explanation}</Text>
        </View>


      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  },
  imageLogo: {
    width: 250,
    height: 250,
    borderRadius: 150,
    marginTop: 10,
  },
  textTitle: {
    color: "white",
    fontSize: 30,
    textAlign: 'center'
  },
  textSub: {
    color: "white",
    fontSize: 25,
  },
  textDate: {
    color: "white",
    fontSize: 20,
  },
  textDesc: {
    color: "white",
    fontSize: 15,
    margin: 15,
  },

});
