import React, { useMemo } from 'react'
import { StyledTimeline } from '../src/components/timeline'
import config from '../config.json'


const Timeline = (props) => {
  const playlists = useMemo(() => 
    config.playlists
  )
  const playlistNames = Object.keys(playlists)
  
  
  return (
    <StyledTimeline>

      {playlists ? (playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div key={playlistName}>

              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchNormalized = props.searchValue.toLowerCase();
                return titleNormalized.includes(searchNormalized);
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              }) 
            }
            </div>
          </section>
        )
      })) : (<h2>Carregando...</h2>)}
    </StyledTimeline>
  )
}

export default Timeline