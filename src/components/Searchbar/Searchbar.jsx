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
        <SearchForm onSubmit={this.handleSubmit} autoFocus>
          <Button type="submit">
            <SpanLabel>
              {/* <svg width="48" height="48">
                <use href="../img/symbol-defs.svg#find"></use>
              </svg> */}

              <svg>
                <use href="../img/symbol-defs.svg#icon-find"></use>
              </svg>
            </SpanLabel>
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
