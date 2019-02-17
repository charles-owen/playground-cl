
export const Tab = function(tabs, data) {
	this.tabs = tabs;

	this.view = null;
	this.tag = data.tag;
	this.name = data.name;

	let li = document.createElement('li');
	this.li = li;

	let a = document.createElement('a');
	li.appendChild(a);
	a.innerText = data.name;

	let menu = document.createElement('a');
	li.appendChild(menu);
	// let img = document.createElement('img');
	// menu.appendChild(img);
	// img.src = menubars;

	li.addEventListener('click', (event) => {
		event.preventDefault();
		this.select();
	});

	a.addEventListener('click', (event) => {
		event.preventDefault();
		this.select();
	});

	this.set = function(text) {}

	//
	// The menu
	// Maybe activate later on?
	//
	// const menuDiv = document.createElement('div');
	// menuDiv.classList.add('cl-tab-menu');
	// menuDiv.classList.add('cl-menu-open');
	// li.appendChild(menuDiv);
	//
	// const menuUL = document.createElement('ul');
	// menuDiv.appendChild(menuUL);
	// menuUL.innerHTML =
	// 	'<li><a class="edit-undo"><span class="icons-cl icons-cl-arrowreturnthick-1-w"></span>Undo</a></li>' +
	// 	'<li><a class="edit-delete"><span class="icons-cl icons-cl-trash"></span>Delete</a></li>';
	//
	// const connectDiv = document.createElement('div');
	// menuDiv.appendChild(connectDiv);
	//
	// img = document.createElement('img');
	// connectDiv.appendChild(img);
	// img.src = menubars;
}

Tab.prototype.select  = function() {
	this.tabs.unselectAll();

	this.li.classList.add('selected');
	this.view.classList.add('selected');
}
