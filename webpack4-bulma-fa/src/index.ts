import { library, dom } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
library.add(faUser);
dom.watch();

require('./mystyles.scss');

import { renderChart } from './chart';
renderChart('#chart');
