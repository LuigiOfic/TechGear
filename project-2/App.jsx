import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './app/screens/login.jsx'
import Cadastro from './app/screens/cadastro.jsx'
import Home from './app/screens/home.jsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login.jsx'>
        <Stack.Screen name='login.jsx' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='cadastro.jsx' component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name='home.jsx' component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
