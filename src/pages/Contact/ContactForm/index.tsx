import {
  Grid, Typography, TextField, Button,
} from '@mui/material';
import { useState } from 'react';
import './styles.scss';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here, e.g., send the data to a server or perform any desired action.
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Grid container spacing={2}>
        <Grid item xs={12}>

          <Typography fontSize={12} gutterBottom fontFamily="Inter">
            I&apos;d love to hear from you, so don&apos;t hesitate to drop me a line!
            <br />
            En français ou en anglais, 用汉字给我写邮电也行!
            {' '}

          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            onChange={handleChange}
            value={formData.name}
            required
            sx={{
              '& .MuiInputLabel-root': { color: '030303' },
              '&:hover .MuiInputLabel-root': { color: '#DA231B' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '030303' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#DA231B' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            value={formData.email}
            required
            sx={{
              '& .MuiInputLabel-root': { color: '030303' },
              '&:hover .MuiInputLabel-root': { color: '#DA231B' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '030303' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#DA231B' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            onChange={handleChange}
            value={formData.message}
            required
            sx={{
              '& .MuiInputLabel-root': { color: '030303' },
              '&:hover .MuiInputLabel-root': { color: '#DA231B' },
              '&:active .MuiInputLabel-root': { color: '#DA231B' },

              '& .MuiOutlinedInput-notchedOutline': { borderColor: '030303' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#DA231B' },
              '&:active .MuiOutlinedInput-notchedOutline': { borderColor: '#DA231B' },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#030303',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#DA231B',
                fontSize: 15,
                fontFamily: 'Inter',
              },
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ContactForm;
