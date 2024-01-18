import React, { Component } from 'react';
import { ModalStyle, Overlay } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickOnBackdrop = e => {
    console.log(e.target);
    if (e.currentTarget === e.target) {
      this.props.close();
    }
  };

  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.close();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClickOnBackdrop}>
        <ModalStyle>{this.props.children}</ModalStyle>
      </Overlay>
    );
  }
}

export default Modal;
