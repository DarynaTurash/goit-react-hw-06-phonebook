import { ListContainer, StyledList, Contact, Name, ButtonDelete, Number } from "./contactList.styled";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/contactSlice";
import { getVisibleContacts } from "redux/selectors";


export const ContactList = () => {
    const dispatch = useDispatch();
    const visibleContacts = useSelector(getVisibleContacts);

    return (
        <ListContainer>
            <StyledList>
            {visibleContacts.map(contact => <Contact key={contact.id}>
                    <Name>{contact.name}</Name>
                    <Number>{contact.number}</Number>
                    <ButtonDelete type='button' onClick={() => dispatch(deleteContact(contact.id))}>Delete</ButtonDelete>
                </Contact>)}
            </StyledList>
        </ListContainer>
    )
};

