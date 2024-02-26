import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server"; //NextResponse is an API in Next. js that allows you to work with responses in Middleware. It provides methods for redirecting requests, rewriting responses, setting headers, cookies, etc.

export async function POST(req) {
  try {
    console.log("POST RAN");
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData); //.create is a mongoose function

    return NextResponse.json({ message: "Ticket Succesfull" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
