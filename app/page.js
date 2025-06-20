import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1>All Contacts</h1>
            <Button>ADD CONTACT</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
