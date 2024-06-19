const mailchimp = require("@mailchimp/mailchimp_marketing");
import { NextApiResponse, NextApiRequest } from "next";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: "us17",
})


export async function GET() {
return new Response('hi')
}


export async function POST(req) {
  const body= await req.json()
  console.log(body)
  return new Response('posted')
  }