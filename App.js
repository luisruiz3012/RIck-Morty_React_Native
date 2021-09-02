import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, TextInput } from 'react-native';
import CharacterCard from './components/CharacterCard'

export default function App() {

  const [character, setCharacter] = useState([])
  const [search, setSearch] = useState("")

  const loadData = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json();
    setCharacter(data.results)
  }
  
  useEffect(() => {
    loadData()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
            <Image 
                source={require('./assets/logo.png')}
                style={styles.logo}
            />
            <TextInput
                style={styles.search}
                placeholder="Enter a character"
                placeholderTextColor="rgba(162, 162, 161, 0.58)"
                textAlign="center"
                onChangeText={text => setSearch(text)}
            />
        </View>
      <FlatList 
        style={styles.list}
        data={
          character.filter((char) => char.name.toLowerCase().includes(search) || char.name.toUpperCase().includes(search) || char.name.includes(search))
        }
        renderItem={({item}) => {
          return <CharacterCard character={item}/>
        }}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242e40',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '90%',
    padding: 10
  },
  header: {
    width: '100%',
    height: 80,
    padding: 15,
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
},
logo: {
    width: 150,
    height: 55
},
search: {
    width: '50%',
    borderBottomColor: 'rgba(162, 162, 161, 0.58)',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: 'white'
}
});
