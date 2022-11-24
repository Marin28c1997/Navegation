import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1} from '../Screen/Pagina1';
import {Pagina2} from '../Screen/Pagina2';
import {Pagina3} from '../Screen/Pagina3';
import {Pagina4} from '../Screen/Pagina4';
import {Pagina5} from '../Screen/Pagina5';
import {Registro} from '../Screen/Registro';
import {Login} from '../Screen/Login';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gana 250 Puntos" component={Pagina1} />
      <Stack.Screen name="Gana 500 Puntos" component={Pagina2} />
      <Stack.Screen name="Gana 750 Puntos" component={Pagina3} />
      <Stack.Screen name="Gana 1000 Puntos" component={Pagina4} />
      <Stack.Screen name="TOTAL DE PUNTOS GANADOS: 1000" component={Pagina5} />
      <Stack.Screen name="SDNotes" component={Registro} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
