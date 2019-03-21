import React from 'react';
import { connect } from 'react-redux';

import { fetchAlbums } from '../actions/index';

class DisplayAlbum extends React.Component{
    componentDidMount(){
        this.props.fetchAlbums();
    }
    renderAlbums(){
        return this.props.albums.map((album) =>{
            return(
                <div key={album.id}>
                    <h4>
                        <a>
                            {album.title}
                        </a>
                    </h4>
                </div>
            )
        })
    }
    render(){
        return(
            <div>
                {this.renderAlbums()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        albums:state.albums
    };
}

export default connect(mapStateToProps,
    {fetchAlbums})(DisplayAlbum);