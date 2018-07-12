/** @format */
/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import QueryPostLikes from 'components/data/query-post-likes';
import countPostLikes from 'state/selectors/count-post-likes';
import getPostLikes from 'state/selectors/get-post-likes';

const PostLikesCaterpillar = props => {
	const { blogId, postId, className } = props;

	if ( ! blogId || ! postId ) {
		return null;
	}

	const containerClassnames = classnames( 'post-likes-caterpillar', className );

	return (
		<div className={ containerClassnames }>
			{ blogId &&
				postId && <QueryPostLikes siteId={ blogId } postId={ postId } needsLikers={ true } /> }
			<p>caterpillar!</p>
		</div>
	);
};

PostLikesCaterpillar.propTypes = {
	blogId: PropTypes.number.isRequired,
	postId: PropTypes.number.isRequired,
};

export default connect( ( state, { blogId, postId } ) => {
	if ( ! blogId || ! postId ) {
		return {};
	}
	const likeCount = countPostLikes( state, blogId, postId );
	const likes = getPostLikes( state, blogId, postId );
	return {
		likeCount,
		likes,
	};
} )( localize( PostLikesCaterpillar ) );