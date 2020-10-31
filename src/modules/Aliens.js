import styled from "styled-components/macro";
import React from "react";

export default function Aliens({ name, imgUrl, species }) {
  return (
    <AliensContainer>
      <h3>{name}</h3>
      <p>{species}</p>
      <img src={imgUrl} alt="" />
    </AliensContainer>
  );
}

const AliensContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  bottom: 2px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: orange;
`;
