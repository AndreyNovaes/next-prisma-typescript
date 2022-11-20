import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';
import mg, {  AuthOptions } from 'nodemailer-mailgun-transport';

type auth = {
  auth: AuthOptions
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth: auth = {
    auth: {
      api_key: process.env.MAILGUN_API_KEY || '',
      domain: process.env.MAILGUN_DOMAIN,
    },
  };
  
  const nodemailerMailgun = nodemailer.createTransport(mg(auth));

  if(req.method === 'POST') {
    const destinationMail = 'andreynovaespro@gmail.com'

    const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: destinationMail,
    subject: `Message from ${name}`,
    text: message,
  };

  nodemailerMailgun.sendMail(mailOptions, function (err, info) {
    if (err) {
      res.status(500).json({ error: err });
    }
    else {
      res.status(200).json({ success: info });
    }
  }
  );
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
