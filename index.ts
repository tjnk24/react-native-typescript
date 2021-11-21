import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import App from './static/client/App';

AppRegistry.registerComponent(appName, () => App);
