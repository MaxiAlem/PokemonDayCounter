import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../Helpers/styles'
import readData from '../Helpers/readData';
import PokeDate from '../Components/PokeDate';



const STORAGE_KEY = 'DATES_KEY';

const Home = ({onAddItem}) => {
  const [datesList, setDateList] = useState([])//state para guardar 
 
  
  const cleanData =async ()=>{
    try {
      setDateList([]) //vaciamos el state
      //await AsyncStorage.removeItem(STORAGE_KEY )
      const k = await AsyncStorage.getAllKeys()
      const filteredk = k.filter(k=>k.includes(STORAGE_KEY))
      await AsyncStorage.multiRemove(filteredk)
    } catch (error) {
      console.log('error al vaciar el storage',error)
    } 
  }
  const handleDeleteDate = async (id) => {
    //eliminamos de Datelist
    setDateList((prevdatelist)=>prevdatelist.filter((d)=>d.id !==id));
    //update en Async
    const updateData = datesList.filter((d)=>d.id !==id);
    await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify(updateData))
  };



  useEffect(() => {
    readData().then((data)=>{
      setDateList(data)
      });

  }, [])//hook cuando carga home, campeamos readData y seteamos DateList
  

  return (
    <View style={{flex:1, marginTop:"10%", alignItems:'center'}}>
      <Text style={[styles.text, styles.title]}>Home</Text>
      <Text style={styles.text}>tap pokeball to add a new date</Text>
      <TouchableOpacity style={styles.btn} onPress={onAddItem}>
       
        <View style={styles.imgcontainer}>
         <Image  
          style={styles.pokeballbtn}source={require('../assets/pokeball.png')}
          resizeMode="cover"/>
          </View>
      </TouchableOpacity>
      <View style={{
        flexDirection:'row',
      flexWrap: 'wrap'}}>

      
      {datesList.length <= 0?(
        <>
        <Text style={styles.text}>no, no hay nada aun</Text>
         
          
        
        </>
          
          ):(
          datesList.map(date=>(
              <PokeDate 
              key={date.id} 
              name={date.name}
              date={date.date}
              id={date.id}
              onDelete={handleDeleteDate}
            />
            ))
          )}
      </View>
<TouchableOpacity style={[styles.btn,{ marginTop:'5%',padding:'3%'}]}  onPress={cleanData}>
        <Text style={styles.text}>ERASE all data</Text>
      </TouchableOpacity>
    

  
    </View>
  )
}

export default Home