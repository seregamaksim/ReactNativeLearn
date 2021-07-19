import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { View } from 'react-native';

export default function Item({ data }) {
  const navigation = useNavigation();
  return (
    <View>
      <StyledPressable
        onPress={() =>
          navigation.navigate('Profile', {
            userId: data.id,
            title: data.name,
          })
        }>
        <StyledText>{data.name}</StyledText>
      </StyledPressable>
    </View>
  );
}

const StyledPressable = styled.Pressable`
  padding: 20px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;
const StyledText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
  color: #514d47;
`;
