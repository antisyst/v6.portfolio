import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { PiArrowLineRightBold, PiArrowLineLeftBold } from 'react-icons/pi';
import ScrollReveal from '@/utils/ScrollReveal';
import { FaPlay, FaPause } from 'react-icons/fa'

interface Song {
  title: string;
  image: string;
  audio: string;
}
const PlayerConfig = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0 3%;
    padding: 30px;
    border-radius: 40px;
    width: 80%;
    background: var(--color-component-black);
    border: 3px solid var(--color-component-main);
    flex-wrap: nowrap;

    @media only screen and (max-width: 1030px) {
      flex-direction: column;
      gap: 30px 0;
    }

    @media only screen and (max-width: 800px) {
      width: 100%;
      padding: 15px;
      align-items: center;
      justify-content: center;
    }
`
const AudioInfoConfig = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media only screen and (max-width: 800px) {
      align-items: center;
    }

    img {
        width: 350px;
        pointer-events: none;
        height: 350px;
        border-radius: 20px;
        pointer-events: none;
        object-fit: cover;

        @media only screen and (max-width: 800px) {
          width: 100%;
          border-radius: 30px;
        }
    }
`
const ActiveAudioTitle = styled.p `
    font-size: 20px;
    margin-top: 20px;
    padding-left: 2px;
    font-family: var(--font-clash);

    @media only screen and (max-width: 800px) {
      padding-left: 0;
    }
`
const MusicListAction = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    height: 520px;
    justify-content: flex-start;
    gap: 0;
    flex-wrap: nowrap;
    background: var(--color-component-black);
    padding: 20px;
    border-radius: 20px;
    border: 2px solid var(--color-component-main);
    overflow-x: auto;

    @media only screen and (max-width: 800px) {
      width: 100%;
      padding: 0;
      border-top: 3px solid var(--color-component-main);
      border-left: none;
      border-right: none;
      border-radius: 0;
      border-bottom: none;
    }

`
const MusicListItem = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 110px;
    cursor: pointer;
    width: 100%;
    padding: 10px;

    img {
        width: 90px;
        height: 90px;
        border-radius: 10px;
        object-fit: cover;
        pointer-events: none;

        @media only screen and (max-width: 800px) {
          .image_list_item {
            width: 90px;
            height: 90px;
          }
        }
    }
    p {
        margin-left: 20px;
        font-family: var(--font-clash);
        font-size: 18px;

        &:nth-child(2) {
            margin-top: 3px;
            color: var(--color-component-main);
            font-weight: 600;
        }
    }
`
const ControlsConfig = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    margin-top: 17px;
    gap: 15px;
    width: 100%;

    @media only screen and (max-width: 800px) {
      justify-content: center;
      margin-top: 20px;
    }
`
const ControlsActionButton = styled.button `
    background: var(--color-component-prim);
    display: flex;
    color: var(--color-component-white);
    font-size: 24px;
    padding: 11px;
    border-radius: 50%;
    border: 2.5px solid var(--color-component-main);
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-out;

    &:active {
     filter: drop-shadow(0 0 0.75rem var(--color-component-main));
    }

    &:nth-child(2) {
        font-size: 22px;
        padding-right: 15px;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 17px;
        border: 3px solid var(--color-component-main);
        transition: all 0.3s ease-out;

        &:active {
            transform: scale(0.87);
          }
    }
`
const AudioProgressConfig = styled.div `
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
`
const AudioProgressBar = styled.div `
    width: 100%;
    height: 10px;
    background-color: var(--color-component-prim);
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
    overflow: hidden;
`
const AudioProgressAction = styled.div `
    height: 100%;
    background-color: var(--color-component-main);
    filter: drop-shadow(0 0 0.75rem var(--color-component-main));
    border-radius: 5px;
    width: 0;
    transition: width 0.3s ease-in-out;
`
const MusicPlayer: React.FC = () => {
  const songs: Song[] = [
    {
      title: "michele moronne - feel it",
      image: "https://i.pinimg.com/564x/2d/25/1c/2d251c79c985b15fedbc11b988a34451.jpg",
      audio: "https://audio.jukehost.co.uk/mWZZLDm87KRNhkeRN5QAhRkBRS0HOt7r"
  },
    {
      title: "grand theft auto loading theme",
      image: "https://i.pinimg.com/564x/b6/e0/4d/b6e04dbe9c4d4944b338a85d5926de48.jpg",
      audio: "https://audio.jukehost.co.uk/kK5BxLlRGj6M5HQNTHewCL1s3DupxPiG"
    },
    {
      title: "butrint imeri - sugar speed up",
      image: "https://i.pinimg.com/564x/ec/04/c6/ec04c6f13cda1d3023f46c345785bf5c.jpg",
      audio: "https://audio.jukehost.co.uk/W3iBHFnbvkYtwwNmNJGRkeBGm55QVcOD"
    },
    {
        title: "haykıracak nefesim speed up",
        image: "https://i.pinimg.com/564x/93/e6/d5/93e6d5ea5f5b2a33b8c2ccd17c849c3d.jpg",
        audio: "https://audio.jukehost.co.uk/Unktk9AyTl4P2kWphVOJHSwT1JbB0LPB"
    },
  {
    title: "getme gel speed up ",
    image: "https://i.pinimg.com/564x/d3/8e/1a/d38e1a15d43496388709655e95e211f8.jpg",
    audio: "https://audio.jukehost.co.uk/5JmMVQhswlCQZmgmXsvxXtjgLGfn8Zcd"
  },
  {
    title: "miro × nigar - yaram var",
    image: "https://i.pinimg.com/564x/4d/14/4c/4d144ca731114dfa19994290592edd53.jpg",
    audio: "https://audio.jukehost.co.uk/9oFu0jcBB7nhu94pX0zRNMtzQ37Z139t"
  }  
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSong = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pauseSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };
  
  useEffect(() => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  const previousSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };
  
  useEffect(() => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }, [currentSongIndex]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const progress = (clickPosition / progressBarWidth) * 100;
      const currentTime = (progress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = currentTime;
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  return (
    <PlayerConfig>
      <AudioInfoConfig>
        <img src={songs[currentSongIndex].image} alt="Song Cover" />
        <ActiveAudioTitle>{songs[currentSongIndex].title}</ActiveAudioTitle>
        <AudioProgressConfig>
          <AudioProgressBar onClick={handleProgressClick}>
           <AudioProgressAction className="progress" style={{ width: `${progress}%` }}></AudioProgressAction>
          </AudioProgressBar>
        </AudioProgressConfig>
        <ControlsConfig>
          <ControlsActionButton onClick={previousSong}><PiArrowLineLeftBold/></ControlsActionButton>
          {isPlaying ? (
            <ControlsActionButton onClick={pauseSong}><FaPause/></ControlsActionButton>
          ) : (
            <ControlsActionButton onClick={playSong}><FaPlay/></ControlsActionButton>
          )}
          <ControlsActionButton onClick={nextSong}><PiArrowLineRightBold/></ControlsActionButton>
          
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].audio}
        onEnded={nextSong}
      />
          </ControlsConfig>
        </AudioInfoConfig>
       <MusicListAction className='custom_scroll'>
        {songs.map((song, index) => (
          <MusicListItem
            key={index}
            className={`music-item ${index === currentSongIndex ? 'play_active' : ''}`}
            onClick={() => setCurrentSongIndex(index)}
          >  <div className='image_list_item'>
               <img src={song.image} alt="" />
              </div>
            <div>
             <p>{song.title}</p>
             <p>from @rmznzz</p>
            </div>
          </MusicListItem>
        ))}
      </MusicListAction>
    </PlayerConfig>
  );
};

export default MusicPlayer;
