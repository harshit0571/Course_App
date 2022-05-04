import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screen/home';
import Course from './src/screen/course';
import UserData from './src/screen/userdata';
import About from './src/screen/about';
import Contact from './src/screen/contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseDetails from './src/screen/coursedetails';



export default function App() {
  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>

      <Stack.Screen name="Home">
        {(props) => <Home {...props} name={'MyApp'} />}
      </Stack.Screen>

      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="UserData" component={UserData} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />

    </Stack.Navigator>
  </NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
