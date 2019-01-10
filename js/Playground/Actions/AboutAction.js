import {Action} from './Action';
import Dialog from 'dialog-cl';
import packagejson from '../../../package.json';

export const AboutAction = function(site, options) {
	Action.call(this, site, options);

	this.do = function(main) {
		Action.prototype.do.call(this, main);

		// Dialog box contents
		let content = `
<figure><img src="${site.root}/vendor/cl/playground/img/playground.jpg" alt="Cirsim Logo" width="400" height="225"></figure>
<div class="cl-pg-about-div">
<h1>CourseLib Playground</h1>
<p>Version: ${packagejson.version}</p>
<p>Written by: Charles B. Owen</p></div>`;

		const dialog = new Dialog({
			title: 'About the Playground',
			content: content,
			'addClass': 'cl-pg-about'
		});

	}
}

AboutAction.prototype = Object.create(Action.prototype);
AboutAction.prototype.constructor = AboutAction;

AboutAction.tag = 'about';