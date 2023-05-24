import { useState } from "react";
import { View, Text,StyleSheet, SafeAreaView } from "react-native";
import AddNewDate from "./Components/AddNewDate";
import Home from "./Screens/Home";
import styles from "./Helpers/styles";

export default function App() {

  const [showHome,setShowHome] =useState(true)
  
  const handleAddItem = () => {//go adddate
    setShowHome(false);
  }

  const handleGoBack = () => {//volver al home
    console.log('fecha agregada con exito!')
    setShowHome(true);
  }

  return (
    <SafeAreaView
      style={styles.app}
    >
     
      {showHome?(
        <Home onAddItem={handleAddItem}/>
      ):(
        <AddNewDate onGoBack={handleGoBack}/>
      )}
      
      
      
    </SafeAreaView>
  );
}

