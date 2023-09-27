import React from 'react';
import {
  TextField,
  Button,
} from '@mui/material';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

interface ContactFormProps {
  // Define any props your component might receive here
  'SERVICE_ID': string,
  'TEMPLATE_ID': string,
  'USER_ID': string
}

function ContactForm(props: ContactFormProps) {
  const { SERVICE_ID, TEMPLATE_ID, USER_ID } = props; // Define these variables

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        });
      });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <TextField
        id="form-input-control-email"
        label="Email"
        name="user_email"
        placeholder="Email…"
        required
        // You may need to add more props here
      />
      <TextField
        id="form-input-control-last-name"
        label="Name"
        name="user_name"
        placeholder="Name…"
        required
        // You may need to add more props here
      />
      <TextField
        id="form-textarea-control-opinion"
        label="Message"
        name="user_message"
        placeholder="Message…"
        required
        // You may need to add more props here
      />
      <Button type="submit" color="primary">Submit</Button>
    </form>
  );
}

export default ContactForm;
