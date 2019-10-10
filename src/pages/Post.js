import React from 'react'
import { withRouter } from 'react-router-dom'
import { useItem } from '../api/hooks';

const Post = ({ match, history }) => {
    const post_id = match.params.id;
    const [post] = useItem(post_id);
    
    if(!post_id) return <h3>Nie znaleziono posta..</h3>;

    return <div className="Item">
        <div className="Item__thumbnail">
            <img src={post.image} alt={post.title} />
        </div>
        <h1>{post.title}</h1>
        <p>{post.category}</p>
    </div>
}

export default withRouter(Post);