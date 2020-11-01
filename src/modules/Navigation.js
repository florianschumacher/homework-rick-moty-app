import styled from "styled-components/macro";

export default function Navigation({ onNavigate }) {
  return (
    <NavigationContainer>
      <Navigationitem onClick={(event) => onNavigate("home")}>
        Characters
      </Navigationitem>
      <Navigationitem onClick={(event) => onNavigate("aliens")}>
        Aliens
      </Navigationitem>
      <Navigationitem onClick={(event) => onNavigate("video")}>
        Theme
      </Navigationitem>
    </NavigationContainer>
  );
}

const NavigationContainer = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3,33%);
  grid-gap: 0.125em;
  height: 80px;
  width: 100%;
  bottom: 0px;
  background-color: lime;
  border-radius: 10px;
  z-index: 10;
  opacity: 90%;
`;

const Navigationitem = styled.button`
  display: block;
  height: 50px;
  background-color: yellow;
  color: green;
  border-radius: 10px;
  margin-top: 20px;
`;
