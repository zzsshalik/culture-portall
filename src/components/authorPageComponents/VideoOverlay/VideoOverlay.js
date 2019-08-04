import React from 'react'
import ModalVideo from 'react-modal-video'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import 'react-modal-video/scss/modal-video.scss'
import videoStyles from './VideoOverlay.module.scss'

class VideoOverlay extends React.Component {
  static propTypes = {
    videoId: PropTypes.string.isRequired,
}
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
    const { isOpen } = this.state
    const { videoId } = this.props
    return (
      <div className={videoStyles.wrapper}>
        <h3 className={videoStyles.video_title}>YouTube</h3>
        <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => this.setState({isOpen: false})} />
        <Button variant="secondary" onClick={this.openModal}>Open</Button>
      </div>
    )
  }
}

export default VideoOverlay
