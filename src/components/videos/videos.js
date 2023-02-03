import React, { useState } from 'react'

// CSS
import styles from './videos.module.css'

const Videos = () => {

  const [videos, setVideos] = useState([{
    thumbNail: 'https://i.ytimg.com/vi/fHI8X4OXluQ/maxresdefault.jpg',
    videoName: 'The Weeknd - Blinding Lights (Official Video)',
    channelName: 'Carlos Rubens',
    views: '152k Vizualizações',
    link: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ&ab_channel=TheWeekndVEVO'
  },{
    thumbNail: 'https://i1.sndcdn.com/artworks-000103577879-bi5ki8-t500x500.jpg',
    videoName: 'Reflekt Feat. Delline Bass - Need To Feel Loved (Adam K & Soha Vocal Mix)',
    channelName: 'Reflekt',
    views: '12m Vizualizações',
    link: 'https://www.youtube.com/watch?v=zXkbi-ddZXM&ab_channel=Reflekt-Topic'
  },{
    thumbNail: 'https://static.qobuz.com/images/covers/82/55/0073145305582_600.jpg',
    videoName: 'Got To Be There',
    channelName: 'Michael Jackson',
    views: '875k Vizualizações',
    link: 'https://youtu.be/Y9cixo-iXAE?list=RDY9cixo-iXAE'
  },{
    thumbNail: 'https://i.ytimg.com/vi/7V7YPXo8otI/maxresdefault.jpg',
    videoName: 'Nunca foi sorte, sempre foi Deus | Kaisser | Wagão',
    channelName: 'Wagão',
    views: '15m Vizualizações',
    link: 'https://youtu.be/7V7YPXo8otI?list=RD7V7YPXo8otI'
  },{
    thumbNail: 'https://i.ytimg.com/vi/DYXaHK4woto/maxresdefault.jpg',
    videoName: 'The Weeknd - Blinding Lights (Official Video)',
    channelName: 'Carlos Rubens',
    views: '798k Vizualizações',
    link: 'https://youtu.be/DYXaHK4woto?list=RD7V7YPXo8otI'
  },])

  return (
    <>
      <div className={styles.videos}>
        <h2>Meus Videos Favoritos</h2>

        {videos.map((vid, index) =>(
          <a href={vid.link} target='_blank' >
            <div className={styles.all_videos}>
              <img src={vid.thumbNail} alt="" />
              <h4>{vid.videoName}</h4>
              <h5>{vid.channelName}</h5>
              <h5>{vid.views}</h5>
            </div>
          </a>
        ))}

      </div>
    </>
  )
}

export default Videos