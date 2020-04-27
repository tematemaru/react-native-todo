import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import configureStore from './store/store';

import InputForm from './components/InputForm/InputForm';
import TodoList from './components/TodoList/TodoList';

const store = configureStore()
const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
      <Container>
        <InputForm />
        <TodoList navigation={navigation} />
      </Container>
  );
}

const SingleTodoScreen = ({ route, navigation }) => {
  const { itemId } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Single Todo Screen ${itemId}`}</Text>
    </View>
  );
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store = { store }>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ToDo" component={SingleTodoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const Container = styled.View`
    flex: 1;
    background-color: papayawhip;
`;

