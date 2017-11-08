import Template7 from 'template7';
import $ from 'dom7';

// F7 Class
import Framework7 from 'framework7/src/components/core/core-class';

// Core Modules
import Device from 'framework7/src/modules/device/device';
import Support from 'framework7/src/modules/support/support';
import Utils from 'framework7/src/modules/utils/utils';
import Resize from 'framework7/src/modules/resize/resize';
import Request from 'framework7/src/modules/request/request';
import Touch from 'framework7/src/modules/touch/touch';
import Clicks from 'framework7/src/modules/clicks/clicks';
import Router from 'framework7/src/modules/router/router';
import History from 'framework7/src/modules/history/history';
import Storage from 'framework7/src/modules/storage/storage';

// Core Components
import Statusbar from 'framework7/src/components/statusbar/statusbar';
import View from 'framework7/src/components/view/view';
import Navbar from 'framework7/src/components/navbar/navbar';
import Toolbar from 'framework7/src/components/toolbar/toolbar';
import Subnavbar from 'framework7/src/components/subnavbar/subnavbar';
import TouchRipple from 'framework7/src/components/touch-ripple/touch-ripple';
import Modal from 'framework7/src/components/modal/modal';

// Components
<%
const { require } = options
const { startCase } = require('lodash')
const { existsSync } = require('fs')

const components = options.build.components.map(component => ({
  name: startCase(component).replace(/ /g,''),
  path: `framework7/src/components/${component}/${component}.js`
})).filter(component => {
  try {
    return existsSync(require.resolve(component.path))
  } catch (e) {
    return false
  }
})
%><%= components.map(component => `import ${component.name} from '${component.path}';`).join('\n') %>

if (process.env.FORMAT !== 'es') {
  // Template7
  if (!window.Template7) window.Template7 = Template7;

  // Dom7
  if (!window.Dom7) window.Dom7 = $;
}

// Install Core Modules & Components
Framework7.components = [
  Device,
  Support,
  Utils,
  Resize,
  Request,
  Touch,
  Clicks,
  Router,
  History,
  Storage,
  Statusbar,
  View,
  Navbar,
  Toolbar,
  Subnavbar,
  TouchRipple,
  Modal,
  // Components
  <%= components.map(component => component.name).join(',\n  ') %>
]

export default Framework7
