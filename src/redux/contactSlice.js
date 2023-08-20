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
            },
        deleteContact: (state, action) => {
                return state.filter(contact => contact.id !== action.payload)   
            },
        filterContacts: (state, action) => {
                return state.filter(contact => contact.name.toLowerCase().includes(action.payload));
        }
        },
    });

export const { addContact, deleteContact, filterContacts } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;