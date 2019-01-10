/**
 * Playground options.
 * @param options User provided options that override the default values.
 * @constructor
 */
export const Options = function(options) {
    options = options ? options : {};

    /// Display options
    /// window - Displays as a standard div (default)
    this.display = 'window';

    /// Optional height setting
    this.height = null;

    /// The playground root pane
    this.pane = {};

    /// The top-level menu options
    this.menus = [{name: 'About'}];

    /// Content to initially load into the tabs
    this.load = null;


    for(var property in options) {
        if(options.hasOwnProperty(property)) {
            if(!this.hasOwnProperty(property)) {
                throw new Error("Invalid option " + property);
            }
            this[property] = options[property];
        }
    }

    /**
     * Get the API operations for a given file mode.
     * @param mode 'save', 'open'
     * @returns {*}
     */
    this.getAPI = function(mode) {
        if(this.api === null) {
            return null;
        }

        if(this.api === Object(this.api)) {
            let obj;

            if(this.api[mode] !== undefined) {
 
                // Mode is explicitly specified
                var modeObj = this.api[mode];
                if(modeObj.url === undefined) {
                    // Mode is not supported
                    return null;
                }

                // Send content type
                obj = {url: modeObj.url};
                if(modeObj.contentType !== undefined) {
                    obj.contentType = modeObj.contentType;
                } else if(this.api.contentType !== undefined) {
                    obj.contentType = this.api.contentType;
                } else {
                    obj.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
                }

                if(modeObj.extra !== undefined) {
                    obj.extra = modeObj.extra;
                } else if(this.api.extra !== undefined) {
                    obj.extra = this.api.extra;
                } else {
                    obj.extra = {};
                }

                if(modeObj.name !== undefined) {
                    obj.name = modeObj.name;
                } else if(this.api.name !== undefined) {
                    obj.name = this.api.name;
                }
            } else {
                if(this.api.url === undefined) {
                    return null;
                }

                obj = {url: this.api.url};
                if(this.api.extra !== undefined) {
                    obj.extra = this.api.extra;
                } else {
                    obj.extra = {};
                }

                if(this.api.name !== undefined) {
                    obj.name = this.api.name;
                }
            }

            return obj;
        } else {
            return {url: this.api};
        }
    }
}
