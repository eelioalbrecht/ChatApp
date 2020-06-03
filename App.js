import React from 'react';
import Main from './Components/Main';
import Chat from './Components/Chat';
import { createStackNavigator } from 'react-navigation';

const navigator = createStackNavigator({
  Main,
  Chat,
});

export default navigator