import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function ReviewDetails({navigation}) {
    const pressHandler=()=>{
        navigation.goBack();
        // navigation.pop('Home');
    }
    return(
        <View style={styles.container}>
            <Text>ReviewDetails Screen</Text>
            <Button title="Back to Home" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:24,
        
    }
})