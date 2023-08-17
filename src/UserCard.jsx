import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  img {
    max-width: 100px;
    border-radius: 50%;
    margin: 0 auto 10px;
  }

  h2 {
    margin: 0;
  }

  p {
    color: #888;
  }
`;

const UserCard = ({ user }) => {
    return (
        <Card>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>Email: {user.email}</p>
        </Card>
    );
};

export default UserCard;
