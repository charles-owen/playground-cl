/**
 * Base object for an action.
 * @param site Site object
 * @param options Options passed to this action
 * @constructor
 */
export const Action = function(site, options) {

	/**
	 * Get all sources for this action.
	 *
	 * Based on the option 'sources', which are tab tags.
	 * @return object with tab names and sources.
	 */
	this.getSources = function() {
		// Get the requisite tab contents
		const sources = {};

		if(options.sources === undefined || options.sources === null) {
			return sources;
		}

		for(const source of options.sources) {
			const tab = this.main.getTab(source);
			if(tab !== null) {
				sources[source] = {name: tab.name, data: tab.get()};
			}
		}

		return sources;
	}


}

Action.prototype.do = function(main) {
	this.main = main;
}