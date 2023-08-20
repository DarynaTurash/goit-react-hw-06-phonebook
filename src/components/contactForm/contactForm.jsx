import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Form, ErrorMessage, FormField, FieldInput, SubmitButton } from './contactForm.styled';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/contactSlice';



const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan'
      )
      .required('Name is required'),
      number: Yup.string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Phone number is required'),
  });

export const ContactForm = () => {
    const dispatch = useDispatch();
  

    return (
        <Formik initialValues={{
                    name: '', 
                    number: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                const newContact = { ...values, id: nanoid() };
                dispatch(addContact(newContact));
                actions.resetForm();
                }}>
        <Form>
        <FormField>
        Name
        <FieldInput type="text" name="name" placeholder="Jacob Nillson"  />
        <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
        Number
        <FieldInput type="tel" name="number" placeholder="11-22-33-44" />
        <ErrorMessage name="number" component="div" />
        </FormField>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
    );
};






