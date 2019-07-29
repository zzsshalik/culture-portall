import React from 'react'

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import style from './BiographyTimeline.module.scss';

class BiographyTimeline extends React.Component {
    render() {
        let counter = 0;

        return (
            <>
            <h3>Timeline</h3>
            <Timeline lineColor={'#ddd'}>
                {this.props.timelineObjects.map((edge) => {
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

                            <p>{edge.event}</p>
                        </TimelineItem>
                    )
                })} 
            </Timeline>
        </>
        )
    }
}
  
export default BiographyTimeline