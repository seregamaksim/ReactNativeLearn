import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { selectors } from '../ducks/ducks';
import TodoItem from './TodoItem';

export default function PrayersList({ route }) {
  const userTodos = useSelector(
    selectors.todos.selectTodosByUserId(route.params.userId),
  );
  const [isShowCompletedItem, setIsShowCompletedItem] = useState(false);

  const notCompletedItem = userTodos.map(item => {
    if (item.completed !== true) {
      return <TodoItem data={item} />;
    }
  });
  const completedItem = userTodos.map(item => {
    if (item.completed === true) {
      return <TodoItem data={item} key={item.id} />;
    }
  });
  const renderNotCompletedItem = (
    <>
      {notCompletedItem}
      <StyledShowCompletedBtn
        onPress={() => setIsShowCompletedItem(!isShowCompletedItem)}>
        <StyledShowCompletedBtnText>{`${
          isShowCompletedItem ? 'Hide' : 'Show'
        } Answered Prayers`}</StyledShowCompletedBtnText>
      </StyledShowCompletedBtn>
    </>
  );
  const renderCompletedItem = <>{isShowCompletedItem && completedItem}</>;
  return (
    <StyledPrayersList
      data={userTodos}
      ListHeaderComponent={renderNotCompletedItem}
      ListFooterComponent={renderCompletedItem}
      ListHeaderComponentStyle={{ paddingBottom: 20 }}
      ListFooterComponentStyle={{ paddingBottom: 30 }}
    />
  );
}

const StyledPrayersList = styled.FlatList`
  display: flex;
  background-color: #fff;
  padding: 15px;
  /* margin-bottom: 50px; */
`;

const StyledShowCompletedBtn = styled.Pressable`
  padding: 8px 23px;
  background-color: #bfb393;
  border-radius: 15px;
  max-width: 215px;
  width: 100%;
  align-self: center;
`;

const StyledShowCompletedBtnText = styled.Text`
  color: #fff;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  text-align: center;
`;
