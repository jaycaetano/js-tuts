import React from 'react'
import PropTypes from 'prop-types'

function Photo (props) {
    const post = props.post
        return <figure className='figure'>
                <img className='photo' src={post.imageLink} alt={post.descritpion}/>
                <figcaption><p>{post.descritpion}</p></figcaption>
                <div className ='button-contianer'>
                    <button className= 'remove-button' onClick= {() => {
                        props.onRemovePhoto(post)
                    }}>Remove</button>
                </div>
        </figure>
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,
    onRemovePhoto: PropTypes.func.isRequired
}

export default Photo