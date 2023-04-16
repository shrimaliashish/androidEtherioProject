import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import Web3 from 'web3';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [trnxValue, setTrnxValue] = useState('value');
  const [toAddress, setToAddress] = useState('');
  const [txStatus, setTxStatus] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const onTrnxChange = (event: any) => {
    console.log(event);
    // setTrnx(event.target.value);
  };

  // line no. 40 or 54 is causing some error
  const handleSubmit = async () => {
    // try {
    //   const web3 = new Web3(Web3.givenProvider);
    //   const pk =
    //     '09b720bdd1d9e16bc5f62c11bf5c22f9818943324d2b36273d107d30c81d62f4';
    //   const to = '0x67115F1Bb37c33c7C3F761aA875b425990632B64';
    //   const tx = await web3.eth.accounts.signTransaction(
    //     {
    //       to: to,
    //       value: web3.utils.toWei('0.01'),
    //       gas: '2000000',
    //     },
    //     pk,
    //   );

    //   web3.eth.sendSignedTransaction(
    //     !tx.rawTransaction ? '' : tx.rawTransaction,
    //     function (error, hash) {
    //       if (!error) {
    //         console.log(
    //           '🎉 The hash of your transaction is: ',
    //           hash,
    //           "\n Check Alchemy's Mempool to view the status of your transaction!",
    //         );
    //       } else {
    //         console.log(
    //           '❗Something went wrong while submitting your transaction:',
    //           error,
    //         );
    //       }
    //     },
    //   );
    // } catch (err) {
    //   console.error(err);
    //   setTxStatus('Error');
    // }

    console.log('submitted');
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.centered}>
          <Text style={{fontSize: 28}}>{'Welcome To Our Portal'}</Text>
        </View>
        <View style={styles.cardContent}>
          <TextInput
            style={styles.input}
            value={trnxValue}
            onChangeText={setTrnxValue}
            placeholder="Transaction Value"
          />
          <TextInput
            style={styles.input}
            value={toAddress}
            onChangeText={setToAddress}
            placeholder="To Address"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text>Press Here</Text>
          </TouchableOpacity>

          <Text
            style={{marginTop: 5}}>{`Transaction Status: ${txStatus}`}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    marginTop: 5,
    height: 250,
    width: 380,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    color: 'white',
    alignItems: 'center',
    backgroundColor: '#0d9488',
    padding: 10,
  },
});

export default App;
