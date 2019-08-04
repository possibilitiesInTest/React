import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => {
        console.log(video);
        return <VideoItem video={video}/>;

    });

    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;
