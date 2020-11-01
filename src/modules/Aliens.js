import styled from "styled-components/macro";
import React from "react";

export default function Aliens({ name, imgUrl, species }) {
  return (
    <AliensContainer>
      <h5>{name}</h5>
      <p>{species}</p>
      <img src={imgUrl} alt="" />
    </AliensContainer>
  );
}
  
const AliensContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    margin-bottom: 0.125em;
    background-color: orange;
    h5 {
      margin: 5px;
      margin-bottom: 0px;
      margin-top: 0px;
      margin-left: 0px;
      font-size-adjust: 100%;
      overflow: hidden;
      max-height: 1em;
  }
    p {
      margin: 5px;
      margin-top: 0px;
      margin-bottom: 0px;
      margin-left: 0px;
      font-size: 0.75em;
    }
`
