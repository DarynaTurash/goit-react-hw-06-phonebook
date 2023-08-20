import React from 'react';
import { ContactList } from './contactList/contactList';
import { ContactForm } from './contactForm/contactForm';
import { Layout } from './layout/layout';
import { Filter } from './filter/filter';


// const LS_KEY = "contacts-phonebook";

export const App = () => {

  
// useEffect(() => {
//     const contacts = localStorage.getItem(LS_KEY);
//     if(contacts && Array.isArray(JSON.parse(contacts)) && JSON.parse(contacts).length > 0) {
//       setContacts(JSON.parse(contacts));
//     }
// }, []);

// useEffect(() => {
//     localStorage.setItem(LS_KEY, JSON.stringify(contacts));
//   }, [contacts])






return (
    <Layout>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />
    <ContactList />
    </Layout>
    );
}
