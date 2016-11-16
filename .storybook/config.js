import { configure } from '@kadira/storybook';

const req = require.context('../stories', true, /\.story\.jsx?$/);

function loadStories() {
	req.keys().forEach(req);
}

configure(loadStories, module);
