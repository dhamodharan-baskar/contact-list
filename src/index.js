import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Redux/Store';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>
);

reportWebVitals();
