import React, { Component } from 'react';
import {
  Button,
  Input,
  SearchForm,
  SearchbarStyle,
  SpanLabel,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.search);
  };

  render() {
    return (
      <SearchbarStyle>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <SpanLabel class="button-label">Search</SpanLabel>
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            required
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}
export default Searchbar;
