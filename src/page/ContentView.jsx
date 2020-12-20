import React from 'react';
import {MoreVertical, Minus} from 'react-feather';

import { 
  Header, 
  HeaderTitle, 
  MenuLinks, 
  MenuToggle, 
  Link 
} from './ContentStyles';

const ContentView = ({toggleMenuOpen, isMenuOpen}) => {
  return (
    <>
      <Header>
        <HeaderTitle>Amorinha</HeaderTitle>
      </Header>

      <MenuToggle onClick={() => toggleMenuOpen()}>
        {isMenuOpen ? <Minus /> : <MoreVertical />}
      </MenuToggle>

      <MenuLinks showOnScreen={isMenuOpen}>
        <Link>Alunos Educação Infantil</Link>
      </MenuLinks>
    </>
  )
}

export default ContentView;