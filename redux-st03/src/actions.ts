import {  Action } from 'redux';



export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';

export interface ISelectSubredditAction extends Action {
	type: 'SELECT_SUBREDDIT';
	subreddit: 'reactjs';
}

export function selectSubEdit(subreddit: 'reactjs'): ISelectSubredditAction {
	return {
		type: SELECT_SUBREDDIT,
		subreddit
	};
}

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export interface IInvalidateSubredditAction extends Action {
	type: 'INVALIDATE_SUBREDDIT';
	subreddit: string;
}
export function invalidateSubreddit(subreddit: string) {
	return {
		type: INVALIDATE_SUBREDDIT,
		subreddit
	};
}

export const REQUEST_POSTS = 'REQUEST_POSTS';

export function requestPosts(subreddit: string) {
	return {
		type: REQUEST_POSTS,
		subreddit
	};
}


export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePosts(subreddit: string, json: Object) {
	return {
		type: RECEIVE_POSTS,
		subreddit,
		posts: (json as any).data.children.map(child => child.data),
		recivedAt: Date.now()

	}
}


export type Action = ISelectSubredditAction | IInvalidateSubredditAction;