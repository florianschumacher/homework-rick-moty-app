import { useEffect, useState } from "react";
import styled from "styled-components/macro";
import getCharacters from "./services/getCharacters";
import getAliens from "./services/getAliens";
import Header from "./modules/Header";
import Character from "./modules/Character";
import Aliens from "./modules/Aliens";
import Video from "./modules/Videos";
import Navigation from "./modules/Navigation";

function App() {
  const [characters, setCharacters] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    getCharacters()
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    getAliens()
      .then((data) => setAliens(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Contentbox>
        {currentPage === "home" &&
          characters.map(({ id, name, image, species }) => (
            <Character key={id} name={name} imgUrl={image} species={species} />
          ))}
        {currentPage === "aliens" &&
          aliens.map(({ id, name, image, species }) => (
            <Aliens key={id} name={name} imgUrl={image} species={species} />
          ))}
        {currentPage === "video" && <Video />}
        <Navigation onNavigate={setCurrentPage} />
      </Contentbox>
    </div>
  );
}

export default App;

const Contentbox = styled.div`
  display: block;
  margin-top: 80px;
  margin-bottom: 120px;
`;
