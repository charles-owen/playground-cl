import {Tools} from './DOM/Tools';
import {OutputTab} from './Tabs/OutputTab';
import {EditorTab} from './Tabs/EditorTab';

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

    /// The Main object
    this.main = main;

    /// The Site object
    this.site = main.site;

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
	this.create = function(div) {
        // Create: <div class="cl-tabs"><ul></ul><div class="cl-views"></div></div>
        tabsDiv = Tools.createClassedDiv('cl-pg-tabs');
        ul = document.createElement('ul');
        tabsDiv.appendChild(ul);

        viewsDiv = Tools.createClassedDiv('cl-pg-views');
        tabsDiv.appendChild(viewsDiv);

        div.appendChild(tabsDiv);

        // Clear the tabs collection
        tabs = [];

	//	this.add('program');
//		this.add('output');
    }

    this.load = function(data) {
		for(const tabData of data) {
			this.add(tabData);
		}
    }

    this.newParent = function(pane) {
		pane.div.appendChild(tabsDiv);
    }

    this.add = function(data) {
		let tab = null;

	    switch(data.type) {
		    case 'editor':
			    tab = new EditorTab(this, data);
		    	break;

		    case 'output':
		    	tab = new OutputTab(this, data);
		    	break;
	    }

	    if(tab !== null) {
		    ul.appendChild(tab.li);
		    viewsDiv.appendChild(tab.view);
		    tabs.push({tab: tab, li: tab.li, view: tab.view});

		    tab.select();
	    }
    }

	/**
	 * Get a tab by tag.
	 * @param tag Tab tag
	 * @returns {*}
	 */
	this.getTab = function(tag) {
	    for(const tab of tabs) {
		    if(tab.tab.tag === tag) {
			    return tab.tab;
		    }
	    }

	    return null;
    }

    this.unselectAll = function() {
	    //
	    // Clear all selections
	    //
	    tabs.forEach((tab) => {
	    	tab.li.classList.remove('selected');
	    	tab.view.classList.remove('selected');
	    });
    }


    this.destroy = function() {
        this.active = -1;
        tabsDiv.parentNode.removeChild(tabsDiv);
        tabsDiv = null;
        tabs = [];
    };

    this.create(element);
};
