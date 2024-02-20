import {NextResponse} from "next/server";
import {Resend} from 'resend';

export async function POST(req: Request)
{
    const resend = new Resend(process.env.RESEND_API_KEY as string);
    const body = await req.json();
    
    try {
        
        const {data} = await resend.emails.send({
            from: 'office@bucurieindar.ro',
            to: 'office@bucurieindar.ro',
            subject: `Mesaj de la ${body.name}, pe bucurieindar.org`,
            html: '<p>' + body.message + ' ---- ' + body.email + '</p>'
        });

        console.log('email sent');
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
