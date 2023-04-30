import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

type BottomNavProps = {}

const BottomNav: React.FC = ({ }: BottomNavProps) => {

  return (
    <>
      <Container>
        <Navbar fixed='bottom' bg='light' variant='light'>
          <Navbar.Text className='mx-auto'>
            © 2023 Yuval Rotem
          </Navbar.Text>
        </Navbar>
      </Container>
    </>
  )
};

export default BottomNav;