import { createSlice } from "@reduxjs/toolkit";


const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact: (state, action) => {
                const newContact = action.payload;
                const existContact = state.some(contact => contact.name.toLowerCase() === newContact.name.toLowerCase());

                if(existContact) {
                    alert(`${newContact.name} is already in contact`);
                    return state;
                } else {
                    state.push(newContact);
                };

                localStorage.setItem('contacts', JSON.stringify(state));
            },
        deleteContact: (state, action) => {
            const updatedState = state.filter(contact => contact.id !== action.payload);

            localStorage.setItem('contacts', JSON.stringify(updatedState));

            return updatedState; 
            },
        filterContacts: (state, action) => {
                return state.filter(contact => contact.name.toLowerCase().includes(action.payload));
        }
        },
    });

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;