import React from 'react';
import MusicPlayer from '@/components/player';
import styled from 'styled-components';

const RouterActionTitle = styled.h1 `
  font-family: var(--font-clash);
  color: var(--color-component-white);
  border-bottom: 10px solid var(--color-component-main);
  padding-bottom: 6px;
  text-transform: uppercase;
  width: 20%;
  font-size: calc(10px + 5vmin);
  text-align: left;
  margin-bottom: 4vh;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }
`
const PlaylistRouteMain = styled.main `
  text-align: left;
  margin-top: 3vh;
`

const Playlist = () => {
  return (
    <PlaylistRouteMain>
        <MusicPlayer/>
    </PlaylistRouteMain>
  )
}

export default Playlist