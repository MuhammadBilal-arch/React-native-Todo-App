import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mian from '../screens/main';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen  name="todo" component={Mian} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
