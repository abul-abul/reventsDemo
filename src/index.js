import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {configureStore} from "./app/store/configureStore";

const rootEl = document.getElementById('root');
const store = configureStore();
console.log(store.getState())
let render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>,
        rootEl
    );
}

// if(module.hot){
//     module.hot.accept('./app/layout/App', () => {
//         setTimeout(rootEl)
//     })
// }

render();


// serviceWorker.unregister();
