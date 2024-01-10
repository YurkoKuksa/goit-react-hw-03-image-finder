import React from 'react';
import {
  ButtonSbm,
  List,
  ParaghNumber,
  Paragraph,
} from './ContactsList.styled';

export const ContactsList = ({ filterNames, onDeleteUser }) => {
  return (
    <ul>
      {filterNames.map(item => (
        <List key={item.id} name={filterNames}>
          <Paragraph>{item.name}:&nbsp; </Paragraph>
          <ParaghNumber> {item.number} &nbsp;</ParaghNumber>
          <ButtonSbm onClick={() => onDeleteUser(item.id)} type="button">
            Delete
          </ButtonSbm>
        </List>
      ))}
    </ul>
  );
};
