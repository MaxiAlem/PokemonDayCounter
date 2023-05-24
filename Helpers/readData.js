import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'DATES_KEY' 

const readData = async ()=>{


    try {
        const datesSaved = await AsyncStorage.getItem(STORAGE_KEY);
        const d = datesSaved !== null ? JSON.parse(datesSaved) : [];
        return d
    } catch (e) {
        alert('failed to fecth dates from storage')
    }
}

export default readData