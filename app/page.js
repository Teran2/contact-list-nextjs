import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { SearchBar } from './components/searchBar';
import Contact from './contacts/page'

export default function Home() {
  return (
    <>
      <Container>
          <Col className='page-header'>
            <h1 className='no-margin-h1'>All Contacts</h1>
            <Button className='add-contact'>ADD CONTACT</Button>
          </Col>
        <Container fluid='md'>
          <SearchBar/>
          <Contact />
        </Container>
        {/* <Container fluid='md'>
          <Contact/>
        </Container> */}
      </Container>
    </>
  )
}
