import React from 'react'
import { StyledTimeline } from '../src/components/timeline'
import config from '../config.json'


const Timeline = ({ searchValue, ...props }) => {
  const playlists = props.playlists
  const playlistNames = Object.keys(playlists)

  return (
    <StyledTimeline>

      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div key={playlistName}>
      
              {videos.filter((video) => {
                const title = video.title.toLowerCase()
                const searchNormalized = searchValue.toLowerCase()
                return title.includes(searchNormalized);
              }).map((video) => {
                return (
                  <a key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}

export default Timeline