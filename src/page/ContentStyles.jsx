import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1;

  height: 45px;
  width: 100%;
  margin: 0 auto;
  padding:  0 5% 0 16%;

  background-color: white;
  box-shadow: 0 0 .5em gray;

  user-select: none;
`;

export const HeaderTitle = styled.h1`
  font-weight: bold;
  font-style: italic;
  font-size: 1.5em;
`;

export const MenuLinks = styled.nav`
  position: absolute;
  display: flex;
  flex-flow: wrap column;
  align-content center;

  height: 100vh;
  width: 15%;
  padding-top: 60px;

  background-color: white;
  box-shadow: 0 0 .5em gray;
  z-index: 1;

  transition: left .2s;
  left: ${props => props.showOnScreen ? '0' : '-15%'};

  user-select: none;
`

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
 
  height: 40px;
  width: calc(100% - 30px);
  margin: 0;
  margin-bottom: 15px;

  border-radius: 2px;
  
  box-shadow: 0 0 .5em lightgray;
  cursor: pointer;

  transition: box-shadow .2s;
  
  &:hover {
    box-shadow: 0 0 .2em gray;
  }
`

export const MenuToggle = styled.button`
  position: absolute;
  height: 30px;
  width: 30px;
  left: 10px;
  top: 7.5px;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  padding: 0;
  margin: 0;
  border: none;

  box-shadow: 0 0 .25em gray;
  border-radius: 5px;
  cursor: pointer;
`