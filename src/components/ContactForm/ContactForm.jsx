import { Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import CustomField from "../CustomField/CustomField";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    console.log("Form submitted with values:", values);

    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.username,
        phone: values.usernumber,
      })
    );
    actions.resetForm();
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(50, "Max 50 characters!")
      .required("Required"),

    usernumber: Yup.string()
      .min(3, "Too short!")
      .max(50, "Max 50 characters!")
      .required("Required"),
  });

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ username: "", usernumber: "" }}
      validationSchema={registerSchema}
    >
      <div className={s.wrapperContactForm}>
        <Form className={s.formContactForm}>
          <CustomField label="Name" name="username" />
          <CustomField label="Number" name="usernumber" />

          <button className={s.buttonContactForm} type="submit">
            Add contact
          </button>
        </Form>
      </div>
    </Formik>
  );
};

export default ContactForm;
