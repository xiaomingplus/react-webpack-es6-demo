import React from 'react';
import Comment from './comment.js';
import '../css/commentList.less';
class CommentList extends React.Component {
    render () {
        var commentNodes = this.props.data.map(
            function(comment,i){
                return (
                    <Comment key={"comment_"+i} author={comment.author}>{comment.text}</Comment>
                )
            }
        );

        return (

            <div className="commentListBox">
                <h1>评论列表</h1>
            <div className="commentList">
                {commentNodes}
            </div>
                </div>
        );
    }
};


export default CommentList;