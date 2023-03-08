import React from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideoIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import WriteIcon from '@mui/icons-material/RateReview';

function Feed() {
  return (
    <div className='feed'>
      <div className="feed__inputContainer">
        <div className="feed__input">
            <CreateIcon />
            <form>
                <input type="text" />
                <button type='submit'>Send</button>
            </form>
        </div>
        
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="yellow"/>
          <InputOption Icon={VideoIcon} title="Video" color="green"/>
          <InputOption Icon={EventIcon} title="Event" color="blue"/>
          <InputOption Icon={WriteIcon} title="Write artile" color="orange"/>
        </div>
      </div>
    </div>
  )
}

export default Feed
