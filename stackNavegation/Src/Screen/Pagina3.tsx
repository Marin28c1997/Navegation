import React from 'react';
import {Alert, Text, View} from 'react-native';
import {styles} from '../theme/AppTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {Image, TouchableOpacity} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3 = ({navigation}: Props) => {
  const showAlert = () =>
    Alert.alert('Error', 'Por favor seleccione otra imagen');
  return (
    <View style={styles.globalMargins}>
      <Image style={styles.logo} source={require('../image/SDN.png')} />
      <Text style={styles.titulo}>
        Por favor seleccione la imagen que más represente la palabra
        <Text style={styles.palabra}>"PROLONGAR"</Text>
      </Text>
      <View style={styles.v1}>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen1} source={require('../image/8.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen2} source={require('../image/7.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.v2}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Gana 1000 Puntos')}>
          <Image
            style={styles.imagen3}
            source={require('../image/Prolongar.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showAlert()}>
          <Image style={styles.imagen4} source={require('../image/9.jpeg')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
