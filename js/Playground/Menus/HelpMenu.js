import {AboutDialog} from '../Dlg/AboutDialog';

/**
 * The help menu
 * @param menu
 * @param main
 * @constructor
 */
export const HelpMenu = function(menu, main) {

    this.html = function() {
        return '<li><a>Help</a>' +
            '<ul class="help-menu">' +
            '<li><a class="help-about">About...</a></li>' +
            '</ul>' +
            '</li>';
    }

    this.activate = function() {
	    menu.click('.help-about', (event) => {
		    var dlg = new AboutDialog(main);
		    dlg.open();
	    });
    }

    this.opening = function() {
    }
}
