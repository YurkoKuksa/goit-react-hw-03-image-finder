import React, { Component } from 'react';

import Logo from 'img/find.svg';

import { Button, Input, SearchForm, SearchbarStyle } from './Searchbar.styled';

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
        <SearchForm onSubmit={this.handleSubmit} autoFocus>
          <Button type="submit">
            <img src={Logo} alt="React Logo" />
          </Button>

          <Input
            type="text"
            autoComplete="off"
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

// <svg>
//   <use href="../img/symbol-defs.svg#icon-find"></use>
// </svg>;
