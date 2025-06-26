"use client";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
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
    ); // Fetches all data, converts name prop and term to lower case, checks if inclusive.

    setSearchResult(result.length > 0 ? result[0] : null);
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
         <Col>Profile Pic</Col>
         <Col>Name</Col>
         <Col>Email</Col>
         <Col>Phone</Col>
       </Row>
          {searchResult && ( // The && is used for conditional rendering, if it's truthy you get result, if not it's just null (Line 19).
        <Row className='contacts-list' key={searchResult.uniqueId}>
          <Col>
            <img src={searchResult.image} alt={searchResult.name} />
          </Col>
          <Col>
            <Link href={`/contacts/${searchResult.uniqueId}`}>
              <Col>{searchResult.name}</Col>
            </Link>
          </Col>
          <Col>{searchResult.email}</Col>
          <Col>{searchResult.phoneNumber}</Col>
        </Row>
          )}
        </Container>

        <Container>
          <Link href="/contacts">All Contacts</Link>
        </Container>
    </>
  )
}