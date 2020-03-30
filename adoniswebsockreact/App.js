/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
  View,
  Text
} from 'react-native';
import './services/websock';
import WS from '@adonisjs/websocket-client';
import axios from 'axios';
const App = () => {

  useEffect(() => {
    subscribeInWebsocket();
  }, [])

  async function subscribeInWebsocket() {
    
    
    const url = "ws://d3bfbf28.ngrok.io";
    const ws = WS(url);

    await ws.connect();
    await ws.subscribe('chat');
    const api = await axios.get('http://d3bfbf28.ngrok.io');
    if(api.data) {
      console.log(api.data);
    }
  }


  return (
    <>
      <View>
        <Text>Ola mundo</Text>
      </View>
    </>
  );
};

export default App;
