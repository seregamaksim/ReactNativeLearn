import React, { useEffect, useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';

import Item from '../components/Item';
import { selectors } from '../ducks/ducks';

export default function Home({ route }) {
  const data = useSelector(selectors.users.selectUsers);
  console.log('route', route);
  const renderItem = ({ item }) => <Item data={item} />;
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={route.params.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          route.params.setModalVisible(!route.params.modalVisible);
        }}>
        <View style={styles.centeredView}>
          {/* <Button title="test" onPress={() => console.log('click')}></Button> */}
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>
                route.params.setModalVisible(!route.params.modalVisible)
              }>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
            {/* <Text style={styles.modalText}>Hello World!</Text> */}
          </View>
        </View>
      </Modal>
      <List
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
}

const List = styled.FlatList`
  flex: 1;
  background-color: #fff;
  padding-top: 15px;
  padding: 15px;
`;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 10,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
