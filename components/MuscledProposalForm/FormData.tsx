import { FormFieldProps } from "types/types";


export const FormData: Array<FormFieldProps> = [
  {
    name: "email_adress",
    label: "Work Email Adress",
    validation: {
      required: "This field is required",
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Enter a valid e-mail address",
      },
    },
  },
  {
    name: "first_last_name",
    label: "First and Last Name",
    validation: {
      required: "This field is required",
      pattern: {
        value: /^[A-Za-z\s]*$/,
        message: "Only letters are allowed",
      },
      minLength: {
        value: 2,
        message: "Name invalid too short",
      },
      maxLength: {
        value: 30,
        message: "Name invalid too long",
      },
    },
  },
  {
    name: "website",
    label: "Website",
    placeholder: "http://xyz.example.com",
    validation: {
      required: "This field is required",
      pattern: {
        value:
          /^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
        message: "Enter a valid url please",
      },
    },
  },
  {
    name: "company",
    label: "Company",
    validation: {
      required: "This field is required",
      maxLength: {
        value: 30,
        message: "Name invalid too long",
      },
    },
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "(000) 000-0000",
    validation: {
      required: "This field is required",
      pattern: {
        value: /^\d+$/,
        message: "Enter a valid number",
      },
      minLength: {
        value: 10,
        message: "Number must be 10 digits",
      },
      maxLength: {
        value: 10,
        message: "Number must be 10 digits",
      },
    },
  },
  {
    name: "comments",
    label: "Comments and Questions",
    multiline: {
      rows: 2,
      textAreaClassName: "w-full text-xl",
    },
    wrapperClassName: "mt-2",
    wrapperWidth: "w-[100%]",
  },
];
