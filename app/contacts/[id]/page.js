'use client';
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactAPI } from "@/app/data/contactsAPI";
import Container from "react-bootstrap/Container";

export default function ContactInfo() {
  const { id } = useParams();
  const contact = ContactAPI.get(parseInt(id, 10));

  if (!contact) {
    return (
      <Container className="contacs-div">
          <h2>That contact was not found</h2>
          <Link href='/'>Home</Link>
      </Container>
    );
  }

  return (
    <main>
      <Container>
        <h1>Contact Info</h1>
        <div>
          <Link href="/contacts">Back</Link>
          </div>
        <h1>
          {contact.name}
        </h1>
        <div className="contact-info">
          <img src={contact.image} />
        </div>
          <div>
          {contact.email}
          </div>
          <div>
          {contact.phoneNumber}
          </div>
      </Container>
    </main>
  );
}