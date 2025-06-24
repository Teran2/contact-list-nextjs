import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { SearchBar } from './components/searchBar';

export default function Home() {
  return (
    <>
      <Container>
          <Col className='page-header'>
            <h1 className='no-margin-h1'>All Contacts</h1>
            <Link href="/contacts/new/page">
              <Button className='add-contact'>ADD CONTACT</Button>
            </Link>
            {/* onClick ROUTE to form - contacts/new/page */}
          </Col>
        </Container>

        <Container fluid='md'>
          <SearchBar/>
        </Container>

        <Container>
          {/* RENDER ContactList */}
        </Container>

        <Container>
          {/* ROUTE to form - AddNewContact */}
        </Container>

        <Container>
          {/* ROUTE to page - ContactInfo */}
        </Container>
    </>
  )
}
