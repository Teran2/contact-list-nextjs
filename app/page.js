"use client";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Contact from './contacts/page';
import { ContactAPI } from './data/contactsAPI';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Row from 'react-bootstrap/Row';
import { SearchBar } from './components/searchBar';
import { useState } from 'react';

export default function Home() {
  const [searchResult, setSearchResult] = useState(null);

  const contactSearch = (term) => {
    const result = ContactAPI.all().filter(contact =>
      contact.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResult(result.length > 0 ? result[0] : null);

    if (term === '') {
      setSearchResult(null);
    }
  }

  return (
    <>
      <Container>
          <Col className='page-header'>
            <h1 className='no-margin-h1'>All Contacts</h1>
            <Link href="/contacts/new">
              <Button className='add-contact'>ADD CONTACT</Button>
            </Link>
          </Col>
        </Container>

        <Container>
          <SearchBar onSearchTermChange={contactSearch} />
        </Container>

        <Container>
        <Row>
         <Col className='sm'>Profile Pic</Col>
         <Col className='sm'>Name</Col>
         <Col className='sm'>Email</Col>
         <Col className='sm'>Phone</Col>
         <Col className='sm'></Col>
       </Row>
          {searchResult && (
        <Row className='contacts-list' key={searchResult.uniqueId}>
          <Col className='sm'>
            <img src={searchResult.image} alt={searchResult.name} />
          </Col>
          <Col className='sm'>
            <Link href={`/contacts/${searchResult.uniqueId}`}>
              <Col className='sm'>{searchResult.name}</Col>
            </Link>
          </Col>
          <Col className='sm'>{searchResult.email}</Col>
          <Col className='sm'>{searchResult.phoneNumber}</Col>
          <Col className='sm'>Edit</Col> {/* Implement editing function */}
        </Row>
          )}
        </Container>

        <Container>
          <Contact />
        </Container>
    </>
  )
}