import {Tools} from './DOM/Tools';
import menubars from '../../img/menubars.png';

/**
 * Manages the tabs in the model
 * @param main Main object
 * @param element Parent element
 * @constructor
 */
export const Tabs = function(main, element) {
    /// The currently active view/tab
    this.active = -1;

    // The collection of tabs
    var tabs = [];

    //
    // The structure: <div class="cl-tabs"><ul></ul><div class="cl-views"></div></div>
    // div.tabs - Enclosure for all tabs content
    // ul - The tabs we select from
    // viewsDiv - The views with the tab contents
    //

    let tabsDiv = null, ul = null, viewsDiv = null;

	/**
     * Create the tabs system
	 * @param div The div we put the tabs into
	 */
	this.create = (div) => {
        // Create: <div class="cl-tabs"><ul></ul><div class="cl-views"></div></div>
        tabsDiv = Tools.createClassedDiv('cl-tabs');
        ul = document.createElement('ul');
        tabsDiv.appendChild(ul);

        viewsDiv = Tools.createClassedDiv('cl-views');
        tabsDiv.appendChild(viewsDiv);

        div.appendChild(tabsDiv);

        // Clear the tabs collection
        tabs = [];

		this.add('program');
		this.add('output');
    }

    this.newParent = function(pane) {
		pane.div.appendChild(tabsDiv);
    }

    this.add = function(title) {
	    let li = document.createElement('li');
	    let a = document.createElement('a');
	    li.appendChild(a);
	    a.innerText = title;

	    let menu = document.createElement('a');
	    li.appendChild(menu);
	    // let img = document.createElement('img');
	    // menu.appendChild(img);
	    // img.src = menubars;

	    li.addEventListener('click', (event) => {
		    event.preventDefault();
		    selectLi(li);
	    });

	    a.addEventListener('click', (event) => {
		    event.preventDefault();
		    selectLi(li);
	    });

	    ul.appendChild(li);

	    //
	    // The menu
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

	    //
	    // The view
	    //
	    const view = Tools.createClassedDiv('cl-view');
	    viewsDiv.appendChild(view);

	    tabs.push({li: li, view: view});

	    this.selectTab(tabs.length-1, true);
    }



    const selectLi = (li) => {
        for(let i=0; i<tabs.length; i++) {
            if(tabs[i].li === li) {
                this.selectTab(i);
            }
        }
    }

    this.selectTab = (num, force) => {
        if(force !== true && num === this.active) {
            return;
        }

        //
        // Clear all selections
        //
        tabs.forEach((tab) => {
            Tools.removeClass(tab.li, 'selected');
            Tools.removeClass(tab.view, 'selected');
        });

        this.active = num;
        let tab = tabs[this.active];

        Tools.addClass(tab.li, 'selected');
        Tools.addClass(tab.view, 'selected');
    }

    // Return the current View object
    this.currentView = () => {
        if(this.active < 0) {
            return null;
        }

        return tabs[this.active].view;
    };

    // Return the current Circuit object
    this.currentCircuit = () => {
        if(this.active < 0) {
            return null;
        }

        return tabs[this.active].circuit;
    }

    // Implement undo for the tabs
    this.undo = function() {
        tabs.forEach((tab) => {
            tab.view.undo();
        });
    }

    this.destroy = function() {
        this.active = -1;
        tabsDiv.parentNode.removeChild(tabsDiv);
        tabsDiv = null;
        tabs = [];
    };

    this.validateName = function(name, skip) {
        var circuits = main.model.circuits;
        var collection = circuits.getCircuits();
        for(let i=0; i<collection.length; i++) {
            const circuit = collection[i];
            if(circuit === skip) {
                continue;
            }

            if (name.toLowerCase() === circuit.getName().toLowerCase()) {
                return 'Name ' + name + ' already in use by another tab';
            }
        }

        return null;
    }



    /**
     * Delete the active tab
     * @param index
     */
    this.delActive = (index) => {
        if(this.active < 0) {
            return;
        }

        main.model.deleteCircuitByIndex(this.active);
        this.sync();
    }

    this.rename = function(name) {
        let circuit = this.currentCircuit();
        circuit.setName(name);
        this.sync();
    }

    this.create(element);
};
