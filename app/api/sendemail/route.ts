import {NextResponse} from "next/server";
import {Resend} from 'resend';

export async function POST(req: Request)
{
    const resend = new Resend(process.env.RESEND_API_KEY as string);
    
    try {
        const {data} = await resend.emails.send({
            from: 'office@bucurieindar.org',
            to: 'office@bucurieindar.org',
            subject: 'Hello World',
            html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });
        
        return NextResponse.json(data);
    }
    catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Webhook handler failed" },
            { status: 500 },
        );
    }
}
