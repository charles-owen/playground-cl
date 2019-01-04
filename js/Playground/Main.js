import Resizer from 'resizer-cl';

import {Menu} from './Menu';
import {Toast} from './Graphics/Toast';
import {DragAndDrop} from './UI/DragAndDrop';
import {Tools} from './DOM/Tools';
import {Pane} from "./Pane";


/**
 * Actual instance of the Playground for a single element.
 * @param playground The main Playground object
 * @param element Element we are loading into
 * @constructor
 */
export const Main = function(playground, element) {
    this.playground = playground;
    this.site = playground.site;
    this.element = element;
    this.options = playground.options;

    /// div.main
    this.div = null;

    let options = playground.options;

    /// References to other GUI components
    let menu=null, tabs=null;

    /// div.overlay
    let divOverlay = null, divWork=null;

    this.initialize = function() {

    	element.classList.add('cl-playground');
        element.innerHTML = '';

        element.style.display = 'block';

	    if(options.height !== null) {
		    element.style.height = options.height;
	    }

        switch(options.display) {
            case 'full':
                element.classList.add('cl-playground-full');
                break;

            default:
	            element.classList.add('cl-playground-window');
                break;
        }

        if(options.display === 'window') {
            //
            // Add resizer to the window if in window mode
            // and it has not already been added
            //
            if(!element.classList.contains("resizer")) {
                new Resizer(element, {
                    handle: '10px solid #18453B'
                });
            }
        }

        this.dragAndDrop = new DragAndDrop(this);

        //
        // Create and add the window components
        //
        if(options.display !== 'inline' && options.display !== 'none') {
            //
            // All window-based versions other than inline get the
            // full user interface
            //

            // <div class="main"></div>
            this.div = Tools.createClassedDiv('cl-pg-main');
            this.element.appendChild(this.div);

            //
            // Add the menu
            //
            menu = new Menu(this);
            this.menu = menu;

            //
            // Working area
            // <div class="work"></div>
            //
            divWork = Tools.createClassedDiv('work');
            this.div.appendChild(divWork);


			//
	        // And the root pane
	        //
	        this.rootPane = new Pane(this, divWork, null, null);
	        this.rootPane.load(options.pane);

	        //
	        // And the overlay
	        // <div class="cirsim-overlay"></div>
	        //
	        divOverlay = Tools.createClassedDiv('cl-pg-overlay');
	        this.div.appendChild(divOverlay);

            this.toast = new Toast(this);
            this.toast.create(this.div);
        }

    }

    this.getTab = function(tag) {
        return this.rootPane.getTab(tag);
    }


    /**
     * Called whenever a new tab is selected
     */
    this.newTab = function() {

    }



    /**
     * Set or clear interface modal state.
     * @param modal True sets interface to modal state.
     *
     */
    this.modal = function(modal) {
        if(modal) {
            divOverlay.style.display = 'block';
        } else {
            divOverlay.style.display = 'none';
        }
    }


    this.initialize();
}
