import {
  Grid, Typography, TextField, Button,
} from '@mui/material';
import { useState } from 'react';
import './styles.scss';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setSubmitting(true);
      setError('');
      const response = await axios.post('http://localhost:3000/send-email', formData);
      console.log(response.data); // Handle the response as needed
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setError('Error sending message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography fontSize={12} gutterBottom fontFamily="Inter">
            I&apos;d love to hear from you, so don&apos;t hesitate to drop me a line!
            <br />
            En français ou en anglais, 用汉字给我写邮电也行!
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
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Grid>
        {success && (
          <Grid item xs={12}>
            <Typography variant="success">Message sent successfully!</Typography>
          </Grid>
        )}
        {error && (
          <Grid item xs={12}>
            <Typography variant="error">{error}</Typography>
          </Grid>
        )}
      </Grid>
    </form>
  );
}

export default ContactForm;
