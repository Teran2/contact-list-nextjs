'use client';
import { useState } from "react";
import { ContactAPI } from "../data/contactsAPI";
import Link from "next/link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  const [allContacts, _] = useState(ContactAPI.all());

    return (
    <div>
      <Row>
        <Col>Profile Pic</Col>
        <Col>Name</Col>
        <Col>Email</Col>
        <Col>Phone</Col>
      </Row>
      {allContacts.map((contact) => (
        <Row className="contacts-list" key={contact.id}>
        <Col>
          <img src={contact.image} />
        </Col>
        <Col>
        <Link href={`/contacts/${contact.id}`}>
          <Col>{contact.name}</Col>
        </Link>
        </Col>
        <Col>{contact.email}</Col>
        <Col>{contact.phoneNumber}</Col>
        {/* <Col>{ contact.edit }</Col> */} {/* Add editing feature */}
      </Row>
      ))}
    </div>
  );
}