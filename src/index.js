import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

export default function Valores() {


    //variaveis que recebem os dados informados 
    const [alc, setalc] = useState(null)        //valor do alcool
    const [gas, setgas] = useState(null)        //valor da gasolina
    const [consA, setconsA] = useState(null)    //valor da consumo alcool
    const [consG, setconsG] = useState(null)    //valor da consumo gasolina

    //variaveis para armazenar o calculo primairo consumo/valor combustivel
    const [valorA, setvalorA] = useState(null)
    const [valorG, setValorB] = useState(null)

    //função para calcular os gasolina 
    function calcula(){

        valorA = ((consA/alc).toFixed(2)) 
        valorG = ((consG/gas).toFixed(2))
        
        if(valorA > valorG){
            <Text>Coloque Álcool</Text>
        }
        else{
            if(valorA < valorG){
                <Text>Coloque Gasolina</Text>
            }
            else{
                if(valorA == valorG){
                    <Text>Coloque qualquer um</Text>
                }
                else{
                    <Text>ERRO no calculo</Text>
                }                
            }
        }
        setconsA(null);
        setconsG(null);
        setalc(null);
        setgas(null);
        setvalorA(null);
        setValorB(null);
    }

  return (
    <View>
      <Text>Entrada de valores</Text>

      <Text>Digite o valor da Gasolina:</Text>
      <TextInput
        onChangeText = {setgas}
        value = {gas}
        placeholder = "Ex: 7.50" 
        keyboardType = "numeric"
      />

      <Text>Digite o valor do Álcool:</Text>
      <TextInput
         onChangeText = {setalc}
         value = {alc}
         placeholder = "Ex: 5.50" 
         keyboardType = "numeric"
      />

      <Text>Digite o consumo do carro usando Gasolina:</Text>
      <TextInput
         onChangeText = {setconsA}
         value = {consA}
         placeholder = "Ex: 10" 
         keyboardType = "numeric"
      />

      <Text>Digite o consumo carro usando Álcool:</Text>
      <TextInput
          onChangeText = {setconsG}
          value = {consG}
          placeholder = "Ex: 7" 
          keyboardType = "numeric"
      />

      <Button
        onPress = {calcula}
        title = "Realizar Calculo"    
      ></Button>

    </View>
  );
}