// Barebone skeleton for contact info card

"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactAPI } from "../data/contactsAPI";

export default function ContactInfoCard() {
  const { id } = useParams();
  const contact = ContactAPI.get(parseInt(id, 10));
  // console.log({id});

  if (!contact) {
    return (
      <>
        <div>That contact was not found</div>
        <Link href='/'>Home</Link>
      </>
    );
  }

  return (
    <main>
      <div>
        <h1>Contact Info</h1>
        <Link href='/contacts'>Back</Link>
        <h2>{contact.name}</h2>
        <img src={contact.image}/>
        <h3>{contact.email}</h3>
        <h3>{contact.phoneNumber}</h3>
      </div>
    </main>
  );
}