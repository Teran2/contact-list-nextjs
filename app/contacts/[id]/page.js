'use client';
import Link from "next/link";
import { useParams } from "next/navigation";
import { ContactAPI } from "@/app/data/contactsAPI";

export default function ContactInfo() {
  const {id} = useParams();
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
        <h1>Test</h1>
        <Link href='/contacts'>Home</Link>
      </div>
    </main>
  );
}