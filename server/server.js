const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const port = 4000;

// Configure multer to handle file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage });

// API endpoint for sending a PDF file via email
app.post('/api/pdf_send', upload.single('pdf'), (req, res) => {
  // Get the uploaded PDF file from req.file.buffer
  const pdfBuffer = req.file.buffer;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'alan19walker1997@gmail.com', // Replace with your Gmail email address
      pass: 'Akshay19*' // Replace with your Gmail password
    }
  });

  // Prepare the email message
  const mailOptions = {
    from: 'alan19walker1997@gmail.com', // Replace with your Gmail email address
    to: 'akshay.panchalhp@gmail.com', // Replace with the recipient's email address
    subject: 'Sending a PDF via email',
    text: 'Please find the attached PDF file.',
    attachments: [
      {
        filename: 'Requirements.pdf',
        content: pdfBuffer
      }
    ]
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
