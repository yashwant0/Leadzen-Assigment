import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SweetPagination from "sweetpagination";
import DetailCard from "./components/DetailCard";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const [currentPageData, setCurrentPageData] = useState(users);

  return (
    <StyledContainer>
      {currentPageData.map((user) => (
        <DetailCard
          key={user.id}
          name={user.username}
          contact={user.name}
          city={user.address.city}
          street={user.address.street}
          company={user.company.name}
          email={user.email}
          phone={user.phone}
          address={`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
          zipcode={user.address.zipcode}
        />
      ))}

      <div className="paginate">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={3}
          getData={users}
          navigation={true}
        />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  background: #f3f8fe;
  height: 100vh;
  width: 100%;
  padding: 20px 0;
`;

export default App;
