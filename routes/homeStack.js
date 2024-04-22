import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';



const screens = {
    Home: {
        screen: Home,
    },
    ReviewDetails:{
        screen: ReviewDetails
    }
}
const HomeStack = createNativeStackNavigator(screens);

export default NavigationContainer(HomeStack);