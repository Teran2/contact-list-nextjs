'use client';
import { ContactAPI } from "../data/contactsAPI";
import Link from "next/link";
import Button from "react-bootstrap/Button";

export default function Contact() {
  // const { id } = useParams();
  // const contact = ContactAPI.get(parseInt(id, 10))

  // if (!contact) {

  // }

  return (
    <main>
      <div>Hello World</div>
      <Link href='/contacts/1'>
        <Button>GO</Button>
      </Link>
    </main>
  );
}