import styled from "styled-components/macro";

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Rick and Morty App</h1>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  top: 0px;
  position: fixed;
  display: block;
  height: 60px;
  width: 100%;
  background-color: lime;
  text-align: center;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: yellow;
  font-size: 80%;
  margin: 0;
  padding: 0;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
