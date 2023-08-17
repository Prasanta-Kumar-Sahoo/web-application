import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Navbar from "./Navbar";
import UserCard from "./UserCard";

const Container = styled.div`
  text-align: center;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const handleGetUsersClick = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Navbar onGetUsersClick={handleGetUsersClick} isLoading={isLoading} />
      <UserGrid>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UserGrid>
    </Container>
  );
};

export default App;
