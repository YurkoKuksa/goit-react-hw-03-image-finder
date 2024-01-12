import React, { Component } from 'react';
// import { HeaderTwo, MainContainer } from './App.styled';

// import { Form } from './Form/Form';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';
// import { toast } from 'react-toastify';

export class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
  // componentDidMount() {
  //   const parsedContacts = JSON.parse(localStorage.getItem('USERS_DATA'));
  //   if (parsedContacts?.length) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }
  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts.length !== this.state.contacts.length) {
  //     toast.info('Contact list was changed');
  //     localStorage.setItem('USERS_DATA', JSON.stringify(this.state.contacts));
  //   }
  // }
  // handleChange = e => {
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };
  // handleAddName = newObject => {
  //   const { contacts } = this.state;
  //   const isNameExists = contacts.some(
  //     contact => contact.name === newObject.name
  //   );
  //   if (isNameExists) {
  //     alert(
  //       `Contact with the name "${newObject.name}" already exists. Please choose a different name.`
  //     );
  //   } else {
  //     toast.success('The name added successfuly');
  //     this.setState(prevState => ({
  //       contacts: [...prevState.contacts, newObject],
  //     }));
  //   }
  // };
  // handleChangeFilterName = e => {
  //   this.setState({ filter: e.target.value });
  // };
  // getFilterData = () => {
  //   return this.state.contacts.filter(
  //     user =>
  //       user.name.toLowerCase().includes(this.state.filter.toLowerCase()) ||
  //       user.number.toLowerCase().includes(this.state.filter.toLowerCase())
  //   );
  // };
  // handleDelete = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(user => user.id !== id),
  //   }));
  // };
  // render() {
  //   const filterNames = this.getFilterData();
  //   return (
  //     <MainContainer>
  //       <HeaderTwo>Phonebook</HeaderTwo>
  //       <Form addName={this.handleAddName} />
  //       <HeaderTwo>Contacts</HeaderTwo>
  //       <Filter
  //         onChange={this.handleChangeFilterName}
  //         filter={this.state.filter}
  //       />
  //       <ContactsList
  //         filterNames={filterNames}
  //         onDeleteUser={this.handleDelete}
  //       />
  //     </MainContainer>
  //   );
  // }
}
