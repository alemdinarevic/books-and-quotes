import React, { Component } from 'react';

import { Route, Link, NavLink, Switch, Redirect} from 'react-router-dom';

import FullPost from './FullPost/FullPost';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	render () {
		return (
			<div className="Blog">
				<header>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/new-post'>New Post </Link></li>
					</ul>
				</header>
				<Switch>
					<Route path='/' exact component={Posts}/>
					<Redirect from='/' to='/posts' />
					<Route path='/new-post' component={NewPost}/>
					<Route path='/posts/:id' exact component={FullPost}/>
				</Switch>
				

			</div>
		);
	}
}

export default Blog;