import React, {useState} from "react";
import {  View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";



export default function Home({navigation}) {
    // const navigation = useNavigation();
    // const pressHandler = () => {
    //      navigation.navigate('ReviewDetails');
    // }
    const [reviews, setReviews] = useState([
        { title:'Zelda, Breath of Fresh Air', rating: 5, body:'Lorem Ipsum', Key:'1'},
        
        { title:'Gotta Catch Them All (again)', rating: 4, body:'Lorem Ipsum', Key:'2'},
        
        { title:'Not So Final', rating: 3, body:'Lorem Ipsum', Key:'3'}
    ]);

    return(
        <View style={globalStyles.container}>
            {/* <Text style={globalStyles.titleText}>Home Screen</Text> */}
            {/* <Button title="go to review dets"  onPress={pressHandler}/> */}

            <FlatList
                data={reviews}
                renderItem={({item})=>{
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)}>
                            <Text style={globalStyles.titleText} >{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )


    
}


  
  

