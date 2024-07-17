import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req) {
  const body = await req.json();
  try {
    const {data, error}= await resend.emails.send({
      from: "araceli@wisdomweavercoaching.com",
      to: ["araceli@wisdomweavercoaching.com"],
      reply_to: body.email.toString(),
      subject: "Message from Contact Form",
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




// use to test email responses on client without sending actual email - add data.working = true or false to handleSubmit

/*export async function POST(req) {
  const body = await req.json();
  if (body.working) {
    return Response.json({ status: 200 });
  }
  return Response.json({}, { status: 500 });
};*/


