import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deletePost } from "../actions/postActions";

class Posts extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
    };
    render() {
        const post = this.props.post ? (<div>
            <p>{this.props.post.title}</p>
            <button onClick={this.handleClick}>Detele Post</button>
        </div>) : (<p>Pay loading</p>);
        const posts = this.props.posts.map(post=><div key={post.id}>
            <p>{post.title}</p>
        </div>);
        return (
            <div className="contain">
                <p>City Details</p>
                {post}
                <p>POSTS AFTER DELETE</p>
                {posts}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.post_id);
    return {
        post: state.postReducer.posts.find(post => post.id === id),
        posts: state.postReducer.posts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
