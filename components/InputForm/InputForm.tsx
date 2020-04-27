import React from 'react';
import styled from 'styled-components';

import CustomButton from '../CustomButton/CustomButton';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/actions';

const placeholder = 'Add todo';

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (newTodo) => {
      dispatch(addTodo(newTodo))
    }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: placeholder };
  }

  handleChangeText = (text: string) => {
    this.setState({text })
  }

  handleAddTodo = () => {
    this.props.add(this.state.text);
    this.setState({text: placeholder });
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.todos);
    
  }

  render() {
    const { text } = this.state;
    return (
      <Container>
        <Input
          onChangeText={this.handleChangeText}
          value={text}
          onFocus={() => {
            if (text === placeholder) {
              this.setState({ text: ''})
            }
          }}
        />
        <Button>
          <CustomButton
            backgroundColor="palevioletred"
            textColor="white"
            text="Add"
            onPress={this.handleAddTodo}
          />
        </Button>
      </Container>
    );
  }
}

const Container = styled.View`
    flex: 1;
    flex-direction: row;
    background-color: papayawhip;
    justify-content: space-between;
    align-items: flex-start;
    height: 40px;
    padding: 0 12px;
    margin-top: 18px;
`;

const Input = styled.TextInput`
    font-size: 20px;
    font-weight: 500;
    color: palevioletred;
    border: 1px solid palevioletred;
    border-radius: 10px; 
    width: 75%;
    height: 40px;
    padding: 8px;
`;

const Button = styled.View`
  width: 20%;
  height: 40px;
`;