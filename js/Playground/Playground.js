import {Main} from './Main';
import {Options} from './Options';
import {Ready} from './Utility/Ready';

/**
 * Create an instance of the Playground
 *
 * This creates a single Instance that manages the
 * components and starts actual Playground windows.
 *
 * Construct and start running like this:
 *
 * Given an HTML div:
 *     <div id="playground"></div>
 *
 * The following script starts Playground in that div:
 *
 *     var playground = new Playground('#playground');
 *     playground.start();
 *
 * @param sel Selector or element to create Playground in (can be many)
 * @param options An object containing Playground options.
 * @constructor
 */
export const Playground = function(site, sel, options) {
    //
    // Master set of the version
    //
    let PACKAGE = require('../../package.json');
    this.version = PACKAGE.version;

    this.site = site;

    // Record the selector
    this.sel = sel;

    // The Options object that manages user options
    this.options = new Options(options);

    // A collection of Main objects.
    var mains = [];

    /**
     * Start the Playground running, creating the user interface.
     * This does wait for document ready before calling
     * this.startNow() unless we are running in no-window
     * mode. In that case it returns a started instance.
     */
    this.start = () => {
        if(sel === null) {
            return this.startNow();
        }

        Ready.go(() => {
            this.startNow();
        });
    }

    /**
     * Start the Playground running now. Does not wait for document ready.
     */
    this.startNow = () => {
        if(sel instanceof Element) {
            const main = new Main(this, sel);
            mains.push(main);
        } else {
            const elements = document.querySelectorAll(sel);
            for(let i=0; i<elements.length; i++) {
                const element = elements[i];
                const main = new Main(this, element);
                mains.push(main);
            }
        }

        if(mains.length === 1) {
            return mains[0];
        }

        return null;
    }
}
