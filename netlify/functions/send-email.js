import { Resend } from 'resend';

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // Environment variables from Netlify UI
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

  if (!RESEND_API_KEY || !CONTACT_EMAIL) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Server configuration error.' }),
    };
  }

  const resend = new Resend(RESEND_API_KEY);
  
  try {
    const { name, email, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields.' }),
      };
    }

    await resend.emails.send({
      from: `Pankestudio Form <form@resend.dev>`, // Must be from a verified domain with Resend or `resend.dev`
      to: CONTACT_EMAIL,
      subject: `New Message from ${name} via pankestudio.com`,
      reply_to: email,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Thank you! Your message has been sent.' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email.' }),
    };
  }
};
