import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

function DetailCard(props) {
  const [showDetails, setShowDetails] = useState(false);

  const hideDetails = (val) => {
    setShowDetails(val);
  };

  return (
    <StyledCardContainer>
      <StyledCardPreview>
        <p>Hello {props.name}</p>
        <div className="container">
          <p className="heading">CONTACT</p>
          <p>{props.contact}</p>
        </div>
        <div className="container">
          <p className="heading">CITY</p>
          <p>{props.city}</p>
        </div>
        <div className="container">
          <p className="heading">STREET</p>
          <p>{props.street}</p>
        </div>
        <Button hideDetails={hideDetails} />
      </StyledCardPreview>
      {showDetails && (
        <StyledCardDetails>
          <div className="details-container">
            <p className="heading">Description</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="user-details">
            <div className="user-details-col1">
              <div className="container">
                <p className="heading">Contact</p>
                <p>{props.contact}</p>
              </div>

              <div className="container">
                <p className="heading">Company</p>
                <p>{props.company}</p>
              </div>

              <div className="container">
                <p className="heading">Email</p>
                <p>{props.email}</p>
              </div>

              <div className="container">
                <p className="heading">Phone</p>
                <p>{props.phone}</p>
              </div>
            </div>
            <div className="user-details-col2">
              <div className="container">
                <p className="heading">Address</p>
                <p>{props.address}</p>
              </div>

              <div className="container">
                <p className="heading">City</p>
                <p>{props.city}</p>
              </div>

              <div className="container">
                <p className="heading">Street</p>
                <p>{props.street}</p>
              </div>

              <div className="container">
                <p className="heading">Zip code</p>
                <p>{props.zipcode}</p>
              </div>
            </div>
          </div>
        </StyledCardDetails>
      )}
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 70px 30px;
  width: 90%;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  p {
    font-size: 0.75rem;
    padding: 0;
    margin: 0;
  }

  .heading {
    font-weight: bold;
    font-size: 0.7rem;
    margin-bottom: 10px;
  }

  .container {
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    gap: 8px;
  }

  @media only screen and (max-width: 800px) {
    p,
    .heading {
      font-size: 0.6rem;
    }
    width: 80%;
  }

  @media only screen and (max-width: 450px) {
    width: 70%;
  }
`;

const StyledCardPreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .container {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
    }
    .heading {
      margin-bottom: 0;
    }
  }
`;

const StyledCardDetails = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .details-container {
    display: flex;
    flex-direction: column;
  }

  .heading {
    font-weight: bold;
    font-size: 0.7rem;
  }

  p {
    font-size: 0.7rem;
    line-height: 20px;
    padding: 0;
    margin: 0;
  }

  .user-details {
    display: flex;
    align-items: center;
    gap: 200px;
  }

  @media only screen and (max-width: 600px) {
    .user-details {
      gap: 100px;
    }
  }

  @media only screen and (max-width: 450px) {
    .user-details {
      flex-direction: column;
      align-items: flex-start;
      gap: 0;
    }
  }
`;

export default DetailCard;
