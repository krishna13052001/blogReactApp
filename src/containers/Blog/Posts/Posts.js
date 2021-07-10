import React, { Component } from 'react'
import axios from '../../../axios';
import Post from "../../../components/Post/Post"
;import './Posts.css'
class Posts extends Component {
    state = {
        posts: [],
        // selectedPostId: null,
    }

    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data;
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Sathya'
                    }
                });
                this.setState({posts: updatedPosts});
            } )
            .catch(error => {
                console.log(error);
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                // console.log("hi")
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        )
    }
}
export default  Posts;