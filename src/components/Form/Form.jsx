import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { ButtonSbm, FormContainer, InputStyle, LabelCont } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const newObject = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.props.addName(newObject);

    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <LabelCont>
          Name: &nbsp;
          <InputStyle
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            name="name"
            required
          />
        </LabelCont>
        <LabelCont>
          Number: &nbsp;
          <InputStyle
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </LabelCont>

        <ButtonSbm>Add contact</ButtonSbm>
      </FormContainer>
    );
  }
}
