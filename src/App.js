import 'react-native-gesture-handler';
import React, { useState } from 'react';
// import styled from 'styled-components/native';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Pressable,
  Modal,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './ducks/store';

import Home from './screens/Home';
import Profile from './screens/Profile';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            initialParams={{
              modalVisible: modalVisible,
              setModalVisible: setModalVisible,
            }}
            options={{
              title: 'My Desk',
              headerStyle: {
                borderBottomWidth: 1,
                borderBottomColor: '#E5E5E5',
              },
              headerRight: () => (
                <Pressable
                  onPress={() => setModalVisible(true)}
                  style={{ padding: 10 }}>
                  <Image
                    source={{
                      uri: 'https://image.flaticon.com/icons/png/512/1828/1828925.png',
                    }}
                    style={{ width: 16, height: 16 }}
                  />
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            initialParams={{
              modalVisible: modalVisible,
              setModalVisible: setModalVisible,
            }}
            options={{
              title: 'Test',

              // headerShown: false,
              headerRight: () => (
                <Pressable
                  onPress={() => console.log('gear')}
                  style={{ padding: 10 }}>
                  <Image
                    source={{
                      uri: 'https://image.flaticon.com/icons/png/512/40/40031.png',
                    }}
                    style={{ width: 24, height: 24 }}
                  />
                </Pressable>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
