import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/AppTheme';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
//import Icon from 'react-native-vector-icons/FontAwesome';

interface Props extends StackScreenProps<any, any> {}

export const Login = ({navigation}: Props) => {
  const [showPassword, {/*sethowPassword*/}] = useState(false);
  return (
    <View style={styles.globalMargins}>
      <View>
        <Image style={styles.imagen} source={require('../image/SDN.png')} />
      </View>
      <Text style={styles.titulos}>Student Daily Notes</Text>
      <Text style={styles.parrafo}>¡Bienvenidos!</Text>
      <View>
        <TextInput
          style={styles.input}
          selectionColor="red"
          placeholder={'Correo Electrónico o Usuario'}
          textContentType={'emailAddress' || 'nickname'}
        />
        <TextInput
          style={styles.input}
          placeholder={'Contraseña'}
          selectionColor="red"
          secureTextEntry={!showPassword}
        />
{/*        <Icon
          name={showPassword ? 'eye' : 'eye-slash'}
          size={30}
          onPress={() => sethowPassword(!showPassword)}
          style={styles.eye}
        />
*/}
        <Text style={[styles.parrafo, styles.parrafo1]}>
          Olvidé la contraseña
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntxt}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{textAlign: 'center', padding: 8}}>
          O conectate usando
        </Text>
        <TouchableOpacity style={styles.button1}>
          <Image
            style={styles.googles}
            source={require('../image/google.png')}
          />
          <Text style={{color: '#9c9c9c'}}> Sign in with Google </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{textAlign: 'center', padding: 8}}>
          ¿Aún no tienes cuenta?
          <TouchableOpacity onPress={() => navigation.navigate('SDNotes')}>
            <Text style={styles.palabrasub}> Registrarse</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};
