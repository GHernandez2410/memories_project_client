import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import { likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  const getTitle = () => {
    return post.title;
  }

  const getCreator = () => {
    return post.name;
  }

  const getTimeCrated = () => {
    return moment(post.createdAt).fromNow();
  }

  const getTags = () => {
    return post.tags.map((tag) => `#${tag} `);
  }

  const getMessage = () => {
    return post.message;
  }

  const getAmountofLikes = () => {
    return post.likeCount;
  }

  const onClickLikePost = (postId) => {
    return dispatch(likePost(postId));
  }

  const onClickDeletePost = (postId) => {
    return dispatch(deletePost(postId));
  }

  const Likes = () => {
    if (getAmountofLikes() > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{getAmountofLikes() > 2 ? `You and ${getAmountofLikes()} others` : `${getAmountofLikes()} like${getAmountofLikes() > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{getAmountofLikes()} {getAmountofLikes() === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={getTitle()} />
      <div className={classes.overlay}>
        <Typography variant="h6">{getCreator()}</Typography>
        <Typography variant="body2">{getTimeCrated()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{getTags()}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{getTitle()}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{getMessage()}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => onClickLikePost(post._id)}>           
          <Likes />
        </Button>
        <Button size="small" color="primary" onClick={() => onClickDeletePost(post._id)}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;