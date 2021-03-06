import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';


class TrackList extends React.Component {
    render(){
        return <div className="TrackList">
                this.props.tracks = [name, artist, album, id]
                this.props.tracks.map(track => {
                    <Track track={this.props.track} key = {this.props.track.id}
                                onAdd = {this.props.onAdd}
                                onRemove = {this.props.onRemove}
                                isRemoval = {this.props.isRemoval} />
                })
        </div>             
    }
}

export default TrackList;