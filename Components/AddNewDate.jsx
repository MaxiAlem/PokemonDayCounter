import { View, Text, Button, TouchableOpacity,StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useId, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarPicker from 'react-native-calendar-picker';
import uuid from 'react-native-uuid';

import styles from '../Helpers/styles';
import readData from '../Helpers/readData';
import { Dimensions } from 'react-native';


const STORAGE_KEY = 'DATES_KEY' //creamos una Key para desps cacharlos desde aca con los get
const AddNewDate = ({onGoBack}) => {
  const [datesList, setDateList] = useState([])//state para guardar
  const [dateName,setDateName] = useState('   Name this... ')
  const [selDate,setSelDate] = useState(today)
  const today = new Date()


  const handleSaveDate= ()=>{
    
    newDate()
    
    onGoBack()
  }
  const handleReturn=()=>{
    onGoBack()
  }
  const onDateChange = async (date)=>{
    const sdate = new Date(date)
    setSelDate(sdate)

  }

  const newDate = async()=>{
    if(dateName !== ''){
      //guardamos los values en un objeto
      const newDateObj = {
         id: uuid.v4(),
        name : dateName,
        date: selDate,
      };
      try {
        await AsyncStorage.setItem(STORAGE_KEY,JSON.stringify([...datesList, newDateObj]))
        //con spread lo metemos en la lista
        
        setDateList([...datesList,newDateObj]) //guardamos en el state
        setDateName('')//vaciamos el dateNAme
      } catch (e) {
        alert('Failed to save the data to the storage desde newDate')
      }
    }
  }
  const saveData=async()=>{
    try {
      await AsyncStorage.setItem('datesList',JSON.stringify(datesList))
      console.log('data saved succefully, la concha del mono')
    } catch (e) {
      alert('Failed to save the data to the storage desde SaveData')
    }
  }

  const {width} = Dimensions.get('window')
  useEffect(() => {
    readData().then((data)=>{
      setDateList(data)
    })
  }, [])//hook cuando carga home, campeamos readData y seteamos DateList
  
  useEffect(() => {
    saveData()
    
  }, [datesList])
  
  return (
    <View style={styles.calendarView}>
      <Text style={[styles.text,{fontSize:20}]}>Add New Date</Text>
      <TextInput style={[styles.tInput,]} value={dateName} onChangeText={setDateName} />
      <View >
        <CalendarPicker
          width={width*0.9}
          todayBackgroundColor="#159895"
          selectedDayColor="#1A5F7A"
          selectedDayTextColor="#FFFFFF"
          textStyle={{
          color:'white'
      }}
      dayTextStyle={{color: 'white'}}
         onDateChange={onDateChange}
        />
      </View>
      <View  style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={handleSaveDate} style={[styles.btn,{ marginTop:'5%',padding:'3%',width:'30%'}]}>
                <Text style={[styles.text]}>Add Date</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleReturn} style={[styles.btn,{ marginTop:'5%',padding:'3%',width:'30%'}]}>
                <Text style={[styles.text]}>Return</Text>
              </TouchableOpacity>

      </View>
      
    </View>
  )
}
export default AddNewDate