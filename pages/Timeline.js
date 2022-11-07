import React from 'react'
import { StyledTimeline } from '../src/components/timeline'


const Timeline = ({ playlists }) => {
  const playlistNames = Object.keys(playlists)

  return (
    <StyledTimeline>

      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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