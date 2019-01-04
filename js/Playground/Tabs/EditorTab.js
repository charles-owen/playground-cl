import {Tab} from './Tab';
import {Tools} from "../DOM/Tools";

export const EditorTab = function(tabs, data) {
	Tab.call(this, tabs, data);

	const site = tabs.site;

	let view = document.createElement('div');
	view.classList.add('cl-pg-view');
	view.classList.add('editor');
	this.view = view;

	let innerView = document.createElement('div');
	view.appendChild(innerView);

	let nums = document.createElement('div');
	nums.classList.add('cl-pg-nums');
	innerView.appendChild(nums);

	let editorDiv = document.createElement('div');
	editorDiv.classList.add('cl-pg-editor');
	innerView.appendChild(editorDiv);

	const editor = new site.Editor(editorDiv, {
		resize: 'none',
		tab: true,
		autoIndent: true,
		styles: null
	});

	const scrollable = editor.textarea;
	scrollable.addEventListener('scroll', (event) => {
		// editorDiv.style.backgroundPosition = '0px ' + (-pre.scrollTop) + 'px';
		nums.scrollTop = scrollable.scrollTop;
	});

	this.set = function(text) {
		editor.textarea.value = text;

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

	/**
	 * Get the contents of the editor
	 * @returns {*|string}
	 */
	this.get = function() {
		return editor.textarea.value;
	}

	this.select = function() {
		Tab.prototype.select.call(this);

		setTimeout(() => {
			editor.textarea.focus();
		}, 0);

	}

	let text = `import {Tab} from './Tab';
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

	text = `.text
.thumb

loop:
    mov r0,#7
    mov r1,r2
    and r3,r4
    b loop`;

	this.set('');
}

EditorTab.prototype = Object.create(Tab.prototype);
EditorTab.prototype.constructor = EditorTab;