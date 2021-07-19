import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';

export default function TodoItem({ data }) {
  const [todoToggle, setTodoToggle] = useState(data.completed);
  return (
    <ItemWrap>
      <StyledCheckbox
        disabled={false}
        value={todoToggle}
        boxType="square"
        lineWidth={1}
        tintColor="#514D47"
        onTintColor="#424E75"
        onCheckColor="#514D47"
        animationDuration={0.3}
        onValueChange={newValue => setTodoToggle(newValue)}
      />
      <ItemText completed={todoToggle} numberOfLines={1} ellipsizeMode="tail">
        {data.title}
      </ItemText>
    </ItemWrap>
  );
}
const ItemWrap = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 5px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
`;
const ItemText = styled.Text`
  display: flex;
  width: 200px;
  font-size: 18px;
  text-decoration: ${props => props.completed && 'line-through'};
`;

const StyledCheckbox = styled(CheckBox)`
  margin-right: 15px;
`;
