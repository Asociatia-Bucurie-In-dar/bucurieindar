import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <office@bucurieindar.org>',
            to: ['office@bucurieindar.org'],
            subject: 'Hello world',
            text: 'Hello world',
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
