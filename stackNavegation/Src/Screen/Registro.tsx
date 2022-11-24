import { StackScreenProps } from '@react-navigation/stack';
import React, {useState} from 'react';
import { Text, View, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../theme/AppTheme';

interface Props extends StackScreenProps<any, any> {}

export const Registro = ({navigation}: Props) => {

  const [showPassword, {/*sethowPassword*/}] = useState(false);
  return (
    <View>
       <TouchableOpacity style={styles.button1}>
          <Image
            style={styles.googles}
            source={require('../image/google.png')}
          />
          <Text style={{color: '#9c9c9c'}}> Sign in with Google </Text>
        </TouchableOpacity>
        <Text style = {styles.copy}>------ OR ------</Text>
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
                <TextInput
          style={styles.input}
          placeholder={'Contraseña'}
          selectionColor="red"
          secureTextEntry={!showPassword}
        />
        
      </View>
      <View>
        <TouchableOpacity style={styles.boton}
          //onPress={() => navigation.navigate('Login')}
          >
          <Text style={styles.brs}>Registrarse</Text>
          </TouchableOpacity>
      <Text style={styles.copy}>Copyright</Text>
      </View>
    </View>
  );
};
