// api/sendEmail.js
import emailjs from '@emailjs/nodejs'; // Node.js-compatible version of EmailJS

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { user_name, user_email, user_phone, message } = req.body;

  try {
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      { user_name, user_email, user_phone, message },
      process.env.EMAILJS_PUBLIC_KEY
    );

    res.status(200).json({ message: 'Email sent successfully', result });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
}
