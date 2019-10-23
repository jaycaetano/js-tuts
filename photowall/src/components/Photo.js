import React, {Component} from 'react';

class Photo extends Component {
    render() {
        const post = this.props.post
        return <figure className='figure'>
                <img className='photo' src={post.imageLink} alt={post.descritpion}/>
                <figcaption><p>{post.descritpion}</p></figcaption>
                <div className ='button-contianer'>
                    <button className= 'remove-button'>Remove</button>
                </div>
        </figure>
    }
}

export default Photo