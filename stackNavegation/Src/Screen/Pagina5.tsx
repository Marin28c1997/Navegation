import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Pagina5 = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargins}>
      <Text style={styles.frase}>FELICIDADES ACABAS DE GANAR</Text>
      <Image style={styles.moneda} source={require('../image/moneda.png')} />
      <Text style={styles.frase}>+</Text>
      <Text style={styles.frases}>1000 puntos</Text>
      <Image style={styles.imagen5} source={require('../image/winner.gif')} />
      <TouchableOpacity style={styles.boton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.brs}>Registrarse</Text>
          </TouchableOpacity>
      <Text style={styles.copy}>Copyright</Text>
    </View>
  );
};
