import {Tab} from './Tab';

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
		styles: null,
		spellcheck: true
	});

	const scrollable = editor.textarea;
	scrollable.addEventListener('scroll', (event) => {
		// editorDiv.style.backgroundPosition = '0px ' + (-pre.scrollTop) + 'px';
		nums.scrollTop = scrollable.scrollTop;
	});

	this.set = function(text) {
		// Data from the file system may consist of either just
		// text (old format) or text in an object. This allows
		// either case to work.
		if(text.data !== undefined) {
			text = text.data;
		}

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

	this.set('');
}

EditorTab.prototype = Object.create(Tab.prototype);
EditorTab.prototype.constructor = EditorTab;
