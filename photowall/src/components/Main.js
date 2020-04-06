import React, {Component} from 'react';
import Title from './Title';
import Photowall from './Photowall';

class Main extends Component {
    constructor(){
        super()
        this.state = {
            posts:  []
        }
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render () {
    return (
        <div>
            <Title title={'Photowall'}/>
            <Photowall posts={this.state.posts} onRemovePhoto={this.removePhoto}/>
        </div>
    )
    }

}

export default Main