

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export default function App() {
  const [valorDe, setValorDe] = useState('');
  const [valorPor, setValorPor] = useState('');
  const [numParcelas, setNumParcelas] = useState('');
  const [valorCartao, setValorCartao] = useState('');
  const [observacao, setObservacao] = useState('');
  const [link, setLink] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [emojiDe, setEmojiDe] = useState('😫');
  const [emojiPor, setEmojiPor] = useState('😎');

function gerarMensagem() {
  const mensagem = `De ${valorDe} ${emojiDe}\n*Por ${valorPor}*${emojiPor}\n\nNo cartão: em até ${numParcelas}x ${valorCartao}\n\n📍${observacao}\n\n🛍️ compre aqui: `;
  setMensagem(
    <Text>
      {mensagem}
      <TouchableOpacity onPress={() => Linking.openURL(link)}>
        <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
          {link}
        </Text>
      </TouchableOpacity>
    </Text>
  );
}

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {' '}
        <Text style={{ marginRight: 10 }}>Emoji para "De":</Text>{' '}
        <TextInput
          placeholder="Emoji para 'De'"
          style={{
            height: 40,
            width: 100,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setEmojiDe(text)}
          value={emojiDe}
        />{' '}
      </View>{' '}
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {' '}
        <Text style={{ marginRight: 10 }}>Emoji para "Por":</Text>{' '}
        <TextInput
          placeholder="Emoji para 'Por'"
          style={{
            height: 40,
            width: 100,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
          }}
          onChangeText={(text) => setEmojiPor(text)}
          value={emojiPor}
        />{' '}
      </View>
      <TextInputMask
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$ ',
          suffixUnit: '',
        }}
        placeholder="Valor original"
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => setValorDe(text)}
        value={valorDe}
      />
      <TextInputMask
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$ ',
          suffixUnit: '',
        }}
        placeholder="Valor com desconto"
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => setValorPor(text)}
        value={valorPor}
      />
      <TextInput
        placeholder="Número de parcelas"
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => setNumParcelas(text)}
        value={numParcelas}
      />
      <TextInputMask
        type={'money'}
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$ ',
          suffixUnit: '',
        }}
        placeholder="Valor da parcela"
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => setValorCartao(text)}
        value={valorCartao}
      />
      <TextInput
        placeholder="Observação"
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => setObservacao(text)}
        value={observacao}
      />
      <TextInput
        placeholder="Link da loja"
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={(text) => setLink(text)}
        value={link}
      />
      <TouchableOpacity
        onPress={gerarMensagem}
        style={{ backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white' }}>Gerar mensagem</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
          Mensagem gerada:
        </Text>
        <Text style={{ marginTop: 10 }}>{mensagem}</Text>
      </View>
    </View>
  );
}
