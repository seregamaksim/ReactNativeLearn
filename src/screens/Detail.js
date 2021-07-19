import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { selectors } from '../ducks/ducks';

export default function DetailsScreen({ navigation, route }) {
  const userInfo = useSelector(
    selectors.users.selectUserById(route.params.userId),
  );
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      {userInfo && (
        <>
          <Text>{userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </>
      )}

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
