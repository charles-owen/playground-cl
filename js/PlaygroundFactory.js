import {Playground} from "./Playground/Playground";

export const PlaygroundFactory = function() {}

PlaygroundFactory.create = function(site) {

	function install() {
		const elements = document.querySelectorAll('div.cl-playground');
		for(let i=0; i<elements.length; i++) {
			let element = elements[i];
			const json = JSON.parse(element.textContent);
			element.innerHTML = '';
			const playground = new Playground(site, element, json);
			playground.startNow();
		}
	}

	site.start( () => {
		install();
	});


	site.messageListener((msg, data) => {
		switch(msg) {
			case 'cl-quiz-after-installed':
				install();
				break;

			case 'cl-grades-grader-installed':
				install();
				break;

		}
	});

	site.Playground = Playground;
}

