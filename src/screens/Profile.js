import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DetailsScreen from './Detail';
import PrayersList from '../components/PrayersList';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';

const MaterialTab = createMaterialTopTabNavigator();

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <Animated.Text style={{ opacity }}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
export default function Profile({ route }) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: route.params.title });
  }, [navigation]);

  return (
    <MaterialTab.Navigator initialRouteName="Prayers List">
      <MaterialTab.Screen
        options={{ tabBarLabel: 'aw' }}
        name="Prayers List"
        component={PrayersList}
        initialParams={{ userId: route.params.userId }}
      />
      <MaterialTab.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{ userId: route.params.userId }}
      />
    </MaterialTab.Navigator>
  );
}
