import {Action} from './Action';

export const SaveAction = function(site, options) {
	Action.call(this, site, options);

	this.do = function(main) {
		Action.prototype.do.call(this, main);

		// Get the requisite tab contents
		const sources = this.getSources();

		const params = {
			appTag: options.appTag,
			name: options.name,
			data: JSON.stringify(sources),
			type: 'application/json'
		};

		site.api.post('/api/filesystem/save', params)
			.then((response) => {
				console.log(response);
				if (!response.hasError()) {
					site.toast(this, 'Successfully saved to server');
				} else {
					site.toast(this, response);
				}

			})
			.catch((error) => {
				site.toast(this, error);
			});
	}
}

SaveAction.prototype = Object.create(Action.prototype);
SaveAction.prototype.constructor = SaveAction;

SaveAction.tag = 'save';