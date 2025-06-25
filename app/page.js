"use client";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { SearchBar } from './components/searchBar';

export default function Home() {
  const contactSearch = (term) => {
    console.log(term);

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
          <Link href="/contacts">All Contacts</Link>
        </Container>
    </>
  )
}
