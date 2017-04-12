import { combineReducers, Action } from 'redux';

import {
	ISelectSubredditAction,
	IInvalidateSubredditAction,
	SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
	REQUEST_POSTS, RECEIVE_POSTS
} from './actions';


export type ISelectedSubRedditState = 'reactjs';

function selectedSubreddit(
	state: ISelectedSubRedditState = 'reactjs',
	action: ISelectSubredditAction): ISelectedSubRedditState {
	switch (action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit;
		default:
			return state;
	}
}

export interface IPostState {
	isFetching?: boolean;
	didInvalidate?: boolean;
	items?: [string];
}

type PostAction = ISelectSubredditAction | IInvalidateSubredditAction;

function posts(state: IPostState, action: PostAction): IPostState {

	switch (action.type) {
		case INVALIDATE_SUBREDDIT:
			return Object.assign<IPostState, IPostState, IPostState>(
				{}, state, {
				didInvalidate: true
			});
		default:
			return state;
	}
}