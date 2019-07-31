import React from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import videoStyles from './VideoOverlay.module.scss';

class VideoOverlay extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div className={videoStyles.wrapper}>
        <h3 className={videoStyles.video_title}>YouTube</h3>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.videoId} onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}

export default VideoOverlay