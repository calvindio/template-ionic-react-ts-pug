const React = require('react')
const { Redirect, Route } = require('react-router-dom')
const {
	IonApp,
	IonRouterOutlet,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} = require('@ionic/react')
const { IonReactRouter } = require('@ionic/react-router')
const Home = require('./pages/Home')

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

declare const pug: any
const App: React.FC = () => {
	return pug`
  IonApp
    IonHeader
        IonToolbar
            IonTitle My App
    IonContent.ion-padding Add some content here…
  `
}

export default App
