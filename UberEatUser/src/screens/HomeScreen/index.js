import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import {Restaurant} from '../../models'

export default function HomeScreen() {

    const [restaurants, setRestaurants] = useState([])

    // const fetchRestaurants = async ()=>{
    //     const result = await DataStore.query(Restaurant);
    //     setRestaurants(result)
    // }
    // useEffect(() => {
    //     fetchRestaurants()
    // }, [])

    useEffect(() => {
        // DataStore.query(Restaurant).then((response)=> setRestaurants(response)) or
        DataStore.query(Restaurant).then(setRestaurants)
    }, [])
    
    
    return (
        <View style={styles.container}>
            <FlatList
                data={restaurants}
                renderItem={({ item }) => < RestaurantItem restaurant={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        paddingVertical: 30
    }
});
