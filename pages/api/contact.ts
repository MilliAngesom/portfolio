import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // In a real application, you would send this data to an email service
        // like SendGrid, Mailgun, or simply log it if you have backend logs.
        console.log('Contact Form Submission:', { name, email, message });

        // Since this is a static export or serverless deployment, we'll simulate success.
        // Ensure you configure environment variables for real email sending.

        res.status(200).json({ status: 'success', message: 'Message received' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
