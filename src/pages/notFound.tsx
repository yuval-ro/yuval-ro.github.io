import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { BottomNav, TopNav } from '../Components';

type notfoundProps = {}

const notfound: React.FC = ({ }: notfoundProps) => {

  return (
    <>
      <TopNav />
      <Container className='fluid'>
        <Row className='justify-content-center'>
          <Col md='6'>
            <h1 className='text-center'>404 Page Not Found</h1>
            <p className='text-center'>The page you are looking for does not exist.</p>
            <div className="text-center">
              <Link to="/">
                <Button variant="primary">Go to Home Page</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <BottomNav />    </>
  )
};

export default notfound;