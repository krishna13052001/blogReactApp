import React, { Component } from 'react';

import Posts from "./Posts/Posts"
import './Blog.css';
import { Route, NavLink } from 'react-router-dom';
import Newpost from "./NewPost/NewPost";
class Blog extends Component {

    render () {
        

        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/" exact>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/new-post">New Posts</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact>
                    <Posts />
                </Route>
                <Route path="/new-post">
                    <Newpost />
                </Route>
            </div>
        );
    }
}

export default Blog;