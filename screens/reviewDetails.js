import React from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({route}) {
    // const pressHandler=()=>{
    //     navigation.goBack();
    //     // navigation.pop('Home');
    // }

    
   
     
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{route.params.title}</Text>
            {/* <Button title="Back to Home" /> */}

           
        </View>
    )
}
