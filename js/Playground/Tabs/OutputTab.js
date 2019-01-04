import {Tab} from './Tab';
import {Tools} from "../DOM/Tools";

export const OutputTab = function(tabs, data) {
	Tab.call(this, tabs, data);

	let view = document.createElement('div');
	view.classList.add('cl-pg-view');
	view.classList.add('output');
	this.view = view;

	let innerView = document.createElement('div');
	view.appendChild(innerView);

	let nums = document.createElement('div');
	nums.classList.add('cl-pg-nums');
	innerView.appendChild(nums);

	let pre = document.createElement('pre');
	innerView.appendChild(pre);

	pre.addEventListener('scroll', (event) => {
		pre.style.backgroundPosition = '0px ' + (-pre.scrollTop) + 'px';
		nums.scrollTop = pre.scrollTop;
	});

	this.set = function(text) {
		pre.innerHTML = text;

		let lines = 0;
		for(let i = 0; i < text.length; ++i){
			if(text[i] === '\n') {
				lines++;
			}
		}

		if(lines < 100) {
			lines = 100;
		}

		// The extra added on here ensures we get past any scroll bar
		// that may take up horizontal room.
		nums.innerHTML = '';
		for(let i=1; i<=lines+5; i++) {
			const p = document.createElement('p');
			p.innerText = '' + i;
			nums.appendChild(p);
		}
	}

	const text = `import {Tab} from './Tab';
import {Tools} from "../DOM/Tools";

export const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {export const OutputTab = function(tabs, data) {
	Tab.call(this, tabs, data);

	let view = document.createElement('div');
	view.classList.add('cl-pg-view');
	view.classList.add('output');
	this.view = view;
	
	view.innerText = \`\`;
}

import {Tab} from './Tab';
import {Tools} from "../DOM/Tools";

export const OutputTab = function(tabs, data) {
	Tab.call(this, tabs, data);

	let view = document.createElement('div');
	view.classList.add('cl-pg-view');
	view.classList.add('output');
	this.view = view;
	
	view.innerText = \`\`;
}
import {Tab} from './Tab';
import {Tools} from "../DOM/Tools";

export const OutputTab = function(tabs, data) {
	Tab.call(this, tabs, data);

	let view = document.createElement('div');
	view.classList.add('cl-pg-view');
	view.classList.add('output');
	this.view = view;
	
	view.innerText = \`\`;
}

OutputTab.prototype = Object.create(Tab.prototype);
OutputTab.prototype.constructor = OutputTab;`;

	//this.set(text + text + text + text);
	this.set('');
}

OutputTab.prototype = Object.create(Tab.prototype);
OutputTab.prototype.constructor = OutputTab;