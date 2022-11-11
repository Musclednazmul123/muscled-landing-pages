import { RegisterOptions } from "react-hook-form";

interface FormDataProps {
  name: string;
  label: string;
  validation?: RegisterOptions;
  placeholder?: string;
}

export const FormData: Array<FormDataProps> = [
  {
    name: "email_adress",
    label: "Work Email Adress",
    validation: { required: "This field is required" },
  },
  {
    name: "first_last_name",
    label: "First and Last Name",
  },
  {
    name: "website",
    label: "Website",
  },
  {
    name: "company",
    label: "Company",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "(000) 000-0000",
  },
  {
    name: "comments",
    label: "Comments and Questions",
  },
];
