
import './_playground.scss';
import {Playground} from './js/Playground/Playground';
import {PlaygroundFactory} from './js/PlaygroundFactory';

export {Playground};
export {Playground as default};

PlaygroundFactory.create(Site.site);

Site.Playground = Playground;

