import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;  /* Center the container content */
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
  position: relative;  /* Relative positioning for absolute elements */
`;

export const NavLogo = styled(LinkR)`
    position: absolute;
    left: 24px;  /* Align logo to the left */
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      left: 10px;
  }
`;



export const NavItems = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    @media screen and (max-width: 768px) {
      display: none;
    }
`;

export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

