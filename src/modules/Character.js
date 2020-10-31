import styled from 'styled-components/macro'
import React from 'react'

export default function Character({name, imgUrl, species}) {
  return (
    <CharacterContainer>
      <h3>{name}</h3>
      <p>{species}</p>
      <img src={imgUrl} alt="" />
    </CharacterContainer>
  )
}

const CharacterContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    bottom: 2px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    margin-bottom: 10px;
    background-color: yellow;
    `