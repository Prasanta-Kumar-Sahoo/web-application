import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled.div`
  font-size: 1.5rem;
`;

const GetUsersButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius:20px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Navbar = ({ onGetUsersClick, isLoading }) => {
    return (
        <NavbarContainer>
            <Brand>Cardify</Brand>
            <GetUsersButton onClick={onGetUsersClick} disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Get Users'}
            </GetUsersButton>
        </NavbarContainer>
    );
};

export default Navbar;
