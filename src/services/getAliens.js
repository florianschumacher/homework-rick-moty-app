export default function getLocations() {
  return fetch(
    "https://rickandmortyapi.com/api/character/?species=alien"
  ).then((res) => res.json());
}
