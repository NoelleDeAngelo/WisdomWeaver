import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req) {
  const body = await req.json();
  try {
    const {data, error}= await resend.emails.send({
      from: "araceli@wisdomweavercoaching.com",
      to: ["araceli@wisdomweavercoaching.com"],
      reply_to: body.email.toString(),
      subject: "Message from Contact Us Form",
      text: `Email from: ${body.email} , Name: ${body.firstName} ${body.lastName} They said: ${body.message}`,
    });
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
};

