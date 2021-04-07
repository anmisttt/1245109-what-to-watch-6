import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchComments} from '../../store/api-actions';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';

const TabsReviews = ({comments, isCommentsLoaded, getCommnets}) => {

  const filmId = useParams().id;

  const monthNames = [`January`, `February`, `March`, `April`, `May`, `June`,
    `July`, `August`, `September`, `October`, `November`, `December`
  ];


  useEffect(() => {
    if (!isCommentsLoaded) {
      getCommnets(filmId);
    }
  }, [isCommentsLoaded]);

  return (
    ((isCommentsLoaded) && (comments.length > 0)) ?
      <React.Fragment>
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__reviews-col">
            {comments.map((comment) =>
              <div className="review" key={comment.id}>
                <blockquote className="review__quote">
                  <p className="review__text">{comment.comment}</p>

                  {(typeof comment[`date`] !== `undefined`) && <footer className="review__details">
                    <cite className="review__author">{comment.user.name}</cite>
                    <time className="review__date" dateTime={comment.date}>{monthNames[new Date(comment.date).getMonth()]} {new Date(comment.date).getDate()}, {new Date(comment.date).getFullYear()}</time>
                  </footer>}

                </blockquote>

                <div className="review__rating">{comment.rating}</div>
              </div>)}
          </div>
        </div>

      </React.Fragment> :
      <p className="movie-card__text">No reviews</p>
  );
};

TabsReviews.propTypes = {
  comments: PropTypes.array.isRequired,
  isCommentsLoaded: PropTypes.bool.isRequired,
  getCommnets: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  comments: state.comments,
  isCommentsLoaded: state.isCommentsLoaded
});

const mapDispatchToProps = (dispatch) => ({
  getCommnets(filmId) {
    dispatch(fetchComments(filmId));
  }
});

export {TabsReviews};

export default connect(mapStateToProps, mapDispatchToProps)(TabsReviews);
