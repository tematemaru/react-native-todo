import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Button } from 'react-native';

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     add: (newTodo) => {
//       dispatch(addTodo(newTodo))
//     }
//   }
// }

@connect(mapStateToProps, null)
export default class TodoList extends React.Component {
  render() {
    return (
      <ListContainer>
        <List
          data={this.props.todos}
          renderItem={({item, index, separators}) => {
            console.log(item.value);
            
            return (
              <Todo>
                <Button
                  title={item.value}
                  onPress={() => this.props.navigation.navigate('ToDo', {
                    itemId: item.key,
                  })}
                />
              </Todo>

            )
          }}
        />
      </ListContainer>
    );
  }
}

const ListContainer = styled.View`
    width: 100%;
    height: 90%;
    align-items: flex-start;
`;

const List = styled.FlatList`
    width: 100%;
`;

const Todo = styled.View`
    width: 100%;
    padding: 12px;
`;