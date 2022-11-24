import React from 'react';
import {Alert, Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Pagina4 = ({navigation}: Props) => {
  const showAlert = () =>
    Alert.alert('Error', 'Por favor seleccione otra imagen');
  return (
    <View style={styles.globalMargins}>
      <Image style={styles.logo} source={require('../image/SDN.png')} />
      <Text style={styles.titulo}>
        Por favor seleccione la imagen que más represente la palabra
        <Text style={styles.palabra}>"PUNTUALIDAD"</Text>
      </Text>
      <View style={styles.v1}>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen1} source={require('../image/11.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen2} source={require('../image/10.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen3} source={require('../image/10.jpg')} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TOTAL DE PUNTOS GANADOS: 1000')}>
          <Image
            style={styles.imagen4}
            source={require('../image/Puntualidad.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
