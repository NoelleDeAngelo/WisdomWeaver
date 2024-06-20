const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require('md5')
import { NextApiResponse, NextApiRequest } from "next";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us17",
})

const listId = process.env.MAILCHIMP_LIST_ID;

export async function POST(req) {
  const body= await req.json()
  const subscribingUser = {
    email: body.email,
    hash: md5(body.email.toLowerCase().toString()),
  };
  const mailchimpResponse = await mailchimp.lists.setListMember(listId, subscribingUser.hash, {
    email_address: subscribingUser.email,
    status_if_new: "subscribed",
    status:'subscribed',
  });
  return new Response(mailchimpResponse.status)
  }

