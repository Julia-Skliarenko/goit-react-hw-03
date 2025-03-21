import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css"

const initialValues = {
id: "",
name: "",
number: "",
};

const ContactsSchema = Yup.object().shape({
name: Yup.string()
    .min(3, "This field must contain at least 3 characters!")
    .max(50, "This field must contain no more than 50 characters!")
    .required("This field is required."),
number: Yup.string()
    .matches(/^[+]?(\d+[-]\d+|\d+){3,50}$/, 'Invalid phone number')
    .required("This field is required."),
});

export default function ContactForm({ onAddContact }) {
const nameFieldId = useId();
const numberFieldId = useId();

const handleSubmit = (values, actions) => {
    onAddContact({ ...values, id: nanoid() });
    actions.resetForm();
};

return (
    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={ContactsSchema}
    >
        <Form className={css.formContainer}>
            <div className={css.field}>
        <label className={css.fieldName} htmlFor={nameFieldId}>
        Name
        </label>
        <Field className={css.input} name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />
            </div>

            <div className={css.field}>
        <label className={css.fieldName} htmlFor={numberFieldId}>
        Number
        </label>
        <Field className={css.input} name="number" id={numberFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />
            </div>
            
        <button className={css.button} type="submit">
        Add contact
        </button>
    </Form>
    </Formik>
);
};