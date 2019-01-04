import {Tabs} from './Tabs';

/**
 * A Pane is an area of the IDE screen that either contains a tab set or two child panes.
 * @param main Main object
 * @param element Element that is the host for the pane
 * @param parent Pane parent object
 * @constructor
 */
export const Pane = function(main, element, parent) {
	this.minSplit = 10;
	this.maxSplit = 90;

	let div = null, child1 = null, child2 = null;
	let horizontalSplit = null;
	let tabs = null;

	const initialize = () => {
		//
		// Create and add the div
		//

		div = document.createElement('div');
		this.div = div;

		if(parent === null) {
			div.classList.add('cl-playground-root');
		}

		element.appendChild(div);

		// if(donorTabs !== null) {
		// 	tabs = donorTabs;
		// 	tabs.newParent(this);
		// } else {
		// 	tabs = new Tabs(main, div);
		// }
	}

	/**
	 * Load the pane from the data
	 * @param data Data from options for this pane
	 */
	this.load = function(data) {
		if(data.child1 !== undefined) {
			// This is a split pane
			this.split(data.horiz, data.child1, data.child2);
			this.percentage(data.percentage);
		} else {
			tabs = new Tabs(main, div);
			tabs.load(data.tabs);
		}
	}

	this.split = function(horizontal, child1Data, child2Data) {
		horizontalSplit = horizontal;

		child1 = new Pane(main, div, this, tabs);
		child2 = new Pane(main, div, this, null);

		tabs = null;

		if(horizontal) {
			child1.div.classList.add('cl-playground-left');
			child2.div.classList.add('cl-playground-right');
		} else {
			div.style.flexDirection = 'column';
			child1.div.classList.add('cl-playground-top');
			child2.div.classList.add('cl-playground-bottom');
		}

		const bar = document.createElement('div');
		bar.classList.add('cl-bar');
		child1.div.appendChild(bar);

		bar.addEventListener('mousedown', (event) => {
			event.preventDefault();
			startDragging(event.pageX, event.pageY);

			element.addEventListener('mousemove', mouseMove);
			element.addEventListener('mouseup', mouseUp);
		});

		bar.addEventListener('touchstart', (event) => {
			event.preventDefault();

			console.log(event);

			let touch = event.changedTouches[0];
			startDragging(touch.pageX, touch.pageY);


			element.addEventListener('touchmove', touchMove);
			element.addEventListener('touchend', touchEnd);
			element.addEventListener('touchcancel', touchCancel);
		});

		this.child1 = child1;
		this.child2 = child2;

		this.percentage(50);

		if(child1Data !== undefined) {
			child1.load(child1Data);
		}

		if(child2Data !== undefined) {
			child2.load(child2Data);
		}

		return {child1: child1, child2: child2};
	}

	let startX = null, startY = null;

	const startDragging = (x, y) => {
		startX = x;
		startY = y;
	}

	const endDragging = () => {
		startX = null;
		startY = null;
	}


	const dragging = (x, y) => {
		const rect = element.getBoundingClientRect();


		if(horizontalSplit) {
			const mainX = rect.left + element.scrollLeft + window.pageXOffset;
			const wid = rect.right - rect.left;
			if(wid <= 0) {
				return;
			}

			const per = (x - mainX) / wid * 100;
			this.percentage(per);
		} else {
			const mainY = rect.top  + element.scrollTop + window.pageYOffset;

			const hit = rect.bottom - rect.top;
			if(hit <= 0) {
				return;
			}

			const per = (y - mainY) / hit * 100;
			this.percentage(per);
		}
	}

	const mouseMove = (event) => {
		event.preventDefault();

		if(event.which === 0) {
			mouseUp(event);
			return;
		}

		dragging(event.pageX, event.pageY);
	}

	const mouseUp = (event) => {
		event.preventDefault();
		element.removeEventListener('mousemove', mouseMove);
		element.removeEventListener('mouseup', mouseUp);
		endDragging(event.pageX, event.pageY);
	}

	const touchMove  = (event) => {
		event.preventDefault();
		let touch = event.changedTouches[0];
		dragging(touch.pageX, touch.pageY);
	}

	const touchEnd = (event) => {
		event.preventDefault();
		let touch = event.changedTouches[0];
		dragging(touch.pageX, touch.pageY);

		element.removeEventListener('touchmove', touchMove);
		element.removeEventListener('touchend', touchEnd);
		element.removeEventListener('touchcancel', touchCancel);

		endDragging(event.pageX, event.pageY);
	}

	const touchCancel = (event) => {
		touchEnd(event);
	}

	this.percentage = function(per) {
		if(per < this.minSplit) {
			per = this.minSplit;
		} else if(per > this.maxSplit) {
			per = this.maxSplit;
		}

		if(horizontalSplit) {
			child1.div.style.width = per + '%';
		} else {
			child1.div.style.height = per + '%';
		}
	}

	this.getTab = function(tag) {
		for(const collection of [tabs, child1, child2]) {
			if(collection !== null) {
				let tab = collection.getTab(tag);
				if(tab !== null) {
					return tab;
				}
			}
		}

		return null;
	}


	initialize();
}