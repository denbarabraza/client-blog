import * as yup from 'yup';

export const newsLetterFooterSchema = yup
  .object({
    email: yup
      .string()
      .required('No email provided')
      .email('Incorrect email')
      .matches(
        /*
          * This regular expression validates an email address based on the following conditions:
        1. The email address can be divided into two parts: the local part and the domain part.
        2. The local part can consist of alphanumeric characters, special characters (!#$%&'*+/=?^_`{|}~-), and dots (.) but cannot start or end with a dot.
        3. The domain part can consist of alphanumeric characters, hyphens (-), and dots (.) but must end with a valid top-level domain (e.g., .com, .org).
        4. The email address can also be enclosed in double quotes (") if it contains special characters or spaces within the local part.
        It can be used to ensure that an input string represents a valid email address.
          * */
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Incorrect email',
      ),
  })
  .required();

export const contactUsSchema = yup
  .object({
    email: yup
      .string()
      .required('No email provided')
      .email('Incorrect email')
      .matches(
        /*
          * This regular expression validates an email address based on the following conditions:
        1. The email address can be divided into two parts: the local part and the domain part.
        2. The local part can consist of alphanumeric characters, special characters (!#$%&'*+/=?^_`{|}~-), and dots (.) but cannot start or end with a dot.
        3. The domain part can consist of alphanumeric characters, hyphens (-), and dots (.) but must end with a valid top-level domain (e.g., .com, .org).
        4. The email address can also be enclosed in double quotes (") if it contains special characters or spaces within the local part.
        It can be used to ensure that an input string represents a valid email address.
          * */
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Incorrect email',
      ),
    fullName: yup.string().required('Full Name is required'),
    query: yup.string().required('Query is required'),
    message: yup.string().required('Message is required'),
  })
  .required();
