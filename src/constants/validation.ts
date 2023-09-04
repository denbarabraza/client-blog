import * as yup from 'yup';

export const newsLetterFooterSchema = yup
  .object({
    email: yup
      .string()
      .required('No email provided')
      .email('Incorrect email')
      .matches(
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
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Incorrect email',
      ),
    fullName: yup.string().required('Full Name is required'),
    query: yup.string().required('Query is required'),
    message: yup.string().required('Message is required'),
  })
  .required();
