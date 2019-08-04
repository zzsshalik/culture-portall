import React from 'react'
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react'
import PropTypes from 'prop-types'

import timelineStyles from './BiographyTimeline.module.scss';

const BiographyTimeline = (props) => {
      const { timelineObjects } = props
        return (
          <>
            <h3 id="ATimeline" className={timelineStyles.timeline_title}>Timeline</h3>
            <Timeline lineColor="#5e4480">
              {timelineObjects.map((edge) => {
                    return (
                      <TimelineItem
                        key={edge.time+edge.event}
                        dateText={edge.time}
                        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                        bodyContainerStyle={{
                                background: '#ddd',
                                padding: '20px',
                                borderRadius: '8px',
                                boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                            }}
                      >

                        <p className={timelineStyles.timeline_text}>{edge.event}</p>
                      </TimelineItem>
                    )
                })}
            </Timeline>
          </>
        )
}

BiographyTimeline.propTypes = {
  timelineObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default BiographyTimeline
