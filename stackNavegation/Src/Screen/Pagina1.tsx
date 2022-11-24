import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Alert, Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {Image, TouchableOpacity} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1 = ({navigation}: Props) => {
  const showAlert = () =>
    Alert.alert('Error', 'Por favor seleccione otra imagen');

  return (
    <View style={styles.globalMargins}>
      <Image style={styles.logo} source={require('../image/SDN.png')} />
      <Text style={styles.titulo}>
        Por favor seleccione la imagen que más represente la palabra
        <Text style={styles.palabra}>"DESORDEN"</Text>
      </Text>
      <View style={styles.v1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Gana 500 Puntos')}>
          <Image
            style={styles.imagen1}
            source={require('../image/desorden.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen2} source={require('../image/1.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen3} source={require('../image/2.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen4} source={require('../image/3.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
