import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, ViewComponent } from 'react-native';
import api from './src/styles/services/api';

import styles from './src/styles/styles';

export default function App() {

  /*const dados = [
    {cod: 1, desc: 'Iphone XS MAX 256Gb'},
    {cod: 2, desc: 'Iphone 7 128Gb'},
    {cod: 3, desc: 'Galaxy S20 256Gb'},
    {cod: 4, desc: 'Galaxy S10 128Gb'},
    {cod: 5, desc: 'Iphone XS 256Gb'},
  ]*/

  const [ prodsDados, setProdDados ] = useState([  ]);

  async function loadDados(){
    const response = await api.get('produtos');
    setProdDados(response.data);
  };

  useEffect(()=>{
    loadDados();
  },[  ]);

  return (
    <View style={styles.container}>
      <Text style={ styles.title }>Flat List</Text>
      <StatusBar style="auto" />

    <FlatList
      style = { styles.list }
      data = { prodsDados }
      keyExtractor = { prodsDados => String(prodsDados.cod) }
      showsVerticalScrollIndicator = { false }
      renderItem = {({item: prodsDados}) => (
        <View style={ styles.itemList }>
          <Text style={styles.index}>Código</Text>
          <Text>{prodsDados.cod}</Text>

          <Text style={styles.index}>Nome</Text>
          <Text>{prodsDados.nome}</Text>

          <Text style={styles.index}>Descrição</Text>
          <Text>{prodsDados.descri}</Text>

          <Text style={styles.index}>Quantidade</Text>
          <Text>{prodsDados.qtda}</Text>

          <Text style={styles.index}>Fabricante</Text>
          <Text>{prodsDados.fabricante}</Text>

          <Text style={styles.index}>Data/Hora</Text>
          <Text>{prodsDados.datahora}</Text>
        </View>
      )}
    />


    </View>
  );
}


