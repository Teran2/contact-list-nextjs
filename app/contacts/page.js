'use client';
import { useState } from "react";
import { ContactAPI } from "../data/contactsAPI";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Contact() {
  const [allContacts, _] = useState(ContactAPI.all());

    return (
    <Container className="contacts-div">
        <Row>
         <Col>Profile Pic</Col>
         <Col>Name</Col>
         <Col>Email</Col>
         <Col>Phone</Col>
       </Row>
       {allContacts.map((c) => (
          <Row className="contacts-list" key={c.uniqueId}>
         <Col>
           <img src={c.image} />
         </Col>
          <Col>
          <Link href={`/contacts/${c.uniqueId}`}>
            <Col>{c.name}</Col>
         </Link>
         </Col>
          <Col>{c.email}</Col>
          <Col>{c.phoneNumber}</Col>
         {/* <Col>{ contact.edit }</Col> */}
         {/* Add editing feature */}
       </Row>
       ))}
       <Link href="/">Home</Link>
   </Container>
  );
}