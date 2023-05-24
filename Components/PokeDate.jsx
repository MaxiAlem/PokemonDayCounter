import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState,useEffect } from 'react'
import { getPokemon } from '../Helpers/api'
import styles from '../Helpers/styles';

const pokeDate = ({name,date,id,onDelete}) => {
    const [pName,setPName] = useState('');
    const [sprite,setSprite] = useState('..\pokeball.png')//agregar imagen predef de cargga
   
    const today = new Date()
    const selDate = new Date(date) ///convertimos la fecha sacada con calendar a formato fecha
   const dif = Math.round((today.getTime() - selDate.getTime())/ 1000 / 60 / 60 / 24)

   const fetchPokemonData = async () => {
    const data = await getPokemon(dif);
    setPName(data.name)
    setSprite(data.sprite)
  };
  useEffect(() => {
      fetchPokemonData()
    }, [])
    
  useEffect(() => {
    fetchPokemonData()
  }, [dif])
  
  
  return (
    <View style={styles.pokecard}>
        <TouchableOpacity onPress={() => onDelete(id)}>
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
       <Image source={{uri:sprite}} style={{ width: 100, height: 100 }} ></Image>
        <Text style={styles.text}>{name}</Text>
      {/* <Text>{selDate.toLocaleDateString()}</Text> */}
      <Text style={styles.text}>#{dif} {pName}</Text>
      

      {/* <Image source={{uri:mini}} style={{ width: 50, height: 50 }} ></Image> */}
    </View>
  )
}

export default pokeDate