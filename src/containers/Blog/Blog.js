import React, { Component } from 'react';

import Posts from "./Posts/Posts"
import './Blog.css';
import { Route, NavLink,Switch } from 'react-router-dom';
import Newpost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost"
import Error from './Error/Error'
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
                <Switch>
                    <Route path="/" exact>
                        <Posts />
                    </Route>
                    <Route path="/new-post">
                        <Newpost />
                    </Route>
                    <Route path="/post/:id" exact component={FullPost} />
                    <Route component={Error} />
                </Switch>
            </div>
        );
    }
}

export default Blog;