import {SaveAction} from './SaveAction';
import {AboutAction} from './AboutAction';

export const AllActions = function() {}

AllActions.addAll = function(Playground) {
	Playground.addAction(SaveAction);
	Playground.addAction(AboutAction);
}