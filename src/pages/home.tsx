import React from 'react';

import { TopNav, BottomNav } from '../Components';
import { Container } from 'react-bootstrap';

type homeProps = {};

const home: React.FC = ({ }: homeProps) => {

  return (
    <>
      <TopNav />
      <Container className='fluid text-center'>
        <h1>
          Whoops!
        </h1>
        <h2>
          This site is currently under construction.
        </h2>
        <p>
          In the meanwhile, I invite you to check out my <a href='https://github.com/yuval-ro'>Github page</a>.
        </p>
      </Container>
      <BottomNav />
    </>
  );
};

export default home;
