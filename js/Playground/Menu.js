import {Tools} from './DOM/Tools';

import {FileMenu} from './Menus/FileMenu';
import {EditMenu} from './Menus/EditMenu';
import {TabsMenu} from './Menus/TabsMenu';
import {HelpMenu} from './Menus/HelpMenu';

/**
 * The program menu bar
 * @param main Main object
 * @constructor
 */
export const Menu = function(main) {
    //
    // Create the menu components
    //
    var fileMenu = new FileMenu(this, main);
    var editMenu = new EditMenu(this, main);
    var tabsMenu = new TabsMenu(this, main);
    var helpMenu = new HelpMenu(this, main);

    this.helpMenu = helpMenu;

    /// The nav element
    this.nav = null;
    this.ul = null;

    const initialize = () => {
        //
        // <nav class="menubar"><ul></ul></nav>
        //
        this.nav = document.createElement('nav');
        Tools.addClass(this.nav, 'menubar');
        main.div.appendChild(this.nav);

        const ul = document.createElement('ul');
        this.nav.appendChild(ul);
        this.ul = ul;

        //
        // Add the menu component's HTML
        //
	    let html = '';

	    html += fileMenu.html();
        html += editMenu.html();
        html += tabsMenu.html();
        html += helpMenu.html();

        ul.innerHTML = html;

        //
	    // Menu option for testing the Toast error reporting mechanism
	    //

	    // html += `<li><a class="toast-test">Toast!</a></li>`;
	    // ul.innerHTML = html;
		//
	    // this.toasts = 0;
        // this.click('.toast-test', (event)=> {
        // 	this.toasts++;
        // 	main.toast.message('Toast message ' + this.toasts);
        // });

        //
        // Install click handlers for all top-level menus
        //
        for(const node of ul.childNodes) {
            if(node.tagName === 'LI') {
                node.addEventListener('click', (event) => {
                    event.preventDefault();

                    // Find the <ul> in this menu
                    let ulSub = Tools.child(node, 'UL');
                    if(ulSub !== null) {
	                    if(getComputedStyle(ulSub).getPropertyValue('visibility') === 'hidden') {
		                    open(node);
	                    } else {
	                        // If already open, close all
		                    this.closeAll();
	                    }
                    }
                });
            }
        }

        // Activate all of the menus
        fileMenu.activate();
        editMenu.activate();
        tabsMenu.activate();
        helpMenu.activate();
    }

	/**
     * Listen to key down events so we can close the menu
     * if we click outside of the menu while it is open.
	 * @param event
	 */
	const closeListener = (event) => {
        // See if we clicked on some child of nav...
        let node = event.target.parentNode;
        for( ; node !== null; node = node.parentNode) {
            if(node === this.nav) {
                return;
            }
        }

	    this.closeAll();
    }

    // Open a menu
    const open = (li) => {
        // Hide any other menus
        for(const node of this.ul.childNodes) {
            if(node.tagName === 'LI') {
	            const ul = Tools.child(node, 'UL');
                if(ul !== null) {
                    Tools.removeClass(ul, 'menu-open');
                }
            }
        }

        tabsMenu.opening();
        helpMenu.opening();

	    // And open this menu
	    const ul = Tools.child(li, 'UL');
	    if(ul !== null) {
		    Tools.addClass(ul, 'menu-open');
	    }

	    document.addEventListener('click', closeListener);
        document.addEventListener('mousedown', closeListener);
    }

    /** Close all menus */
    this.closeAll = () => {
	    for(const node of this.ul.childNodes) {
		    if(node.tagName === 'LI') {
			    const ul = Tools.child(node, 'UL');
			    if(ul !== null) {
				    Tools.removeClass(ul, 'menu-open');
			    }
		    }
	    }

        document.removeEventListener('click', closeListener);
        document.removeEventListener('mousedown', closeListener);
    }

	/**
     * Enable or disable a menu option by selector
	 * @param sel Selector for the menu option (like '.tabs-add')
	 * @param enable True to enable
	 */
	this.enable = (sel, enable) => {
        const element = this.ul.querySelector(sel);
        if(element === null) {
            return;
        }

        if(enable) {
            Tools.removeClass(element.parentNode, "menu-disabled");
        } else {
            Tools.addClass(element.parentNode, "menu-disabled");
        }
    }


	/**
     * Find a menu option by selector
	 * @param sel
	 * @returns {Element}
	 */
	this.find = (sel) => {
        return this.ul.querySelector(sel);
    }

	/**
     * Install a menu option click hander
	 * @param sel Selector for the menu option
	 * @param closure The closure to call (passes 'event')
	 */
	this.click = (sel, closure) => {
	    const element = this.find(sel);
	    if(element !== null) {
	        element.addEventListener('click', (event) => {
	            event.preventDefault();
	            this.closeAll();
	            closure(event);
            });
        }
    }

    initialize();
};
