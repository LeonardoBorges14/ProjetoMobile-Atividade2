/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';


const Cabecalho = () => {
    return (
        <View style={estilos.containerCabecalho}>
            <Text style={estilos.texto}>Lighteria</Text>
            <View style={estilos.caixaSacola}>
                <Image style={estilos.imagem} source={require('../assets/img/icone-sacola.png')} />
            </View>
        </View>
    )
}
const estilos = StyleSheet.create({

    containerCabecalho: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    texto: {
        fontSize: 32,
        color: 'red',
    },
    imagem: {
        width: 45,
        height: 45,
        alignSelf: 'center',
        top: 5,
    },
    caixaSacola: {
        width: 55,
        height: 55,
        backgroundColor: 'white',
        borderRadius: 50,
    },
})

export default Cabecalho;