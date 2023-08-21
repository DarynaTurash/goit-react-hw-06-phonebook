import React from 'react';
import { ContactList } from './contactList/contactList';
import { ContactForm } from './contactForm/contactForm';
import { Layout } from './layout/layout';
import { Filter } from './filter/filter';


export const App = () => {

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
