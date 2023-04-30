import React from 'react';
import { BottomNav, TopNav } from '../Components';
import { Container } from 'react-bootstrap';

type aboutProps = {}

const about: React.FC = ({ }: aboutProps) => {

  return (
    <>
      <TopNav />
      <Container className='fluid'>
        <p>
          Consectetur aute eu exercitation irure nisi. Adipisicing in ex est exercitation labore aliquip sunt excepteur voluptate sit incididunt exercitation. Reprehenderit nulla cupidatat officia ipsum non proident. Sint ex sint cupidatat in. Officia reprehenderit velit aliquip minim ex aute aute. Nulla occaecat commodo veniam amet. Occaecat veniam sunt exercitation sit ipsum voluptate excepteur esse proident nostrud anim.
          Nisi cupidatat sunt aliquip laborum proident id minim ullamco est quis. Consequat deserunt ut minim adipisicing ea consectetur mollit dolor elit ut cupidatat sint irure. Et nostrud ad aute esse incididunt eiusmod ut irure proident. Laboris est cupidatat exercitation commodo non aliqua ad sint do velit ad. Duis ea incididunt veniam culpa esse qui ea ea.
        </p>
      </Container>
      <BottomNav />
    </>
  )
};

export default about;